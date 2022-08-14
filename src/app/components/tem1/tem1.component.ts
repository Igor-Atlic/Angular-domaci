import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../config.service"
import {HttpService} from "../../http.service"
import {Observable} from "rxjs";
import {Annotations,Tem1} from "../../model"



@Component({
  selector: 'app-tem1',
  templateUrl: './tem1.component.html',
  styleUrls: ['./tem1.component.css']
})
export class Tem1Component implements OnInit {
  url:string;
  annotations: Annotations[] = [];
  confidence: string;
  text: string;
  include: string;
  more: boolean;

  constructor(private httpService: HttpService, private tokenService: ConfigService) {
    this.url = "https://api.dandelion.eu/datatxt/nex/v1"
    this.confidence = '0.6';
    this.text = '';
    this.include = '';
    this.more = false;
  }

  ngOnInit(): void {
  }
  getAnnotations(tem: Tem1): void{
    this.annotations = tem.annotations;
  }
  getPost(): void{
    this.httpService.getTem1(this.url,this.text,this.confidence,this.include,this.tokenService.getToken()).subscribe((tem1)=>{
          this.getAnnotations(tem1);
        })
  }
  getInclude(event: Event): void{
    if((<HTMLInputElement>event.target).checked){
      if (this.include === ''){
        this.include = (<HTMLInputElement>event.target).value;
      }else{
        this.include = this.include + ', ' + (<HTMLInputElement>event.target).value;
      }
    }else {
      this.include = this.include.replace(', '+(<HTMLInputElement>event.target).value,'')
      this.include = this.include.replace((<HTMLInputElement>event.target).value + ', ','')
      this.include = this.include.replace((<HTMLInputElement>event.target).value,'')
    }
  }

}
