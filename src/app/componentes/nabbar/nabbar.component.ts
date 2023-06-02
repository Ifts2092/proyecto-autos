import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsernameServiceService } from 'src/app/service/username-service.service';

@Component({
  selector: 'app-nabbar',
  templateUrl: './nabbar.component.html',
  styleUrls: ['./nabbar.component.scss']
})
export class NabbarComponent {
  
  username: any;

  constructor(public router : Router) {
    
  }

}
