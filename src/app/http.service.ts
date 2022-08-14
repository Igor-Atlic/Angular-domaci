import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Annotations,Tem1,Similarity,Tem2,DetectedLangs,Tem3,Sentiment} from "./model"

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    private get: string[]= [];
    date: Date;

  constructor(private httpClient: HttpClient) {
    this.date = new Date();
  }

  getTem1(url: string,text: string, confidence: string, include: string,token: string): Observable<Tem1>{
      this.get.push("["+this.date.getDate()+'.'+this.date.getMonth()+'.'+ this.date.getFullYear()+'. '+ this.date.getHours()
                          +':'+this.date.getMinutes()+':'+this.date.getSeconds()+ '] GET ' + url+'?text=' + text+
                          '&min_confidence=' + confidence+'&include=' + include + '&token=' + token);
      return this.httpClient.get<Tem1>( url,{
                   params: {
                     text: text,
                     min_confidence: confidence,
                     include: include,
                     token: token
                   }
                 })
      }
  getText(url:string,text1:string,text2:string,token:string): Observable<Similarity>{
        this.get.push("["+this.date.getDate()+'.'+this.date.getMonth()+'.'+ this.date.getFullYear()+'. '+ this.date.getHours()
                                  +':'+this.date.getMinutes()+':'+this.date.getSeconds()+ '] GET ' + url+'?text1=' + text1
                                  +'&text2='+ text2 + '&token=' + token);
        return this.httpClient.get<Similarity>( url,{
                     params: {
                       text1: text1,
                       text2: text2,
                       token: token
                     }
                   })
        }
  getLang(url:string,text:string,clean:boolean,token:string): Observable<Tem2>{
          this.get.push("["+this.date.getDate()+'.'+this.date.getMonth()+'.'+ this.date.getFullYear()+'. '+ this.date.getHours()
                                            +':'+this.date.getMinutes()+':'+this.date.getSeconds()+ '] GET ' + url+'?text=' + text
                                            +'&clean=' + clean+ '&token=' + token);
          return this.httpClient.get<Tem2>( url,{
                       params: {
                         text: text,
                         clean: clean,
                         token: token
                       }
                     })
          }
  getAnalysis(url:string,text:string,lang:string,token:string): Observable<Tem3>{
            this.get.push("["+this.date.getDate()+'.'+this.date.getMonth()+'.'+ this.date.getFullYear()+'. '+ this.date.getHours()
                                                        +':'+this.date.getMinutes()+':'+this.date.getSeconds()+ '] GET ' + url+'?text=' + text
                                                        +'&lang=' + lang+ '&token=' + token);
            return this.httpClient.get<Tem3>( url,{
                         params: {
                           text: text,
                           lang: lang,
                           token: token
                         }
                       })
            }
  getGet():string[]{
    return this.get;
  }
}
