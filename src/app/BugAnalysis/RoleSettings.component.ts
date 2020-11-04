import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { CollectDataService } from 'src/app/collect-data.service';
import * as XLSX from 'xlsx';
import {MessageService} from 'primeng/api';
import { AppComponent } from '../app.component';
import {InputTextModule} from 'primeng/inputtext';
import { DatePipe } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
@Component({
  selector: 'app-datepipe',
  templateUrl: './RoleSettings.component.html',
  styleUrls: ['./RoleSettings.component.css']
})
export class RoleSettingsComponent implements OnInit {
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
  testdata: any[] = [];
  value1: Date;
  value2: Date;
  title = 'BugTracebility Matrix';
   
  options: any;
  sideBarVisibility: boolean;
  roles: any[];
  
  selectedTeam:any[]
  releaseCycles:any[] = []
  selectedReleaseCycle:any[] = []
  AllData: any[] = [];
  Rolesdata: any[] = [];
  prod_labels:String[]=[];
  prod_data:number[]=[];
  selectedteams:any[]
  selectedrole:any[]
  teamname: any[] = [{label:'Select',value:'Select'}];
  constructor(private service: CollectDataService,private messageService: MessageService,private datePipe:DatePipe,private AppComponent:AppComponent) {
   
    AppComponent.heading_text='Team Settings'
    this.roles = [
      {
        label: 'Select', value: 'Select',
       
      },
      {
        label: 'Testing (QA)', value: 'Testing (QA)',
       
      },
      {
        label: 'Testing (Content UA)', value: 'Testing (Content UA)',
       
      },
      {
        label: 'Project Management', value: 'Project Management',
       
      },
      {
        label: 'Other', value: 'Other',
       
      }
       
    ];
    };
    showDialog() {
     
      this.display = true;
  }

  HideDialog() {
     
    this.display = false;
}

    get_team_data() {
      
      
      this.Rolesdata= [];
     
      this.service.get_team_roles_db(this.selectedteams).subscribe(data=> {

        for (let item of data[0])
        {
        this.Rolesdata.push(JSON.parse(item))
          
        }
       }) 
    }  

   
   
    update_teams_role(role,name:string,team) {
  
     
      if(typeof(role)=='object' )
      {
       role=role.label
      }
      if(typeof(team)=='object')
      {
        team=team.label
      }
    
       
      team=team.toString().replace('\\','-')
      this.service.update_team_roles(role,name,team).subscribe(data=> {

        this.messageService.add({severity:'success', summary:'Data Updated Successfully!', detail:'Via BugAnalysis Team'});
       }) 
      
    }  

    save_team_member(role,name:string,team) {
  
     
      if(typeof(role)=='object' )
      {
       role=role.label
      }
      if(typeof(team)=='object')
      {
        team=team.label
      }
    
      
      team=team.toString().replace('\\','-')
      this.service.update_team_roles(role,name,team).subscribe(data=> {
        this.HideDialog();

        this.messageService.add({severity:'success', summary:'Data Added Successfully!', detail:'Via BugAnalysis Team'});
       }) 
      
    }  

    delete_team_member(name:string) {
  
    
      this.service.delete_team_member(name).subscribe(data=> {

        this.messageService.add({severity:'success', summary:'Data Deleted Successfully!', detail:'Via BugAnalysis Team'});
       }) 
      
    }  


   
    update_main_table() {
      
  

      this.service.update_main_table_service().subscribe(data=> {

        this.messageService.add({severity:'success', summary:'Roles are updated on main table', detail:'Via BugAnalysis Team'});
       }) 
    }  
   
  exportExcel() {

    
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws,"ReleaseCycle");
    
    /* save to file */
    XLSX.writeFile(wb, 'Roles.xlsx');
}

 
  ngOnInit() {
     
    this.sideBarVisibility = true
   
    
    this.service.collect_teams().subscribe(data=> {
    
    
         
      this.selectedteams=this.teamname[0]      
        
          for (let item of data[0])
          {
            let temp_item={label:"",value:""}
            temp_item.label=JSON.parse(item).team
            temp_item.value=JSON.parse(item).team
            this.teamname.push(temp_item)
         
            
          }
        
   
            
    
            
    })


     

    
     
     

  
    
     
  }

}
