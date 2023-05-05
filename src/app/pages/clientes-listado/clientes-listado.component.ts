import { Component } from '@angular/core';
import { clientes } from './cliente';


@Component({
  selector: 'app-clientes-listado',
  templateUrl: './clientes-listado.component.html',
  styleUrls: ['./clientes-listado.component.scss']
})
export class ClientesListadoComponent {
  clientes: any[] = clientes

}
