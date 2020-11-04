import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResourceUtilComponent } from './resource-util/resource-util.component';
import { BugComponent } from './BugAnalysis/bug.component';
import { BugChartsComponent } from './BugAnalysis/BugAnalysisCharts/bugCharts.component';
import { BddComponent } from './BugAnalysis/BDD Covered/BddCovered.component';
import { RCAComponent } from './BugAnalysis/RCA.component';
import { DataSettingsComponent } from './BugAnalysis/DataSettings.component';
import { RoleSettingsComponent } from './BugAnalysis/RoleSettings.component';
import { SprintChartsComponent } from './BugAnalysis/BugAnalysisCharts/SprintCharts.component';
import { DataSprintComponent } from './BugAnalysis/DataSprint.component';


const routes: Routes = [
  {path:'' , component:BugChartsComponent},
  {path:'bug' , component:BugComponent},
  {path:'bugcharts' , component:BugChartsComponent},
  {path:'SprintCharts' , component:SprintChartsComponent},
  {path:'SprintData' , component:DataSprintComponent},
  {path:'BddCovered' , component:BddComponent},
  {path:'RCA' , component:RCAComponent},
  {path:'DataSettings' , component:DataSettingsComponent},
  {path:'RoleSettings' , component:RoleSettingsComponent},
  {path:'resource_utilization', component:ResourceUtilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
