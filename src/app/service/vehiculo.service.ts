import { Injectable } from '@angular/core';
import { vehiculos } from '../pages/vehiculos/vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  list;

  constructor(){
    this.list = vehiculos;
  }

  setList(val: any){
    this.list = val;
  }

  getList(){
    return this.list;
  }

  getElementByCodigo(codigo: any){
      var data = this.list.find(x => x.codigo == codigo);
      //return  Object.assign({},data); 
      ////  es lo mismo que lo de abajo es para hacer una copia que este desconectada del array
      return { ...data}

  }
  
  setElementByCodigo(element: any){
    var foundIndex = this.list.findIndex(x => x.codigo == element.codigo);
    this.list[foundIndex] = element;
  }

  addElement(element: any){
    if(this.list.length)
      element.codigo = this.list[this.list.length-1].codigo + 1;
    else
      element.codigo = 1;
      
    this.list.push(element)
  }

  removeElement(element: any){
    var foundIndex = this.list.findIndex(x => x.codigo == element.codigo);
    this.list.splice(foundIndex,1);
  }

}
