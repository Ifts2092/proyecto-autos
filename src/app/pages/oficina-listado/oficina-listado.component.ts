import { Component } from '@angular/core';
import { OficinaService } from 'src/app/service/oficina.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-oficina-listado',
  templateUrl: './oficina-listado.component.html',
  styleUrls: ['./oficina-listado.component.scss']
})
export class OficinaListadoComponent {

  oficinasListado: any[];

  constructor(private oficina: OficinaService,private sweetAlertService: SweetAlertService){
    this.oficinasListado = oficina.getList();
  }


  removeOfficeConfirm(vehiculo:any){
    // var deleteOffice = false
    // this.sweetAlertService.sweetConfirm("Estas seguro de eliminar esta oficina?","No podras revertir esta accion!",deleteOffice)
    // if(deleteOffice){
      this.oficina.removeElement(vehiculo);
    // }
  }


}
