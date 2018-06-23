import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgMaterialModule} from "../ngMaterial.module";
import {CommentComponent} from "./commentComponent/comment.component";
import {MasonryComponent} from "./masonry/masonry.component";
import {MasonryDirective} from "./masonry/masonry.directive";

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule, NgMaterialModule,

    ],
    declarations: [CommentComponent,
        MasonryComponent,
        MasonryDirective],
    exports: [CommentComponent,
        MasonryComponent,
        MasonryDirective],
})
export class SharedComponentModule {
}
