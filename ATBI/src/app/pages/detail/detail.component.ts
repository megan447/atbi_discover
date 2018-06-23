import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {User} from "../../models/User";
import {AuthenticationService} from "../../globalServices/authentication.service";
import {DetailService} from "./detail.service";
import {PopupdialogComponent} from "./popupdialog/popupdialog.component";
import {MatDialog} from '@angular/material';
import {EditDialogComponent} from "./edit-dialog/edit-dialog.component";


@Component({
    selector: 'app-detail-page',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    providers: [DetailService]
})
export class DetailComponent implements OnInit {

    constructor(private authService: AuthenticationService,
                private detailService: DetailService,
                public dialog: MatDialog) {
    }

    title = 'home';
    post: Post;
    currentUser: User;


    ngOnInit(): void {

        this.detailService.getBy_id('5b22db8b66654f3064d55743').subscribe(
            response => {
                if (response.success) {
                    //get result from server and give the value to post
                    this.post = response.result;
                    this.post.owner = this.authService.getCurrentUser();
                    this.currentUser = this.authService.getCurrentUser();
                    console.log(this.post);
                }
            }
        );
        // this.post = new Post();
        // this.post._id = '5aebbdd1356c600be52f6146';  // test
    }


// get content and edit it
    openEditDialog() {
        const dialogRef = this.dialog.open(EditDialogComponent, {
                width: "80%",
                height: "400px",
                data: {
                    post: this.post
                },
            }
        );

        dialogRef.afterClosed().subscribe(result => {

            console.log('closed:', result);
            this.detailService.updatePost(result).subscribe(response => {
                console.log(response);
                if (response.success) {
                }
            });
        });

    };


// this is a function which is used to open a new post dialog
    openPostDialog() {
        const dialogRef = this.dialog.open(PopupdialogComponent, {
                width: "80%",
                height: "400px",
                // none value
                data: {post: new Post()}
            },
        );

        dialogRef.afterClosed().subscribe(result => {
            if (!result.content) {
                return;
            }
            console.log('closed:', result);
            this.detailService.addPost(result).subscribe(response => {
                console.log('jieshuoshi:', response);
                if (response.success) {
                }
            });
        });
    }
}