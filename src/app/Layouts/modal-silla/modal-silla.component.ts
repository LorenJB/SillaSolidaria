import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SillasService } from '../../sillas/sillas.service';

@Component({
  selector: 'prot-modal-silla',
  templateUrl: './modal-silla.component.html',
  styles: []
})
export class ModalSillaComponent {

  numeroSilla : number;
  formReference : string;
  silla: any = [];

  constructor(
    public dialogRef: MatDialogRef<ModalSillaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.numeroSilla = data.numero;
    this.formReference = data.formulario;
    let listaSillas = new SillasService();
    
    for (const objSilla of listaSillas.getSillas()) {
      if (objSilla.numero === this.numeroSilla){
        this.silla = objSilla;
      }
    }
  }

}
