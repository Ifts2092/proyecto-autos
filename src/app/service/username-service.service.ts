import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameServiceService {

  username: any;

  constructor() { }


  setUsername(username: any){
    this.username = username;
  }

  getUsername(): any{
    return this.username;
  }

}
