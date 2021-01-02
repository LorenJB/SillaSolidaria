import { Component, OnInit } from '@angular/core';
import { SillasService } from '../sillas/sillas.service';

@Component({
  selector: 'prot-donar',
  templateUrl: 'donar.component.html',
  styles: [`
  .hight_screen{
    height: 80.9vh;
  }
  `]
})
export class DonarComponent implements OnInit {

  sillas : any = [];

  constructor() { 
    let sillas = new SillasService();
    this.sillas = sillas.getSillas();
  }

  ngOnInit(): void {
  }

}
