import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculos-edit',
  templateUrl: './vehiculos-edit.component.html',
  styleUrls: ['./vehiculos-edit.component.scss']
})
export class VehiculosEditComponent {

  currentVehiculo = {
    codigo: null,
    grupo: null,
    marca: null,
    modelo: null,
    ano: null,
  };

  constructor(private router : Router, private route: ActivatedRoute, private service:VehiculoService) {
    const codigo: string = route.snapshot.queryParams['codigo'];
    var data = service.getElementByCodigo(codigo);
    if(data){
      this.currentVehiculo = data;
    }
    
  }

  saveVehiculos(){
    if(this.currentVehiculo.codigo)
      this.service.setElementByCodigo(this.currentVehiculo);
    else
      this.service.addElement(this.currentVehiculo);
    this.router.navigate(['vehiculos-listado'])
  }

}
