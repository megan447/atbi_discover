import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Post} from "../../../models/Post";

declare var $: any;


@Component({
    selector: 'app-home-card',
    templateUrl: './card.component2.html',
    styleUrls: ['./card.component2.scss']
})
export class CardComponent implements OnInit,AfterViewInit {

    @Input()
    post:Post;


    constructor(private router: Router){

    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        $('.icon-test').fadeIn(1000);
        $('h1').hide();
    }


    goToDetail(){
        const url = '/home/detail/' + this.post._id;
        this.router.navigate([url]);
    }

    goToProfile(){
        const url = '/home/profile/' + this.post.owner._id;
        this.router.navigate([url]);
    }

}
