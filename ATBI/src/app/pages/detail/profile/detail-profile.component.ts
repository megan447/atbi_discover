import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import { PopupdialogComponent } from '../popupdialog/popupdialog.component';

@Component({
    selector: 'app-detail-profile',
    templateUrl: './detail-profile.component.html',
    styleUrls: ['./detail-profile.component.scss']
})
export class DetailProfileComponent implements OnInit {


    dialogResult = '';

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    openDialog() {
        let dialogRef = this.dialog.open(PopupdialogComponent, {
            width: "80%",
            height: "400px"
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`closed: ${result}`);
            this.dialogResult = result;
        })
    }

}
