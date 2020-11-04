import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { CollectDataService } from 'src/app/collect-data.service';
import * as XLSX from 'xlsx';
import {MessageService} from 'primeng/api';
import { AppComponent } from '../../app.component';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import { empty } from 'rxjs';
import { RouteConfigLoadEnd } from '@angular/router';
 
@Component({
  selector: 'app-bug',
  templateUrl: './SprintCharts.component.html',
  styleUrls: ['./SprintCharts.component.css']
})
export class SprintChartsComponent implements OnInit {
   

  @ViewChild('table') table: ElementRef;
  testdata: any[] = [];
  labelsbar:any;
  title = 'AngularDashboard';
  data: any;
  chartOptions:any;
  data1: any;
  data2: any;
  data3:any;
  data4:any;
  AllData4:any;
  selectedsprint:any[]
  selectedCompsprint:any[]

  sideBarVisibility: boolean;
  is_visible: boolean= false;

  is_valid_bug_rate: boolean= false;
  prod_labels:String[]=[];
  prod_data:number[]=[];
  sprints: any[] = [{label:'Select',value:'Select'}];

  sprint:string;
  comp_sprint:string;
  constructor(private service: CollectDataService,private messageService: MessageService,private AppComponent:AppComponent) {

    AppComponent.heading_text='Sprint Comparison'
    };
  exportExcel() {

    
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws,"ReleaseCycle");
    
    /* save to file */
    XLSX.writeFile(wb, 'BugTracebilityReportCharts.xlsx');
}
clear_data()

{

  this.is_visible=false
   

  this.data= [];
  this.data2= [];
  this.data3= [];
  
  this.selectedsprint=[];
  this.selectedCompsprint=[];

}
 greaterThan(num: number) {

 
  return num > 0;
}
equalto(num: number) {

 
  return num==0;
}
 lesserThan(num: number) {
  console.log("lesser",num<0)
  return num < 0;
}

populate_charts()
{

  
  this.chartOptions = {
    legend: {
        position: 'right',
       
    },
    
    tooltips: {
      yAlign: 'bottom',
       xAlign: 'center',
       callbacks: {
        label: function(tooltipItem, data) {
          var allData = data.datasets[tooltipItem.datasetIndex].data;
          var tooltipLabel = data.labels[tooltipItem.index];
          var tooltipData = allData[tooltipItem.index];
          var total = 0;
          for (var i in allData) {
            total += allData[i];
          }
          var tooltipPercentage = Math.round((tooltipData / total) * 100);
          return  tooltipData +'%';
        }}},
    responsive:true,
    showAllTooltips: true,
    yAlign: 'bottom',
    xAlign: 'center',
    title: {
      display: true,
      text: 'Sprint Comparison',
      fontSize: 16
    }, 
  }
  
if(this.selectedsprint[0]== undefined)
  {
    

    this.is_visible=false
    this.messageService.add({severity:'error', summary:'Please Select Sprint!', detail:'Via BugAnalysis Team'});
  }
  if(this.selectedCompsprint[0]== undefined)
  {
     

    this.is_visible=false
    this.messageService.add({severity:'error', summary:'Please Select Comparison Sprint!', detail:'Via BugAnalysis Team'});
  }
else
{
  this.sprint=this.selectedsprint.toString().replace('\\','-')
  this.comp_sprint=this.selectedCompsprint.toString().replace('\\','-')
  this.is_visible=true
  this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
  
  
  this.service.get_sprint_comparison(this.sprint.replace('\\','-'),this.comp_sprint.replace('\\','-')).subscribe(data=> {
   

       


    this.data1=[];
    this.data2=[];
    this.data3=[];
    
    
    for (let item of data[0])
    {
  
    
  
    this.data1.push(String(JSON.parse(item).qa_valid_perc))
    this.data1.push(String(JSON.parse(item).qa_rejected_perc))

    this.data1.push(String(JSON.parse(item).qa_active_new_perc))
    this.data2.push(Number(JSON.parse(item).qa_valid_perc_comp_sprint))
    
    this.data2.push(Number(JSON.parse(item).qa_rejected_rate_comp_sprint))
    this.data2.push(Number(JSON.parse(item).qa_active_new_comp_sprint))
    this.data3.push(JSON.parse(item))
    
    
    this.data = {
      labels: ['QA Valid Bugs Rate', 'QA Rejected Bugs Rate', 'QA Active/New Bugs Rate'],
      datasets: [
          {
              label: this.sprint,
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              
              data: this.data1
          },
          {
              label: this.comp_sprint,
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: this.data2
          }
      ]

      
  }
}

   }) 
  
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

}
