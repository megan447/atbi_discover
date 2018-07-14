import { NgModule } from '@angular/core';
import { EditDialogComponent }   from './edit-dialog/edit-dialog.component';
import { InstructionComponent } from './instruction/instruction.component';
import { PopupdialogComponent } from './popupdialog/popupdialog.component';
import { DetailProfileComponent } from './profile/detail-profile.component';
import { DetailRouting } from './detail-routing.module';
import {DetailComponent} from './detail.component';
import {FormsModule} from "@angular/forms";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {NgMaterialModule} from '../../ngMaterial.module';
import {CommonModule} from '@angular/common';
import {SharedComponentModule} from '../../sharedComponents/sharedComponentsModule';
import {NgxEditorModule} from 'ngx-editor';


@NgModule({
    imports: [
        FormsModule,
        NgZorroAntdModule,
        NgMaterialModule,
        CommonModule,
        SharedComponentModule,
        NgxEditorModule,
        DetailRouting
    ],
    declarations: [
        EditDialogComponent,
        InstructionComponent,
        PopupdialogComponent,
        DetailProfileComponent,
        DetailComponent
    ],
    entryComponents: [
        PopupdialogComponent,
        EditDialogComponent
    ],
})
export class DetailModule {}