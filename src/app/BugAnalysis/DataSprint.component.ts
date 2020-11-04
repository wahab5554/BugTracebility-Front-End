import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { CollectDataService } from 'src/app/collect-data.service';
import * as XLSX from 'xlsx';
import {MessageService} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import { DatePipe } from '@angular/common';
import { AppComponent } from '../app.component';
import {InputMaskModule} from 'primeng/inputmask';

@Component({
  selector: 'app-datepipe',
  templateUrl: './DataSprint.component.html',
  styleUrls: ['./DataSprint.component.css']
})
export class DataSprintComponent implements OnInit {
   
  display: boolean = false;

  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;

  displayPosition: boolean;

  position: string;

  showModalDialog() {
      this.displayModal = true;
  }

  showBasicDialog() {
      this.displayBasic = true;
  }

  showBasicDialog2() {
      this.displayBasic2 = true;
  }

  showMaximizableDialog() {
      this.displayMaximizable = true;
  }

  showPositionDialog(position: string) {
      this.position = position;
      this.displayPosition = true;
  }
  @ViewChild('table') table: ElementRef;
  displayDialog: boolean;
  testdata: any[] = [];
  value1: Date;
  value2: Date;
  title = 'AngularDashboard';
  is_visible: boolean= false; 
  options: any;
  sideBarVisibility: boolean;
  sprinttype: any[];
  sprints: any[];
  sprint: any[];
  selectedsprint:any[]
  selectedType :any;

  constructor(private service: CollectDataService,private messageService: MessageService,private datePipe:DatePipe,private AppComponent:AppComponent) {
    AppComponent.heading_text='Sprints Data Settings'
    this.sprinttype = [
      {label:'Select', value:'Select Sprint'},
      {label: 'All Sprints' , value:'All Sprints'},
      {label: 'Current Sprints' , value:'Current Sprints'}
     
     
    ]
      
    };

    UpdateDate(sprint:string,start_date:string,end_date:string)
    {
     
      this.service.update_sprints(sprint,start_date,end_date).subscribe(data=> {
    
           
       this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
               
       })
    }
    set_current(sprintID:string){

      this.service.set_current(sprintID).subscribe(data=> {
      

       this.sprints= [];
  
      
         
            for (let item of data[0])
            {
            this.sprints.push(JSON.parse(item))
              
            }
          
          
      this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
              
      })
    }

    remove_current(sprintID:string)
    {
      this.service.remove_current(sprintID).subscribe(data=> {
        this.sprints= [];
  
      
         
            for (let item of data[0])
            {
            this.sprints.push(JSON.parse(item))
              
            }
          
         
      this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
              
      })

    }
    get_sprints(type_string:string) {
    
     
             
   
      this.is_visible=true
     
      
 
     
      this.service.get_sprints(type_string).subscribe(data=> {
        this.sprints= [];
  
           
         
            for (let item of data[0])
            {
            
            this.sprints.push(JSON.parse(item))
            
            }

            
          
         
      this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
              
      })
  
    }  
  
   
    showDialog() {
     
      this.display = true;
  }

  HideDialog() {
     
    this.display = false;
}

save_data(sprint,start_date,end_date) {
 
 
  this.is_visible=true
  start_date=this.datePipe.transform(start_date, 'yyyy-MM-dd').toString();
  end_date=this.datePipe.transform(end_date, 'yyyy-MM-dd').toString();
  
  
 

  this.service.insert_sprint(sprint,start_date.toString(),end_date).subscribe(data=> {
    
      
     
  this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
          
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
