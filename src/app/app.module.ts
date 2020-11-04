import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartModule} from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ResourceUtilComponent } from './resource-util/resource-util.component';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { BugComponent } from './BugAnalysis/bug.component';
import { BugChartsComponent } from './BugAnalysis/BugAnalysisCharts/bugCharts.component';
 
import { BddComponent } from './BugAnalysis/BDD Covered/BddCovered.component';

import {ToastModule} from 'primeng/toast';
import { RCAComponent } from './BugAnalysis/RCA.component';
import { DataSettingsComponent } from './BugAnalysis/DataSettings.component';
import { DataSprintComponent } from './BugAnalysis/DataSprint.component';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';

import { DatePipe } from '@angular/common';
import { RoleSettingsComponent } from './BugAnalysis/RoleSettings.component';
import { SprintChartsComponent } from './BugAnalysis/BugAnalysisCharts/SprintCharts.component';
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
@NgModule({
  declarations: [
    AppComponent,
    BugComponent,
    BugChartsComponent,
    BddComponent,
    RCAComponent,
    ResourceUtilComponent,
    DataSettingsComponent,
    RoleSettingsComponent,
    DataSprintComponent,
    SprintChartsComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    InputMaskModule,

    FormsModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    TableModule,
    ChartModule,
    ButtonModule,
    SelectButtonModule,
    ToolbarModule,
    MultiSelectModule,
    DropdownModule,
    ToastModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    CalendarModule,
  

    
  
  ],
  providers: [MessageService,DatePipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
