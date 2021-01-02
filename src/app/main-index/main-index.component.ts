import { Component, OnInit } from '@angular/core';
import { SillasService } from '../sillas/sillas.service';

@Component({
  selector: 'prot-main-index',
  templateUrl: 'main-index.component.html',
  styles: [
  ]
})
export class MainIndexComponent implements OnInit {

  sillas : any = [];

  constructor() { 
    let sillas = new SillasService();
    this.sillas = sillas.getSillas();
  }

  ngOnInit(): void {
  }

}
