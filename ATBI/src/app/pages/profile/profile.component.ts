import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    postCount: number = 112;
    followerCount: number = 188;
    followingCount: number = 298;
    btnEdit: string = 'Edit Profile';
    name: string = 'Joe';
    intro: string = 'is a foodie. He likes to know different people from different places.';

    constructor() {
    }

    ngOnInit() {
    }

}
