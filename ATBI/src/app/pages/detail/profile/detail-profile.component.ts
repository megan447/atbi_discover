import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/Post";
import {DetailService} from "../detail.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-detail-profile',
    templateUrl: './detail-profile.component.html',
    styleUrls: ['./detail-profile.component.scss'],
    providers: [DetailService]

})
export class DetailProfileComponent implements OnInit {


    @Input()
    post: Post;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToProfile(){
        const url = '/home/profile/' + this.post.owner._id;
        this.router.navigate([url]);
    }
}
