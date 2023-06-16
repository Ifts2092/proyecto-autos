import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  sweetSuccess(title:string,description: string,type: any){
    Swal.fire(
      title,
      description,
      type
    )
  }
  
  sweetConfirm(title:string,text:string,status: boolean){
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        status = true
        Swal.fire(
          'Eliminado!',
          'La oficina fue eliminada',
          'success'
          )
      }
    })
  }

  creacionOficina(title:string,description: string,type:string){
    this.sweetSuccess(title,description,type);
  }

  editarOficina(title:string,description: string,type:string){
    this.sweetSuccess(title,description,type);
  }



}
