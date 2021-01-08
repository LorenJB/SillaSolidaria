import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SillasService } from '../sillas/sillas.service';

@Component({
  selector: 'prot-donar',
  templateUrl: 'donar.component.html',
  styles: [`
  .hight_screen{
    height: 71vh;
  }
  `]
})
export class DonarComponent implements OnInit {

  sillas: any = [];
  sillaSelecionada: string;
  numeroSilla: string = "0";
  constructor(private _ac: ActivatedRoute) {
    let sillas = new SillasService();
    this.sillas = sillas.getSillas();
  }

  cambiarImagen(numero): void {
    for (const silla of this.sillas) {
      if (silla.numero == numero) {
        this.sillaSelecionada = "../../assets/img/sillas/" + silla.imagen + "_sil.jpg";
      }
    }
  }

  ngOnInit(): void {
    this._ac.paramMap.subscribe(params => {
      if (params.get('silla') != null) {
        this.numeroSilla = params.get('silla');
      }
    })
    console.log(this.numeroSilla);
    if (this.numeroSilla == '0') {
      this.cambiarImagen(1);
    } else {
      this.cambiarImagen(this.numeroSilla);
    }

  }

}
