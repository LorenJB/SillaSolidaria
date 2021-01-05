import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'prot-modal-silla',
  templateUrl: './modal-silla.component.html',
  styles: [`
  .md-dialog-container { height: 100vh !important; top: 0 !important; position: fixed !important; }
  `]
})
export class ModalSillaComponent {

  numeroSilla : number

  constructor(
    public dialogRef: MatDialogRef<ModalSillaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {
    this.numeroSilla = data;
  }

}
