import { Component } from '@angular/core';
import { oficinas } from './oficinas';
import { AgregarInfoService } from 'src/app/service/agregar-info.service';

@Component({
  selector: 'app-oficina-listado',
  templateUrl: './oficina-listado.component.html',
  styleUrls: ['./oficina-listado.component.scss']
})
export class OficinaListadoComponent {

  oficinasListado: any[];

  constructor(private agregarService: AgregarInfoService){
    this.oficinasListado = oficinas
  }

  ngOnInit(){

    if(this.agregarService.getInfo() != undefined){
      oficinas.push(this.agregarService.getInfo())
    }

  }

  eliminarOficina(codigo: any){
    // const oficina = this.oficinasListado.find(element => element.codigo === codigo);
    this.oficinasListado.splice(codigo,1)
  }

}
