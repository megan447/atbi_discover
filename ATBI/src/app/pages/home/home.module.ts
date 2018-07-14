import { NgModule } from '@angular/core';

import { HomeRouting } from './home-routing.module';
import {HomeComponent} from "./home.component";
import {SharedComponentModule} from "../../sharedComponents/sharedComponentsModule";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgMaterialModule} from "../../ngMaterial.module";
import {CommonModule} from "@angular/common";
import {CardComponent} from "./components/card.component";

@NgModule({
    imports: [CommonModule,
        NgMaterialModule,
        FormsModule,
        ReactiveFormsModule,SharedComponentModule, HomeRouting],
    declarations: [HomeComponent, CardComponent]
})
export class HomeModule {}