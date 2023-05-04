import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser } from './appUser';
import { UserDTO } from '../dtos/UserDTO';
import { lastValueFrom } from 'rxjs';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  user?: AppUser;

  async authenticate(UserName: string, Password: string) {
    let requete = this.httpClient.post<UserDTO>(
      "http://localhost:5088/api/Auth",
      { un: UserName, p: Password },
      {withCredentials:true}
    );
    let resultat = await lastValueFrom(requete);
    if (resultat) {
      this.user = new AppUser();
      this.user.id = Guid.parse(resultat.id);
      this.user.userName = resultat.un;
      this.user.token = resultat.t;
      this.user.groups = resultat.g;
      return resultat;
    }
    return false;
  }

}
