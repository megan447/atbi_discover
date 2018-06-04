import {NgModule} from '@angular/core';
import {
    MatButtonModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule,
    MatTabsModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMenuModule
    ],
})

export class NgMaterialModule {

}