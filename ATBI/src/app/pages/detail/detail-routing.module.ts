import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from "./detail.component";

const routes: Routes = [
    {path: ':id', component: DetailComponent},
];


export const DetailRouting: ModuleWithProviders = RouterModule.forChild(routes);