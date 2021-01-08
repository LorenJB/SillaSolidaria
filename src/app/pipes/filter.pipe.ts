import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg == '' ) return value;
    if (arg.length < 2 ) return value;
    const resultSilla = [];
    for (const silla of value) {
      let nombre = silla.nombre.toUpperCase();
      let descripcion = silla.descripcion.toUpperCase();
      if (nombre.includes(arg.toUpperCase()) || descripcion.includes(arg.toUpperCase())) {
        resultSilla.push(silla);
      }
    }

    return resultSilla;
  }

}
