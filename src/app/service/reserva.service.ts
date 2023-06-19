import { Injectable } from '@angular/core';
import { reservas } from '../pages/reservas/reservas';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService extends BaseService {
  
  constructor(){
    super();
    this.list = reservas;
  }
  
}
