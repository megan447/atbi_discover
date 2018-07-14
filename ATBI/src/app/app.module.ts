import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from "./pages/home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileComponent} from "./pages/profile/profile.component";
import {StripHtmlPipe} from "./pages/profile/StripHtmlPipe";
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {HttpHandler, HttpClient} from "@angular/common/http";
import {HttpClientModule} from '@angular/common/http'
import {ImageUploadModule} from 'angular2-image-upload';
import {CardComponent} from "./pages/home/components/card.component";
import {SharedComponentModule} from "./sharedComponents/sharedComponentsModule";
import {AuthenticationService} from "./globalServices/authentication.service";
import {APP_CONFIG, AppConfig} from "./app.config";
import {DetailModule} from './pages/detail/detail.module';
import {routing} from './route.module'

import {FooterComponent} from "./footer.component";

/** register language package ** /
 import { registerLocaleData } from '@angular/common';
 import en from '@angular/common/locales/en';
 registerLocaleData(en);
 import { NZ_I18N, en_US } from 'ng-zorro-antd';
 **/

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        CardComponent,
        StripHtmlPipe,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        SharedComponentModule,
        BrowserAnimationsModule,
        ChartsModule,
        ReactiveFormsModule,
        FormsModule,
        NgZorroAntdModule,
        ImageUploadModule.forRoot(),
        HttpClientModule,
        DetailModule,
        routing,
    ],

    providers: [
        HttpClient, AuthenticationService,
        {
            provide: APP_CONFIG,
            useValue: AppConfig
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
