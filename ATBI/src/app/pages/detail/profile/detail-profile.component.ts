import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import { PopupdialogComponent } from '../popupdialog/popupdialog.component';
import {Post} from "../../../models/Post";
import {DetailService} from "../detail.service";

@Component({
    selector: 'app-detail-profile',
    templateUrl: './detail-profile.component.html',
    styleUrls: ['./detail-profile.component.scss'],
    providers: [DetailService]

})
export class DetailProfileComponent implements OnInit {


    @Input()
    post: Post;

    dialogResult = '';

    constructor(public dialog: MatDialog,
                public detailService: DetailService) {
    }

    ngOnInit() {
    }

    openDialog() {
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
