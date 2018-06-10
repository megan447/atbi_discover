import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Post} from "../../../models/Post";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-popupdialog',
  templateUrl: './popupdialog.component.html',
  styleUrls: ['./popupdialog.component.scss']
})
export class PopupdialogComponent implements OnInit {

    post: Post;
    content: any;
    // onAdd = new EventEmitter();

    constructor(
        public dialogRef: MatDialogRef<PopupdialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.post = this.data.post;
    }
    ngOnInit() {
    }

    onUploadFinished(event){
        this.post.images.push("https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426");
    }

    onSubmitClick(): void {
        this.post.content = this.content;
        // this.onAdd.emit(this.post);
        this.dialogRef.close(this.post);
    }
}
