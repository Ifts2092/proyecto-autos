import { Injectable } from '@angular/core';
import { oficinas } from '../pages/oficina-listado/oficinas';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  oficinasGlobal: any[];

  constructor() {
    this.oficinasGlobal = oficinas
  }

  getOficinas(): any[]{
    return this.oficinasGlobal;
  }

  setOficinas(nuevaOficinas: any[]): void{
    this.oficinasGlobal = nuevaOficinas;
  }
  
}
