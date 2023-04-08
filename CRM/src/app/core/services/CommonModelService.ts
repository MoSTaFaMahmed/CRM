import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialogRef,  MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddModalComponent } from 'src/app/components/add-modal/add-modal.component';
import { IContact } from '../models/IContact';

@Injectable()
export class CommonModelService {
  contact!:IContact;
  constructor(public dialog: MatDialog) { }
  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '600px',
      data: this.contact
    });

    return dialogRef.afterClosed();
  }
}