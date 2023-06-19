import { Injectable } from '@angular/core';
import { oficinas } from '../pages/oficina-listado/oficinas';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OficinaService extends BaseService {

  constructor(){
    super();
    this.list = oficinas;
  }

}
