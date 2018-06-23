import {Component,} from '@angular/core';
import {Router} from "@angular/router";
import { NzModalService } from 'ng-zorro-antd';

import {MatDialog} from "@angular/material";


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    providers: []
})
export class FooterComponent {

    isLicenseVisible = false;

    constructor(private router: Router,
                public dialog: MatDialog,
                private modalService: NzModalService
                ) {
    }


    openTerms() {
        // const dialogRef = this.dialog.open(TermsDialogComponent, {
        //     height: '500px'
        // });
        //
        // dialogRef.afterClosed().subscribe(result => {
        //     console.log(`Dialog result: ${result}`);
        // });
    }

    showLicense(){
        this.isLicenseVisible = true;

    }

    handleOk(): void {
        this.isLicenseVisible = false;
    }

    handleCancel(): void {
        this.isLicenseVisible = false;
    }
}



