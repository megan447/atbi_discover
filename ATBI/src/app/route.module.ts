import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgMaterialModule} from './ngMaterial.module';
import {HomeComponent} from "./pages/home/home.component";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: 'detail/：id', loadChildren: 'app/pages/detail/detail.module#DetailModule' },
];

// @NgModule({
//     imports: [
//         CommonModule,
//         NgMaterialModule,
//         FormsModule,
//         ReactiveFormsModule,
//         RouterModule.forRoot(routes),
//     ],
//     exports: [RouterModule],
//     declarations: [],
//     providers: []
// })
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);