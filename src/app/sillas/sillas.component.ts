import { Component, OnInit } from '@angular/core';
import { SillasService } from './sillas.service';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'prot-sillas',
  templateUrl: './sillas.component.html',
  styles: [],
  animations: [fadeAnimation]
})
export class SillasComponent implements OnInit {

  sillas: any = [];
  filterSilla = '';
  heroTotal = -1;
  constructor() {
    let sillas = new SillasService();
    this.sillas = sillas.getSillas();
  }

  ngOnInit(): void {
  }

}
