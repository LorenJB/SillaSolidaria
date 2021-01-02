import { Component, OnInit } from '@angular/core';
import { SillasService } from '../sillas/sillas.service';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'prot-main-index',
  templateUrl: 'main-index.component.html',
  styles: [], 
  animations:[fadeAnimation]
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
