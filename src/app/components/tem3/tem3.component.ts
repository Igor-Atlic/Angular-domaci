import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../../config.service"
import {HttpService} from "../../http.service"
import {Observable} from "rxjs";
import {Tem2,DetectedLangs} from "../../model"

@Component({
  selector: 'app-tem3',
  templateUrl: './tem3.component.html',
  styleUrls: ['./tem3.component.css']
})
export class Tem3Component implements OnInit {

  url:string;
  text: string;
  clean: boolean;
  detectedLangs: DetectedLangs[] =[];

    constructor(private httpService: HttpService, private tokenService: ConfigService) {
        this.url = "https://api.dandelion.eu/datatxt/li/v1";
        this.text = '';
        this.clean = false;
     }

    ngOnInit(): void {
    }

    getDetectedLangs(tem: Tem2): void{
        this.detectedLangs = tem.detectedLangs;
      }
    getPost(): void{
        this.httpService.getLang(this.url,this.text,this.clean,this.tokenService.getToken()).subscribe((tem)=>{
              this.getDetectedLangs(tem)
            })
      }

}
