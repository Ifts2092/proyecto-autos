import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EditarInfoService } from 'src/app/service/editar-info.service';

@Component({
  selector: 'app-oficina-modificacion',
  templateUrl: './oficina-modificacion.component.html',
  styleUrls: ['./oficina-modificacion.component.scss']
})
export class OficinaModificacionComponent {

  @Input() oficina: any;

  constructor(private router: Router,private editarInfoService: EditarInfoService){

  }

  editarInfo(){
    this.editarInfoService.editarInfo();
    
  }

}
