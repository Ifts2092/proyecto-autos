import { Injectable } from '@angular/core';
import { vehiculos } from '../pages/vehiculos/vehiculos';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService extends BaseService {
  
  constructor(){
    super();
    this.list = vehiculos;
  }
  
}
