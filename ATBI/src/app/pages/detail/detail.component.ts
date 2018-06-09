import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {User} from "../../models/User";
import {AuthenticationService} from "../../globalServices/authentication.service";
import {DetailService} from "./detail.service";


@Component({
    selector: 'app-detail-page',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    providers: [DetailService]
})
export class DetailComponent implements OnInit {
    constructor(private authService: AuthenticationService,
                private detailService: DetailService) {
    }

    title = 'home';

    post: Post;
    currentUser: User;


    ngOnInit(): void {

        this.detailService.getBy_id('5b1c39a7bb9bbd396c22baca').subscribe(
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
}