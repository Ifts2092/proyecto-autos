import { Component } from '@angular/core';
import { OficinaService } from 'src/app/service/oficina.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-oficina-listado',
  templateUrl: './oficina-listado.component.html',
  styleUrls: ['./oficina-listado.component.scss']
})
export class OficinaListadoComponent {

  filtroOficina = "";
  filtrarPor: string | undefined;
  oficinasListado: any[];

  constructor(private oficina: OficinaService,private sweetAlertService: SweetAlertService){
    this.oficinasListado = oficina.getList();
  }


  removeOffice(office:any){
      this.oficina.removeElement(office);
  }



}
