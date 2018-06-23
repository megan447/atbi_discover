import {Component, OnInit, AfterViewInit, Input} from '@angular/core';

declare var $: any;


@Component({
    selector: 'app-home-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit,AfterViewInit {

    title = 'home';

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        $('.icon-test').fadeIn(1000);
        $('h1').hide();
    }
}
