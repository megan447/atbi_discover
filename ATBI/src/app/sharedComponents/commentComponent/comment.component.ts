import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../models/User";
import {CommentService} from "./comment.service";
import {APP_CONFIG, IAppConfig, NotificationSetting} from "../../app.config";
import {PaginationHelper} from "../../helpers/pagination.helper";
import {Comment} from "../../models/Comment";
import {AuthenticationService} from "../../globalServices/authentication.service";

declare var $: any;

@Component({
    selector: 'app-comment-component',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
    providers: [CommentService]
})

export class CommentComponent implements OnInit {

    @Input()
    object_id: string;
    @Input()
    owner: User;

    comments: Comment[];
    countComments: number;
    commentPostForm: FormGroup;
    private currentUser: User;

    public nPHelper: PaginationHelper;

    urlPrefix: string;
    userAvatar: string;

    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private route: ActivatedRoute,
                private commentService: CommentService,
                private fb: FormBuilder,
                private authService: AuthenticationService) {
        this.nPHelper = new PaginationHelper();
        this.comments = [];
        this.urlPrefix = this.config.cloudPrefix;
    }

    // notification setting.
    public notifyOption = NotificationSetting.notificationCarpoolSetting;


    ngOnInit() {
        this.createForm();
        this.authService.getCurrentUser().subscribe(user => {
            if (user)
                this.currentUser = user;
        });
        this.loadComments();
    }

    private createForm() {
        this.commentPostForm = this.fb.group({
            post_content: '',
        });
    }

    private loadComments() {
        this.commentService.loadComments(this.object_id.toString())
            .subscribe(
                response => {
                    if (response.success) {
                        this.comments = <Comment[]>response.result;
                        this.countComments = this.comments.length;
                        this.nPHelper.initPageHelper(this.comments);
                    }
                },
                error => {
                    // this._notificationsService.warn(
                    //     'Error',
                    //     error.message
                    // );
                });
    }

    /**
     * add comment at 1st level, no parent(topic) comment
     */
    addComment() {
        if (!this.currentUser) {
            // this._notificationsService.warn(
            //     'Login required',
            //     'Please sign in first, Thanks!'
            // );
            return;
        }

        let message = this.commentPostForm.get('post_content').value;
        if (this.commentPostForm.valid && message.trim()) {
            let comment = new Comment();
            comment.content = message;
            comment.object_id = this.object_id;
            comment.fromUser = this.currentUser;
            comment.toUser = this.owner;
            this.postComment(comment);
        }
    }

    /**
     * reply comment at 2st level, has parent(topic) comment
     *
     * @param {Comment} parentComment
     * @param {string} value
     */
    replyComment(parentComment: Comment, value: string) {
        const currentUser = this.authService.getCurrentUser();  // recreate, make sure logged in when the moment that he's posting
        if (!currentUser) {
            // this._notificationsService.warn(
            //     'Login required',
            //     'Please sign in first, Thanks!'
            // );
            return;
        }

        if (value.trim()) {
            value = '@' + parentComment.fromUser.username + ' ' + value;   // added reply prefix for it
            let commentReply = new Comment();
            commentReply.content = value;
            commentReply.object_id = this.object_id;
            commentReply.fromUser = this.currentUser;
            commentReply.toUser = parentComment.fromUser;
            commentReply.parent = parentComment;
            this.postComment(commentReply);
        }
    }

    /**
     * Comment post executor, post Comment object to service
     * @param {Comment} comment
     */
    private postComment(comment: Comment) {
        this.userAvatar = this.authService.getUserAvatar();
        this.commentService.addComment(comment)
            .subscribe(
                response => {
                    if (response.success && response.result) {
                        const newComment = <Comment>response.result;
                        newComment.fromUser = this.currentUser;
                        // newComment.fromUser.imageUrl = this.userAvatar;
                        if (comment.parent) { // This belongs to reply.
                            this.comments.map((item) => {
                                if (item._id === comment.parent._id) {
                                    item.children = item.children ? item.children : [];
                                    item.children.push(newComment);
                                    return; // break scan
                                }
                            });
                            $('.comment-reply-input').val('');
                            $('.collapse.show').collapse('hide');
                        } else { // This doesn't
                            this.comments.push(newComment);
                            this.commentPostForm.reset();
                            this.countComments++;
                        }
                        this.nPHelper.updateItems(this.comments);
                        // this._notificationsService.success(
                        //     'Comment added.',
                        //     'Your comment is added.'
                        // );
                    }
                },
                error => {
                    // this._notificationsService.warn(
                    //     'Error',
                    //     error.message
                    // );
                });
    }
}

