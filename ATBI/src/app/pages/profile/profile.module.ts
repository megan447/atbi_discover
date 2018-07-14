import {NgModule} from '@angular/core';

import {ProfileComponent} from './profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgMaterialModule} from "../../ngMaterial.module";
import {CommonModule} from "@angular/common";
import {ProfileRouting} from "./profile.routing";
import {StripHtmlPipe} from "./StripHtmlPipe";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
    imports: [CommonModule,
        NgMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        ProfileRouting
    ],
    declarations: [ProfileComponent,StripHtmlPipe]
})
export class ProfileModule {
}