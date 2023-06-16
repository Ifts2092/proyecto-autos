import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OficinaService } from 'src/app/service/oficina.service';

@Component({
  selector: 'app-oficina-modificacion',
  templateUrl: './oficina-modificacion.component.html',
  styleUrls: ['./oficina-modificacion.component.scss']
})
export class OficinaModificacionComponent {

  @Input() oficina: any;

  office: any = {
    codigo: undefined,
    ciudad: undefined,
    calle: undefined,
    marca: undefined,
    modelo: undefined,
    telefono: undefined
  }

  codigoOffice: any

  constructor(private route: ActivatedRoute, private router: Router,private oficinaService: OficinaService){
    const codigo: string = this.route.snapshot.queryParams['codigo'];
    this.codigoOffice = codigo
    var data = oficinaService.getElementByCodigo(codigo);
    if(data){
      this.office = data;
    }
  }

  saveOficinas(){
    if(this.office.codigo)
      this.oficinaService.setElementByCodigo(this.office);
    else
      this.oficinaService.addElement(this.office);
    this.router.navigate(['oficinas-listado'])
  }
}
