import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { CollectDataService } from '../collect-data.service';
import { IfStmt } from '@angular/compiler';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { Data } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css'],
  providers: [MessageService]
  
})

export class BugComponent implements OnInit {
  @ViewChild('table') table: ElementRef;
  disabled: boolean = true;

  displayDialog: boolean;

    
  
  cols: any[];
   text: string;

   bugid: string;
   sprint:string;
   buttn_text: string;
   comments: string;
  is_visible: boolean= false;
  testdata: any[] = [];
  pm_bugs_kosher : any[] = [];
  qa_bugs_kosher : any[] = [];
  qa_non_fixed : any[] = [];
  BUGS_Total: any[] =[];
  AllData: any[] = [];
  AllData_Bugs: any[] = [];
  AllData_Kosher: any[] = [];
  title = 'Bug Tracebility Matrix';
  data: any;
  sideBarVisibility: boolean;
  teamname: any[] = [{label:'Select',value:'Select'}];
  selectedteams:any[]
  releaseCycles:any[] = []
  selectedReleaseCycle:any[] = []
  sprints: any[] = [{label:'Select',value:'Select'}];
  selectedsprint:any[]
  Bugs_data: any[] = [];
  
  selectedValues:any;
  constructor(private service: CollectDataService,private messageService: MessageService,private AppComponent:AppComponent) {
    this.buttn_text="edit"
    
    AppComponent.heading_text='Bug Analysis Data'
    this.teamname = []
      
    };
  clear_data()
  {
    this.Bugs_data= [];
    this.BUGS_Total= [];
    this.pm_bugs_kosher= [];
    this.qa_bugs_kosher= [];
    this.qa_non_fixed= [];
    this.is_visible= false;
    this.selectedteams=[];
    this.selectedsprint=[];
  }
  populate_bug_data_db()
  {
    console.log(typeof this.selectedsprint)
    console.log(typeof this.selectedteams)

  if(typeof this.selectedsprint=="object")
  {
    this.is_visible=false
    this.messageService.add({severity:'error', summary:'Please Select Sprint!', detail:'Via BugAnalysis Team'});
  }

  if(typeof this.selectedsprint=="object")
  {
    this.is_visible=false
    this.messageService.add({severity:'error', summary:'Please Select Team!', detail:'Via BugAnalysis Team'});
  }
  else
   {

    this.is_visible=true
    
    this.service.search_bugs_summary(this.selectedsprint,this.selectedteams.toString()).subscribe(data=> {
      this.Bugs_data= [];
      

    
       
          for (let item of data[0])
          {
          this.Bugs_data.push(JSON.parse(item))
            
          }
        
   
            
        
             
  
    this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
            
    })

    this.service.get_bugs_percentage(this.selectedsprint,this.selectedteams.toString().replace('\\','-')).subscribe(data=> {
      this.BUGS_Total= [];

    
       
          for (let item of data[0])
          {
          this.BUGS_Total.push(JSON.parse(item))
            
          }
       
            
    })



    this.service.get_pm_other_bugs_data(this.selectedsprint,this.selectedteams.toString().replace('\\','-')).subscribe(data=> {
      this.pm_bugs_kosher= [];

    
       
          for (let item of data[0])
          {
            this.pm_bugs_kosher.push(JSON.parse(item))
            
          }
           
            
    })

    this.service.get_qa_fixed_bugs_data(this.selectedsprint,this.selectedteams.toString().replace('\\','-')).subscribe(data=> {
      this.qa_bugs_kosher= [];

    
       
          for (let item of data[0])
          {
            this.qa_bugs_kosher.push(JSON.parse(item))
            
          }
          
            
    })

    this.service.get_qa_non_fixed_bugs_data(this.selectedsprint,this.selectedteams.toString().replace('\\','-')).subscribe(data=> {
      this.qa_non_fixed= [];

    
       
          for (let item of data[0])
          {
            this.qa_non_fixed.push(JSON.parse(item))
            
          }
       
            
    })
  }
  }
  
 
  selectRow(event){
    console.log("selected row!");
  }

  unselectRow(event){
    console.log("unselected a row!")
  }

  save_all_qa_non_fixed_bugs_comments(){
   


    
    for (var i = 0; i < this.qa_non_fixed.length; i++){
     
      

     
      this.Save_Comments(this.qa_non_fixed[i].bug_id,this.qa_non_fixed[i].comments)
    }
  }

  save_all_pm_bugs_comments(){
    


    
    for (var i = 0; i < this.pm_bugs_kosher.length; i++){
     
      

     
      this.Save_Comments(this.pm_bugs_kosher[i].bug_id,this.pm_bugs_kosher[i].comments)
    }
  }
  save_all_qa_bugs_comments(){
    


    
    for (var i = 0; i < this.qa_bugs_kosher.length; i++){
     
      

     
      this.Save_Comments(this.qa_bugs_kosher[i].bug_id,this.qa_bugs_kosher[i].comments)
    }
   
  }

  Save_Comments(bugid,comments) {
    
    this.service.post_comments_service(bugid,comments).subscribe(data=> {
      
      this.messageService.add({severity:'success', summary:'Saved Successfully For BugID='+bugid, detail:'Via BugAnalysis Team'});
            
    })

  }  
  ngOnInit() {
     
    this.sideBarVisibility = true

   
    

    
     
    this.service.collect_teams().subscribe(data=> {
    
      let temp_item={label:"Select",value:"Select"}
        
      this.teamname.push(temp_item)
         
      this.selectedteams=this.teamname[0]      
        
          for (let item of data[0])
          {
            let temp_item={label:"",value:""}
            temp_item.label=JSON.parse(item).team
            temp_item.value=JSON.parse(item).team
            this.teamname.push(temp_item)
         
            
          }
        
   
            
    
            
    })


    this.service.collect_iterations().subscribe(data=> {
    
     
         
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
     
   

  toggleDisabled() {
    this.disabled = !this.disabled;
}
  

  exportExcel() {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws,this.selectedteams.toString().replace('\\','-'));
    
    
    XLSX.writeFile(wb, 'BugTracebilityReport.xlsx');
}



}
