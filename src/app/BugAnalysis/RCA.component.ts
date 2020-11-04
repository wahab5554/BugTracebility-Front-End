import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { CollectDataService } from '../collect-data.service';
import { IfStmt } from '@angular/compiler';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import * as XLSX from 'xlsx';
import { Data } from '@angular/router';
import { AppComponent } from '../app.component';
 
@Component({
  selector: 'app-bug',
  templateUrl: './RCA.component.html',
  styleUrls: ['./RCA.component.css'],
  providers: [MessageService],
  styles: [`
  .loading-text {
      display: block;
      background-color: #f1f1f1;
      min-height: 19px;
      animation: pulse 1s infinite ease-in-out;
      text-indent: -99999px;
      overflow: hidden;
  }
`]
   
   
   
  
})

export class RCAComponent implements OnInit {
  @ViewChild('table') table: ElementRef;
  disabled: boolean = true;
   
  displayDialog: boolean;
  selectedsprint:any[]
   bugid: string;
   rca_cat:string;
   how_bug_was_found:string;
   bug_identification_phase:string;
   catgeory: string;
  
   kosher_comments: string;
   rca_bug_identification_phase: string;
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
  title = 'RCA';
  data: any;

  sideBarVisibility: boolean;
  teamname: any[] = [];
  rca_category: any[] = [];
  bug_found: any[] = [];
  identification_phase: any[] = [];
  selectedteams:any[]
  releaseCycles:any[] = []
  selectedReleaseCycle:any[] = []
  sprints: any[] = [{label:'Select',value:'Select'}];
  selected_Categeory: any;
  sprint:string;

  constructor(private service: CollectDataService,private messageService: MessageService,private AppComponent:AppComponent) {
    this.buttn_text="edit"
    

   AppComponent.heading_text='RCA'
    this.rca_category = [
      {
        label: 'Select', value: 'Select',
       
      },
      {
        label: 'Coding Issue', value: 'Coding Issue',
       
      },
      {
        label: 'Data Issue', value: 'Data Issue',
       
      },
      {
        label: 'Design Related', value: 'Design Related',
       
      },
      {
        label: 'Environment Specific', value: 'Environment Specific',
       
      },
      {
        label: 'Missing Requirement', value: 'Missing Requirement',
       
      }
    ];


    this.identification_phase = [
      {
        label: 'Select', value: 'Select',
       
      },
      {
        label: 'In Sprint', value: 'In Sprint',
       
      },
      {
        label: 'In Regression', value: 'In Regression',
       
      },
      {
        label: 'In Production', value: 'In Production',
       
      }
    ];


    this.bug_found = [
      {
        label: 'Select', value: 'Select',
       
      },
     
      {
        label: 'Manual Testing', value: 'Manual Testing',
       
      },
      {
        label: 'Automated Testing', value: 'Automated Testing',
       
      }
    ];

    
   
      
    };
     
    clear_data()

    {
    
      this.is_visible=false
      
      this.selectedsprint=[];
      this.selectedteams=[];
      this.testdata=[];
    }
    populate_bug_data_db() {
      
      if(this.selectedsprint[0]==undefined)
      {
        this.is_visible=false
        this.messageService.add({severity:'error', summary:'Please Select Sprint!', detail:'Via BugAnalysis Team'});
      }
    
      if(this.selectedteams[0]==undefined)
      {
        this.is_visible=false
        this.messageService.add({severity:'error', summary:'Please Select Team!', detail:'Via BugAnalysis Team'});
      }
      else
      {


    this.is_visible=true
    this.sprint=this.selectedsprint.toString().replace('\\','-')


    this.service.collect_RCA(this.sprint.replace('\\','-'),this.selectedteams.toString().replace('\\','-')).subscribe(data=> {
      
        this.testdata= [];

    
       
        for (let item of data[0])
        {
        this.testdata.push(JSON.parse(item))
          
        }
      
        
    })
  }
  }  
  
  save_all_RCA()
  {
    for (var i = 0; i < this.testdata.length; i++){
     
  
      if(this.testdata[i].bug_rca_categeory==undefined || this.testdata[i].how_bug_was_found==undefined || this.testdata[i].bug_identification_phase==undefined
        || this.testdata[i].bug_rca_categeory=="undefined")
      {
        
        this.messageService.add({severity:'error', summary:'Please Select Missing Catgeory for BugID='+this.testdata[i].Bug_ID, detail:'Via BugAnalysis Team'});
       
      }
     else
     {
       
      

      this.save_Comments_rca(this.testdata[i].Bug_ID,this.testdata[i].bug_rca_categeory,this.testdata[i].how_bug_was_found,this.testdata[i].bug_identification_phase,this.testdata[i].rca_comments)
     }
    }
  }
  
  save_Comments_rca(bugid,catgeory,how_bug_was_found,rca_bug_identification_phase,kosher_comments) {
   
   
   

    if(how_bug_was_found==null || how_bug_was_found==undefined)
    {

      this.how_bug_was_found="Select"
    }
    else if((typeof(how_bug_was_found)).toString()=="object")
    {

      this.how_bug_was_found=how_bug_was_found.label
    }
    else
    {

      this.how_bug_was_found=how_bug_was_found
    }

    if(catgeory==null || catgeory==undefined)
    {

      this.rca_cat="Select"
    }
    else if((typeof(catgeory)).toString()=="object")
    {

      this.rca_cat=catgeory.label
    }
    else
    {

      this.rca_cat=catgeory
    }
     


    if(rca_bug_identification_phase==null || rca_bug_identification_phase==undefined)
    {

      this.rca_bug_identification_phase="Select"
    }
    else if((typeof(rca_bug_identification_phase)).toString()=="object")
    {

      this.rca_bug_identification_phase=rca_bug_identification_phase.label
    }
    else
    {

      this.rca_bug_identification_phase=rca_bug_identification_phase
    }
    
    
    if(this.how_bug_was_found=="Select" || this.rca_bug_identification_phase=="Select" || this.catgeory=="Select")
    {
      
      this.messageService.add({severity:'error', summary:'Please Select Missing Catgeory for BugID='+bugid, detail:'Via BugAnalysis Team'});
    }

   else
   {
    
     
    this.service.post_rca_comments_service(bugid,this.rca_cat,this.how_bug_was_found,this.rca_bug_identification_phase,kosher_comments).subscribe(data=> {
      
       
      this.messageService.add({severity:'success', summary:'Saved Successfully', detail:'Via BugAnalysis Team'});
            
    })
  }
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
            
    
            
    })
       

      
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
}
  

  exportExcel() {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws,this.selectedteams.toString());
    
    /* save to file */
    XLSX.writeFile(wb, 'BugTracebilityReport.xlsx');
}


}
