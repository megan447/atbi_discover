import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from '@angular/common/http'
import {ImageUploadModule} from 'angular2-image-upload';
import {SharedComponentModule} from "./sharedComponents/sharedComponentsModule";
import {AuthenticationService} from "./globalServices/authentication.service";
import {APP_CONFIG, AppConfig} from "./app.config";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {FooterComponent} from "./footer.component";
import {AppRoutingModule} from "./route.module";

/** register language package ** /
 import { registerLocaleData } from '@angular/common';
 import en from '@angular/common/locales/en';
 registerLocaleData(en);
 import { NZ_I18N, en_US } from 'ng-zorro-antd';
 **/

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        SharedComponentModule,
        BrowserAnimationsModule,
        ChartsModule,
        ReactiveFormsModule,
        FormsModule,
        NgZorroAntdModule.forRoot(),
        ImageUploadModule.forRoot(),
        HttpClientModule,
        AppRoutingModule
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
