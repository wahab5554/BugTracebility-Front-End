import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { CollectDataService } from 'src/app/collect-data.service';
import * as XLSX from 'xlsx';
import {MessageService} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-datepipe',
  templateUrl: './DataSettings.component.html',
  styleUrls: ['./DataSettings.component.css']
})
export class DataSettingsComponent implements OnInit {
   
  
  @ViewChild('table') table: ElementRef;
  testdata: any[] = [];
  value1: Date;
  value2: Date;
  title = 'AngularDashboard';
  is_visible: boolean= false; 
  options: any;
  sideBarVisibility: boolean;
  sprints: any[];
  selectedsprint:any[]
  releaseCycles:any[] = []
  selectedReleaseCycle:any[] = []
  AllData: any[] = [];
  AllData2: any[] = [];
  AllData3: any[] = [];
  AllData4: any[] = [];
  prod_labels:String[]=[];
  prod_data:number[]=[];
  Bugs_data: any[] = [];

  constructor(private service: CollectDataService,private messageService: MessageService,private datePipe:DatePipe,private AppComponent:AppComponent) {
    AppComponent.heading_text='Data Settings'
    this.sprints = [
      {label:'Select', value:'Select Sprint'},
      {label: 'Products\\Release 20.10\\Sprint 20.10.01' , value:'Products\\Release 20.10\\Sprint 20.10.01'},
      {label: 'Products\\Release 20.10\\Sprint 20.10.02' , value:'Products\\Release 20.10\\Sprint 20.10.02'},
      {label: 'Products\\Release 20.10\\Sprint 20.10.03' , value:'Products\\Release 20.10\\Sprint 20.10.03'},
      {label: 'Products\\Release 20.10\\Sprint 20.10.04' , value:'Products\\Release 20.10\\Sprint 20.10.04'}
      
     
    ]
      
    };

    search_data(sprint,start_date,end_date) {
 
      if(this.selectedsprint== undefined)
      {
      
    
        this.is_visible=false
        this.messageService.add({severity:'error', summary:'Please Select Sprint!', detail:'Via BugAnalysis Team'});
      }
    
      if(end_date== undefined)
      {
        console.log("its working")
    
        this.is_visible=false
        this.messageService.add({severity:'error', summary:'Please Select Start Date!', detail:'Via BugAnalysis Team'});
      }
      if(start_date== undefined)
      {
        console.log("its working")
    
        this.is_visible=false
        this.messageService.add({severity:'error', summary:'Please Select End Date!', detail:'Via BugAnalysis Team'});
      }
            
    else
    {
      this.is_visible=true
      start_date=this.datePipe.transform(start_date, 'yyyy-MM-dd').toString();
      end_date=this.datePipe.transform(end_date, 'yyyy-MM-dd').toString();
      sprint=sprint.toString().replace('\\','-')
      
 
  
      this.service.search_data(sprint.toString().replace('\\','-'),start_date.toString(),end_date).subscribe(data=> {
        this.Bugs_data= [];
  
      
         
            for (let item of data[0])
            {
            this.Bugs_data.push(JSON.parse(item))
              
            }
          
         
      this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
              
      })
  
    }  
  }
    get_vsts_data(sprint,start_date,end_date) {
      start_date=this.datePipe.transform(start_date, 'MM-dd-yyyy').toString();
      end_date=this.datePipe.transform(end_date, 'MM-dd-yyyy').toString();
      sprint=sprint.toString().replace('\\','-')
       
  
      this.service.get_vsts_data(sprint.toString().replace('\\','-'),start_date.toString(),end_date).subscribe(data=> {
        
        this.messageService.add({severity:'success', summary:'Data Imported from VSTS Successfully!', detail:'Via BugAnalysis Team'});
              
      })
  
    }  
     
   
  exportExcel() {

    
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws,"ReleaseCycle");
    
    /* save to file */
    XLSX.writeFile(wb, 'BugTracebilityReportCharts.xlsx');
}

 
  ngOnInit() {
     
    this.sideBarVisibility = true
   
    



     

     
      

  
    
     
  }

}
