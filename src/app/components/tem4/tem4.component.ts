import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../config.service"
import {HttpService} from "../../http.service"
import {Observable} from "rxjs";
import {Tem3,Sentiment} from "../../model"

@Component({
  selector: 'app-tem4',
  templateUrl: './tem4.component.html',
  styleUrls: ['./tem4.component.css']
})
export class Tem4Component implements OnInit {

  url:string;
  text: string;
  lang: string;
  sentiment: Sentiment;
  color:string;

      constructor(private httpService: HttpService, private tokenService: ConfigService) {
          this.url = "https://api.dandelion.eu/datatxt/sent/v1";
          this.text = '';
          this.lang = 'en';
          this.sentiment = {"score": -2,
                            "type": "neutral"};
          this.color ="#ffffff"
       }

      ngOnInit(): void {
      }

      getSentiment(tem: Tem3): void{
          this.sentiment = tem.sentiment;
          this.color = this.getColor(this.sentiment.score);
        }
      getPost(): void{
          this.httpService.getAnalysis(this.url,this.text,this.lang,this.tokenService.getToken()).subscribe((tem)=>{
                this.getSentiment(tem);
              })
        }
       getColor(score: number): string{
          let tem: number = (score+1)/2;
          let red: number = Math.floor(0xff *(1-tem));
          let green: number = Math.floor(0x00ff*tem);
          let color: number = red*256*256 + green*256
          return '#'+color.toString(16)
       }
}
