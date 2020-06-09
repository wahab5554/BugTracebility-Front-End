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
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { BugComponent } from './BugAnalysis/bug.component';
import { BugChartsComponent } from './BugAnalysis/BugAnalysisCharts/bugCharts.component';
import { BddComponent } from './BugAnalysis/BDD Covered/BddCovered.component';

import {ToastModule} from 'primeng/toast';
import { RCAComponent } from './BugAnalysis/RCA.component';

@NgModule({
  declarations: [
    AppComponent,
    BugComponent,
    BugChartsComponent,
    BddComponent,
    RCAComponent,
    ResourceUtilComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
