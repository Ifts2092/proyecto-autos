import { Component } from '@angular/core';
import { oficinas } from './oficinas';
import { AgregarInfoService } from 'src/app/service/agregar-info.service';

@Component({
  selector: 'app-oficina-listado',
  templateUrl: './oficina-listado.component.html',
  styleUrls: ['./oficina-listado.component.scss']
})
export class OficinaListadoComponent {

  oficinas: any[];

  constructor(private agregarService: AgregarInfoService){
    this.oficinas = oficinas
  }

  ngOnInit(){

    if(this.agregarService.getInfo() != undefined){
      oficinas.push(this.agregarService.getInfo())
    }

  }

}
