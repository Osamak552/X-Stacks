
import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';



@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'trainer-filter.component.html'
  })
export class DialogOverviewExampleDialog {
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
     
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }