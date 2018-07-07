import {Component, Inject, AfterViewInit, OnInit} from '@angular/core';
import {AuthenticationService} from "./globalServices/authentication.service";
import {User} from "./models/User";
import {APP_CONFIG, IAppConfig} from "./app.config";
import {MasonryOptions} from "./sharedComponents/masonry/masonry-options";

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {

    title = 'app';

    fakeUserArr: any;

    isLogged: boolean;
    currentUser: User;
    urlPrefix: string;


    constructor(@Inject(APP_CONFIG) private config: IAppConfig, private authenticationService: AuthenticationService) {
        this.urlPrefix = this.config.cloudPrefix;
    }


    ngOnInit(): void {
        this.fakeUserArr = [
            {value: '5b1498edf9277a06de5034ad', viewValue: 'Zlan'},
            {value: '5b149967f9277a06de5034af', viewValue: 'Jhonnie'},
            {value: '5b14994cf9277a06de5034ae', viewValue: 'Mike'},
            {value: '5b149a1bf9277a06de5034b0', viewValue: 'Megan'},
            {value: '5b149a42f9277a06de5034b1', viewValue: 'Echo'},
            {value: '5b149a6af9277a06de5034b2', viewValue: 'ZZhe'},
        ];
        this.authenticationService.getCurrentUser().subscribe(user => {
            console.log('test', user);
            if (user) {
                this.isLogged = true;
                this.currentUser = user;
            }
        });
    }

    ngAfterViewInit(): void {
        $('.icon-test').fadeIn(1000);
        $('h1').hide();
    }

    fakeLogin(value_id) {
        this.authenticationService.fakeUserLogin(value_id)
            .subscribe(
                response => {
                    if (response.success) {
                        this.currentUser = this.authenticationService.login(<User>response.result, response.token);
                    }
                },
                error => {
                });
    }

    logout() {
        this.authenticationService.logout();
    }

}
