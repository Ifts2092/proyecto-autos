import { Component } from '@angular/core';
import { oficinas } from './oficinas';

@Component({
  selector: 'app-oficina-listado',
  templateUrl: './oficina-listado.component.html',
  styleUrls: ['./oficina-listado.component.scss']
})
export class OficinaListadoComponent {

  oficinas: any[] = oficinas
}
