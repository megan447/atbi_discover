import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./profile.component";

const routes: Routes = [
    { path: ':id', component: ProfileComponent }
];

export const ProfileRouting: ModuleWithProviders = RouterModule.forChild(routes);