import {Component, Inject, Input, OnInit} from '@angular/core';
import {ProfileService} from "./profile.service";
import {AuthenticationService} from "../../globalServices/authentication.service";
import {APP_CONFIG, IAppConfig, NotificationSetting} from "../../app.config";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";
import {Post} from "../../models/Post";

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
    name: string = 'Joe';
    intro: string = 'is a foodie. He likes to know different people from different places.';

    private viewCount = 8;
    private VIEWPERPAGE = 8;

    posts: any;
    postsView: any;

    @Input()
    object_id: string;
    @Input()
    owner: User;

    private currentUser: User;

    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private route: ActivatedRoute,
                private profileService: ProfileService,
                private authService: AuthenticationService) {
    }

    // notification setting.
    public notifyOption = NotificationSetting.notificationCarpoolSetting;


    ngOnInit() {
        // this.posts =
        //     [{title: 'seafood', content: 'It is a good shellfish and very tasty.'},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]},
        //         {title: 'seafood', content: 'It is a good shellfish and very tasty.',imgUrls:[]}];
        // this.postsView = this.posts.slice(0, this.viewCount);
        this.currentUser = this.authService.getCurrentUser();
        this.loadProfilePosts();
    }

    private loadProfilePosts() {
        this.profileService.loadProfilePosts(this.currentUser._id)
            .subscribe(
                response => {
                    if (response.success) {
                        console.log(response.result);
                        this.posts = this.postsView = <Post[]>response.result;
                    }
                },
                error => {
                    // this._notificationsService.warn(
                    //     'Error',
                    //     error.message
                    // );
                });
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
        if ($(window).scrollTop() >= 50) {
            $('#btn_top').fadeIn();
        }
        else {
            $('#btn_top').fadeOut();
        }
    });
    $('#btn_top').click(function () {
        $('html,body').animate({scrollTop: 0}, 500);
    });

});