import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {User} from "../../models/User";
import {AuthenticationService} from "../../globalServices/authentication.service";
import {DetailService} from "./detail.service";
import {PopupdialogComponent} from "./popupdialog/popupdialog.component";
import {MatDialog} from '@angular/material';

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

        this.detailService.getBy_id('5b21c87364863a1f68b25ca8').subscribe(
            response=>{
                if(response.success){
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

    openEditDialog() {

    };


    openPostDialog() {
        let dialogRef = this.dialog.open(PopupdialogComponent, {
                width: "80%",
                height: "400px",
                data: { post: new Post() }
            },
        );

        dialogRef.afterClosed().subscribe(result => {
            console.log('closed:',result);
            this.detailService.addPost(result).subscribe(response=>{
                console.log(response);
                if(response.success){
                }
            });
        });
    }
}