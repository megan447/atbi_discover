import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {NgMaterialModule} from './ngMaterial.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InstructionComponent} from "./pages/detail/instruction/instruction.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {CommentsComponent} from './pages/detail/comments/comments.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailProfileComponent} from './pages/detail/profile/detail-profile.component';
import {ProfileComponent} from "./pages/profile/profile.component";
import {StripHtmlPipe} from "./pages/profile/StripHtmlPipe";
import {HttpHandler, HttpClient} from "@angular/common/http";
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
        ProfileComponent,
        StripHtmlPipe,
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
