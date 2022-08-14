import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private token: string;
    constructor() {
      this.token = '';
     }

    getToken(): string{
       return this.token;
    }
    setToken(token: string){
      this.token = token;
      localStorage.setItem('token', this.token);
    }
}
