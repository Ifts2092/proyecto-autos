import { Component } from '@angular/core';
import { reservas } from './reservas';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {

  reservas: any[] = reservas
}
