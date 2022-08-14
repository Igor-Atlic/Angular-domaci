import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../../config.service"
import {HttpService} from "../../http.service"
import {Observable} from "rxjs";
import {Similarity} from "../../model"

@Component({
  selector: 'app-tem2',
  templateUrl: './tem2.component.html',
  styleUrls: ['./tem2.component.css']
})
export class Tem2Component implements OnInit {

  url:string;
  text1: string;
  text2: string;
  similarity: number;

  constructor(private httpService: HttpService, private tokenService: ConfigService) {
      this.url = "https://api.dandelion.eu/datatxt/sim/v1";
      this.text1 = '';
      this.text2 = '';
      this.similarity = -1;
   }

  ngOnInit(): void {
  }

  getPost(): void{
      this.httpService.getText(this.url,this.text1,this.text2,this.tokenService.getToken()).subscribe((Similarity)=>{
            this.similarity =Similarity.similarity
          })
    }
}
