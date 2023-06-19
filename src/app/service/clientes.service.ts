import { Injectable } from '@angular/core';
import { clientes } from '../pages/clientes-listado/cliente';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService {
  
  constructor(){
    super();
    this.list = clientes;
  }
  
}
