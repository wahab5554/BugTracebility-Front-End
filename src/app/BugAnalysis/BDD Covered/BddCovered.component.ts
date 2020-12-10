import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { CollectDataService } from 'src/app/collect-data.service';
import {MessageService} from 'primeng/api';
import * as XLSX from 'xlsx';

import { AppComponent } from '../../app.component';


import { IfStmt } from '@angular/compiler';

import {ToastModule} from 'primeng/toast';


import { Data } from '@angular/router';
// import * as FileSaver from 'file-saver';
import {ProgressBarModule} from 'primeng/progressbar';
@Component({
  selector: 'app-bug',
  templateUrl: './BddCovered.component.html',
  styleUrls: ['./BddCovered.component.css']
})
export class BddComponent implements OnInit {
  
  @ViewChild('table') table: ElementRef;
  testdata: any[] = [];
  is_visible: boolean= false;
  is_visible_qa_bugs_summary: boolean= false;
  is_visible_Qa_non_fixed_grid: boolean= false;
  pm_bugs_kosher : any[] = [];
  bdd_data : any[] = [];
  report_bugs_data: any[] = [];
  qa_non_fixed : any[] = [];
  AllData: any[] = [];
  AllData_Bugs: any[] = [];
  AllData_Kosher: any[] = [];
  title = 'AngularDashboard';
  data: any;
  value: number = 0;
  sprint:string;
  selectedsprint:any[]
  sideBarVisibility: boolean;
  BddReports: any[] = [];
  selectedreport:any[]

  sprints: any[] = [{label:'Select',value:'Select'}];

  constructor(private service: CollectDataService,private messageService: MessageService,private AppComponent:AppComponent) {
   
    AppComponent.heading_text='BDD Covered Bugs'
  
    this.BddReports = [
      {
        label: 'Select Report type' , value:'Select Reporttype'
      },
      {
        label: 'Test Coverage - Valid QA Bugs' , value:'Test Coverage - Valid QA Bugs'
      },
      {
        label: 'Test Coverage - Valid UAT Bugs' , value:'Test Coverage - Valid UAT Bugs'
      },
      {
        label: 'Test Coverage - Not Valid QA Bugs' , value:'Test Coverage - Not Valid QA Bugs'



      },
      {
        label: 'Bugs reported summary-QA' , value:'Bugs reported summary-QA'



      }
    ];
      
  }

  clear_data()
  {
    this.bdd_data= [];
    this.report_bugs_data= [];
    this.is_visible_Qa_non_fixed_grid=false
    this.is_visible_qa_bugs_summary=false
    this.is_visible=false
    this.selectedreport=[];
    this.selectedsprint=[];
  }
  populate_bdd_data_db() {
    console.log(this.selectedreport)
    console.log(this.selectedsprint)
    if(this.selectedreport== undefined)
    {

      this.is_visible=false
      this.messageService.add({severity:'error', summary:'Please Select Report Type!', detail:'Via BugAnalysis Team'});
    }

    if(this.selectedsprint[0]== undefined)
    {

      this.is_visible=false
      this.messageService.add({severity:'error', summary:'Please Select Sprint!', detail:'Via BugAnalysis Team'});
    }

    else
    {


    if(this.selectedreport.toString()=="Test Coverage - Not Valid QA Bugs" && this.selectedsprint[0]!=undefined)
    {

     
        this.value = 52;

      this.is_visible_Qa_non_fixed_grid=true
      this.is_visible_qa_bugs_summary=false
      this.is_visible=false
      this.sprint=this.selectedsprint.toString().replace('\\','-')
      this.service.collect_not_valid_qa_bugs_data(this.sprint.replace('\\','-')).subscribe(data=> {
        this.bdd_data= [];
        
  
      
         
            for (let item of data[0])
            {
            this.bdd_data.push(JSON.parse(item))
              
            }
          
     
              
          
               
    
      this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
              
      })

    }
    if(this.selectedreport.toString()=="Bugs reported summary-QA" && this.selectedsprint[0]!=undefined)
    {
      this.is_visible_Qa_non_fixed_grid=false
      this.is_visible=false
      this.is_visible_qa_bugs_summary=true
      this.sprint=this.selectedsprint.toString().replace('\\','-')
      this.service.collect_qa_bugs_summary_report(this.sprint.replace('\\','-')).subscribe(data=> {
        this.report_bugs_data= [];
        
  
      
         
            for (let item of data[0])
            {
            this.report_bugs_data.push(JSON.parse(item))
              
            }
          
     
              
          
               
    
      this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
              
      })

    }
    else
    {
    this.is_visible_Qa_non_fixed_grid=false
    this.is_visible=true
    this.is_visible_qa_bugs_summary=false
    this.sprint=this.selectedsprint.toString().replace('\\','-')
    this.service.collect_bdd_data(this.sprint.replace('\\','-'),this.selectedreport.toString()).subscribe(data=> {
      this.bdd_data= [];
      

    
       
          for (let item of data[0])
          {
          this.bdd_data.push(JSON.parse(item))
            
          }
        
   
            
        
             
  
    this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
            
    })
  }
}
  }  
  
  ngOnInit() {
     
    this.sideBarVisibility = true
   
    this.service.collect_iterations_all().subscribe(data=> {
    
     
         
      this.selectedsprint=this.sprints[0]      
        
          for (let item of data[0])
          {
            let temp_item={label:"",value:""}
            temp_item.label=JSON.parse(item).team
            temp_item.value=JSON.parse(item).team
            this.sprints.push(temp_item)
         
            
          }
        
   
            
    
            
    })
  }

 

  exportExcel() {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws,"Data");
    
    /* save to file */
    XLSX.writeFile(wb, this.selectedreport.toString().replace('-','')+'.xlsx');
}
}
