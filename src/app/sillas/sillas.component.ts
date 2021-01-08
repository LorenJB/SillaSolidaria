import { Component, OnInit } from '@angular/core';
import { SillasService } from './sillas.service';
import { fadeAnimation } from '../animations';
import { MatDialog } from '@angular/material/dialog';
import { ModalSillaComponent } from '../Layouts/modal-silla/modal-silla.component';

@Component({
  selector: 'prot-sillas',
  templateUrl: './sillas.component.html',
  styles: [],
  animations: [fadeAnimation]
})
export class SillasComponent implements OnInit {

  sillas: any = [];
  filterSilla = '';
  urlContext: string;

  constructor(public dialog: MatDialog) {
    let sillas = new SillasService();
    this.sillas = sillas.getSillas();


  }

  openDialog(numeroSilla): void {
    const dialogRef = this.dialog.open(ModalSillaComponent, {
      data: numeroSilla,
      hasBackdrop: true
    });
  }

  ngOnInit(): void {
    this.urlContext = location.origin;
  }

}
