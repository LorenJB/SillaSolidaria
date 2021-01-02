import { Component, OnInit } from '@angular/core';
import { SillasService } from './sillas.service';


@Component({
  selector: 'prot-sillas',
  templateUrl: './sillas.component.html' ,
  styles: []
})
export class SillasComponent implements OnInit {

  sillas : any = [];

  constructor() { 
    let sillas = new SillasService();
    this.sillas = sillas.getSillas();
  }
  
  ngOnInit(): void {
  }

}
