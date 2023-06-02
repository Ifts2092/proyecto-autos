import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  creacionOficina(title:string,description: string,type:string){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }

}
