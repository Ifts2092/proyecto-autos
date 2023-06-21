import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(values: any, ...args: any[]): any {
    const [busqueda, buscarPor]: string[] = args;
    if (busqueda != "" && buscarPor != "") {
      const resultadoBusqueda = values.filter( (obj: { [x: string]: string; }) => obj[buscarPor].toLowerCase().indexOf(busqueda.toLowerCase()) > -1 );
      return resultadoBusqueda;
    } else return values;
  }

}
