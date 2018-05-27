import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

    public comments: Comment[]=[
        new Comment(1,'2018-01-03 21:18','echo','ok','excellent','xiaoma'),
        new Comment(2,'2018-05-04 13:32','zz','fine','excellent','xiaoma'),
        new Comment(3,'2018-05-01 17:19','mm','cool','excellent','xiaoma'),
        ];

    isCommentHidden = true;

    newComment: string = '';

    commentNumber: number = 111;

    likeNumber: number = 110;

    likeState: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    addComment() {
        this.isCommentHidden = true;
        this.commentNumber = this.commentNumber + 1;
        const comment = new Comment(0, new Date().toISOString(), 'use1','Good',this.newComment,'Ai Lv Xing');
        this.comments.unshift(comment);
    }

    addLike () {
        if(!this.likeState){
            this.likeNumber ++;
            this.likeState = !this.likeState;
        }else{
            this.likeNumber --;
            this.likeState = !this.likeState;
        }
    }

}

export class Comment {
    constructor(public id:number,
                public timeStamp:string,
                public user: string,
                public authorReply: string,
                public content: string,
                public author: string
    ){}
}