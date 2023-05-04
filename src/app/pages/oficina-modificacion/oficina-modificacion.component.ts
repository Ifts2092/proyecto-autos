import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oficina-modificacion',
  templateUrl: './oficina-modificacion.component.html',
  styleUrls: ['./oficina-modificacion.component.scss']
})
export class OficinaModificacionComponent {

  @Input() oficina: any;

}
