import { Component } from '@angular/core';
import { ClienteService } from 'src/app/service/clientes.service';


@Component({
  selector: 'app-clientes-listado',
  templateUrl: './clientes-listado.component.html',
  styleUrls: ['./clientes-listado.component.scss']
})
export class ClientesListadoComponent {

  filtroCliente = "";
  filtrarPor: string | undefined;

  clientes: any[];

  constructor(private service:ClienteService){
    this.clientes = service.getList();
  }

  removeCliente(cliente:any){
    this.service.removeElement(cliente);
  }

}
