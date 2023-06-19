import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-reservas-edit',
  templateUrl: './reservas-edit.component.html',
  styleUrls: ['./reservas-edit.component.scss']
})
export class ReservasEditComponent {

  currentReserva = {
    codigo: null,
    auto: null,
    precio: null,
    seguro: null,
    dias: null,
    cliente: null,
  };

  constructor(private router : Router, private route: ActivatedRoute, private service:ReservaService) {
    const codigo: string = this.route.snapshot.queryParams['codigo'];
    var data = service.getElementByCodigo(codigo);
    if(data){
      this.currentReserva = data;
    }
    
  }

  saveReserva(){
    if(this.currentReserva.codigo)
      this.service.setElementByCodigo(this.currentReserva);
    else
      this.service.addElement(this.currentReserva);
    this.router.navigate(['reservas-listado'])
  }

}
