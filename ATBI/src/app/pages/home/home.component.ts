import {Component, OnInit, AfterViewInit} from '@angular/core';
import {MasonryOptions} from "../../sharedComponents/masonry/masonry-options";
import {DiscoveryService} from "./discovery.service";

@Component({
    selector: 'app-home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [DiscoveryService]
})
export class HomeComponent implements OnInit,AfterViewInit {

    public masonryOptions: MasonryOptions = {
        transitionDuration: '0.2s',
        gutter: 20,
        resize: true,
        initLayout: true,
        fitWidth: true
    };

    masonryPosts;
    posts;
    limit = 5;
     constructor(private discoveryService: DiscoveryService){

     }


    ngOnInit(): void {

        this.discoveryService.loadAllPosts().subscribe(response=>{
            if(response.success){
                this.posts = response.result;
                if(this.posts && this.posts.length > 0){
                    this.masonryPosts = this.posts.slice(0, this.limit);
                }
            }
        });
    }

    ngAfterViewInit(): void {

    }

    showMorePosts() {
        this.limit += 5;
        this.masonryPosts = this.posts.slice(0, this.limit);
    }
}
