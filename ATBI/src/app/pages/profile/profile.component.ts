///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Inject, Input, OnInit} from '@angular/core';
import {ProfileService} from "./profile.service";
import {AuthenticationService} from "../../globalServices/authentication.service";
import {APP_CONFIG, IAppConfig} from "../../app.config";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/User";
import {Post} from "../../models/Post";
import {NzModalService} from 'ng-zorro-antd';


declare var $: any;


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [ProfileService]
})

export class ProfileComponent implements OnInit {

    postCount: number = 112;
    followerCount: number = 188;
    followingCount: number = 298;
    btnEdit: string = 'Edit Profile';
    name: string;
    intro: string = 'is a foodie. He likes to know different people from different places.';
    private viewCount = 8;
    VIEWPERPAGE = 8;
    public href: string = "";
    owner_id: string;
    public postOwner: User;

    posts: any;
    postsView: any;
    urlPrefix: string;


    currentUser: User;

    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private route: ActivatedRoute,
                private profileService: ProfileService,
                private authService: AuthenticationService,
                private router: Router,
                private modalService: NzModalService) {
        this.urlPrefix = this.config.cloudPrefix;
    }

    ngOnInit() {
        this.href = this.router.url;
        // console.log(this.href.split("/")[3]);
        this.owner_id = this.href.split("/")[3];
        this.authService.getCurrentUser().subscribe(user => {
            this.currentUser = user;
        });
        //console.log(this.currentUser._id);
        // this.profileImgUrl = "";
        // console.log(this.currentUser);
        if (this.owner_id) {
            this.getPostOwnerInfo();
            this.loadProfilePosts();
        }
    }

    private loadProfilePosts() {
        this.profileService.loadProfilePosts(this.owner_id)
            .subscribe(
                response => {
                    if (response.success) {
                        this.posts = this.postsView = <Post[]>response.result;
                    }
                });
    }

    private getPostOwnerInfo() {
        this.profileService.getPostOwnerInfo(this.owner_id)
            .subscribe(
                response => {
                    if (response.success) {
                        console.log(response.result);
                        this.postOwner = response.result;
                    }
                });
    }

    showDeleteConfirm(id): void {
        this.modalService.confirm({
            nzTitle: 'Are you sure delete this task?',
            nzContent: '<b style="color: red;">Some descriptions</b>',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => this.deleteProfilePosts(id),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }

    deleteProfilePosts(id) {
        if (this.currentUser._id == this.owner_id) {
            this.profileService.deleteProfilePosts(id)
                .subscribe(
                    response => {
                        if (response.success) {
                            this.posts = this.postsView = this.posts.filter(post => post._id !== id);
                        }
                    },
                    error => {
                        // this._notificationsService.warn(
                        //     'Error',
                        //     error.message
                        // );
                    });
        } else {
            alert("sorry you cannot delete");
        }
    }

    goToDetail(id) {
        const url = '/home/detail/' + id;
        this.router.navigate([url]);
    }

    viewMore() {
        this.viewCount += this.VIEWPERPAGE;
        let currentDisplayItems = this.viewCount;
        this.postsView = this.posts.slice(0, currentDisplayItems);
    }

}

//jq go Top function
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('#btn_top').fadeIn();
        }
        else {
            $('#btn_top').fadeOut();
        }
    });
    $('#btn_top').click(function () {
        $('html,body').animate({scrollTop: 0}, 100);
    });

});

