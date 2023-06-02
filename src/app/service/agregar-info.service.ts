import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgregarInfoService {

  nuevaInfo: any;

  constructor() { }

  setInfo(newInfo: any){
    this.nuevaInfo = newInfo
  }

  getInfo(): any{
    return this.nuevaInfo
  }



}
