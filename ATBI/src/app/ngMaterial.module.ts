import {NgModule} from '@angular/core';
import {
    MatButtonModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule,
    MatTabsModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule,
    MatDialogModule,MatStepperModule
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
        MatMenuModule,
        MatDialogModule,
        MatStepperModule

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
        MatMenuModule,
        MatDialogModule,
        MatStepperModule
    ],
})

export class NgMaterialModule {

}