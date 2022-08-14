import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service"

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
  }

}
