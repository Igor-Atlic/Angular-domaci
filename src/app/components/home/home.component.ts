import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ConfigService} from "../../config.service"
import {HttpService} from "../../http.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    token: string;
    constructor(private tokenService: ConfigService, private httpService: HttpService) {
      this.token = '';
    }

  ngOnInit(): void {
    if(localStorage.getItem('token') === null){
      localStorage.setItem('token', '');
    }
      this.token = localStorage.getItem('token')!;
      this.tokenService.setToken(this.token);


  }
  changeValue(newValue: HTMLInputElement){
    this.tokenService.setToken(newValue.value);
    this.token = this.tokenService.getToken();
  }

}
