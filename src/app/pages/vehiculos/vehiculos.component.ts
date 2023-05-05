import { Component } from '@angular/core';
import { vehiculos } from './vehiculos';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent {
  vehiculos: any[] = vehiculos
}
