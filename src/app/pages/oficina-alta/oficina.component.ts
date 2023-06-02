import { Component } from '@angular/core';
import { oficinas } from '../oficina-listado/oficinas';
import { AgregarInfoService } from 'src/app/service/agregar-info.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.scss']
})
export class OficinaComponent {

  oficina: any = {
    codigo: oficinas.length + 1,
    ciudad: undefined,
    calle: undefined,
    numero: 0,
    codigoPostal: 0,
    telefono: 0
  }

  constructor(
    private agregarService: AgregarInfoService,
    private sweetAlertService: SweetAlertService,
    private router: Router
    ){

  }


  agregarOficina(){
    this.agregarService.setInfo(
      this.oficina
    )
    this.sweetAlertService.creacionOficina("Oficina creada", "Se ha creado una nueva oficina", "success")
    this.router.navigate(["oficinas-listado"])

  }

}
