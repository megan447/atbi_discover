import {Component, Input, OnInit,Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import {Post} from "../../../models/Post";
import {NzMessageService, UploadFile} from 'ng-zorro-antd'
import {PopupdialogComponent} from "../popupdialog/popupdialog.component";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  public title:string;
    post: Post;
    editorContent: any;
    previewImage = '';
    previewVisible = false;
    loading = false;
    fileList = [
        {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
    ];
    editorConfig = {
        "editable": true,
        "spellcheck": true,
        "height": "auto",
        "minHeight": "20",
        "width": "auto",
        "minWidth": "0",
        "translate": "yes",
        "enableToolbar": true,
        "showToolbar": true,
        "placeholder": "Enter text here...",
        "imageEndPoint": "",
        "toolbar": [
            ["bold", "italic", "underline", "strikeThrough"],
            ["fontName", "fontSize"],
            ["justifyLeft", "justifyCenter","justifyFull"],
            ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
            ["horizontalLine", "orderedList", "unorderedList"],

        ]
    };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<PopupdialogComponent>,
              private msg: NzMessageService) {

      this.editorContent= this.data;
  }


  ngOnInit() {
    // document.getElementById('title').innerHTML = this.title;

  }
    handlePreview = (file: UploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    };

    beforeUpload = (file: File) => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            this.msg.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            this.msg.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    };

    private getBase64(img: File, callback: (img: {}) => void): void {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange(info: { file: UploadFile }): void {
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, (img: string) => {
                this.loading = false;
                this.post.images.push("https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426");
            });
        }
    }

    onSubmitClick(): void {

        this.post.content= this.editorContent;
        // this.onAdd.emit(this.post);
        this.dialogRef.close(this.post);
        console.log(this.post);
    }

}
