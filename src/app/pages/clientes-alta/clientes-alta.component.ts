import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-clientes-alta',
  templateUrl: './clientes-alta.component.html',
  styleUrls: ['./clientes-alta.component.scss']
})
export class ClientesAltaComponent {

  
  cliente: any = {
    codigo: undefined
  }

  constructor(private router : Router, private route: ActivatedRoute, private service:ClienteService) {
    const codigo: string = this.route.snapshot.queryParams['codigo'];
    var data = service.getElementByCodigo(codigo);
    if(data){
      this.cliente = data;
    }
    
  }

  saveCliente(){
    if(this.cliente.codigo)
      this.service.setElementByCodigo(this.cliente);
    else
      this.service.addElement(this.cliente);
    this.router.navigate(['clientes-listado'])
  }


}
