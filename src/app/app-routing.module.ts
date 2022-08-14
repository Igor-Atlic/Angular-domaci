import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {Tem1Component} from "./components/tem1/tem1.component";
import {Tem2Component} from "./components/tem2/tem2.component";
import {Tem3Component} from "./components/tem3/tem3.component";
import {Tem4Component} from "./components/tem4/tem4.component";
import {HistoryComponent} from "./components/history/history.component";




import {AuthGuard} from "./auth.guard"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "entityExtraction",
    component: Tem1Component,
    canActivate: [AuthGuard]
  },
  {
    path: "textSimilarity",
    component: Tem2Component,
    canActivate: [AuthGuard]
   },
   {
     path: "languageDetection",
     component: Tem3Component,
     canActivate: [AuthGuard]
    },
    {
     path: "sentimentAnalysis",
     component: Tem4Component,
     canActivate: [AuthGuard]
    },
    {
     path: "history",
     component: HistoryComponent
    }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
