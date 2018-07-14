import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgMaterialModule} from './ngMaterial.module';
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
    {path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule'},
    {path: 'profile/:id', component: ProfileComponent},
    {path: 'home/detail', loadChildren: 'app/pages/detail/detail.module#DetailModule' },
];

@NgModule({
    imports: [CommonModule,
        NgMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
    declarations: [],
    providers: []
})
export class AppRoutingModule {
}