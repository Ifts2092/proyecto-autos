import { Component } from '@angular/core';
import { reservas } from './reservas';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {

  filtroReserva = "";
  filtrarPor: string | undefined;

  reservas: any[] = reservas

  constructor(private service:ReservaService){
    this.reservas = service.getList();
  }


  removeReserva(reserva:any){
    this.service.removeElement(reserva);
  }

}
