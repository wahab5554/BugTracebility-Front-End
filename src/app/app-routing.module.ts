import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResourceUtilComponent } from './resource-util/resource-util.component';
import { HomeComponent } from './home/home.component';
import { BugComponent } from './BugAnalysis/bug.component';
import { BugChartsComponent } from './BugAnalysis/BugAnalysisCharts/bugCharts.component';
import { BddComponent } from './BugAnalysis/BDD Covered/BddCovered.component';
import { RCAComponent } from './BugAnalysis/RCA.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'bug' , component:BugComponent},
  {path:'bugcharts' , component:BugChartsComponent},
  {path:'BddCovered' , component:BddComponent},
  {path:'RCA' , component:RCAComponent},
  {path:'resource_utilization', component:ResourceUtilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
