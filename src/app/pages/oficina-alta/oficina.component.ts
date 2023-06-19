import { Component } from '@angular/core';
import { oficinas } from '../oficina-listado/oficinas';
import { AgregarInfoService } from 'src/app/service/agregar-info.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OficinaService } from 'src/app/service/oficina.service';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.scss']
})
export class OficinaComponent {

  oficina: any = {}

  constructor(private route: ActivatedRoute, private router: Router,private service: OficinaService){
      const codigo: string = this.route.snapshot.queryParams['codigo'];
      var data = service.getElementByCodigo(codigo);
      if(data){
        this.oficina = data;
      }
  }

  agregarOficina(){
    this.service.addElement(this.oficina)
    this.router.navigate(["oficinas-listado"])
  }

}
