import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgMaterialModule} from './ngMaterial.module';
import {DetailComponent} from "./pages/detail/detail.component";

const routes: Routes = [
    {path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
    {path: 'home/detail/:id', component: DetailComponent},
    {path: 'home/profile', loadChildren: 'app/pages/profile/profile.module#ProfileModule' },
];

@NgModule({
    imports: [
        CommonModule,
        NgMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
    declarations: [],
    providers: []
})
export class AppRoutingModule {}