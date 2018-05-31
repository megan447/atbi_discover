import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {User} from "../../models/User";
import {AuthenticationService} from "../../globalServices/authentication.service";


@Component({
    selector: 'app-detail-page',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    constructor(private authService: AuthenticationService) {
    }

    title = 'home';

    post: Post;
    currentUser: User;


    ngOnInit(): void {
        this.post = new Post();
        this.post._id = '123456789';  // test
        this.post.owner = this.authService.getCurrentUser();
        this.currentUser = this.authService.getCurrentUser();
    }
}