import { Component } from '@angular/core';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent {
  vehiculos: any[] = [];

  constructor(private service:VehiculoService){
    this.vehiculos = service.getList();
  }

  removeVehiculo(vehiculo:any){
    this.service.removeElement(vehiculo);
  }

}
