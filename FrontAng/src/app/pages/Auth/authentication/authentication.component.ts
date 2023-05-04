import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/models/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  constructor(private authenticationService:AuthenticationService){}
  login={userName:"Dom", password:"123ABCdef*"}
  async authenticate(){
    var resultat=await this.authenticationService.authenticate(this.login.userName,this.login.password);
    if(resultat){
      
    }
  }


  }
