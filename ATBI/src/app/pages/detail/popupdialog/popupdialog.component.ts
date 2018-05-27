import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-popupdialog',
  templateUrl: './popupdialog.component.html',
  styleUrls: ['./popupdialog.component.scss']
})
export class PopupdialogComponent implements OnInit {

    images: any;

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form.form.value);
    }

}
