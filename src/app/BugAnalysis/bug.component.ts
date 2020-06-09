import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { CollectDataService } from '../collect-data.service';
import { IfStmt } from '@angular/compiler';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import * as XLSX from 'xlsx';
import { Data } from '@angular/router';
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

    

    selectedCar: any;

    newCar: boolean;

  
    cols: any[];
   text: string;

   bugid: string;
   buttn_text: string;
   comments: string;
  is_visible: boolean= false;
  testdata: any[] = [];
  fixedreasons =[{a:'Fixed',b:'Fixed and verified'}];
  pm_bugs_kosher : any[] = [];
  qa_bugs_kosher : any[] = [];
  qa_non_fixed : any[] = [];
  BUGS_Total: any[] =[];
  AllData: any[] = [];
  AllData_Bugs: any[] = [];
  AllData_Kosher: any[] = [];
  title = 'AngularDashboard';
  data: any;
  siteComparisionsData: any;
  shiftLeftData: any;
  shiftLeftOptions: any;
  options2: any;
  options: any;
  sideBarVisibility: boolean;
  teamname: any[] = [];
  selectedteams:any[]
  releaseCycles:any[] = []
  selectedReleaseCycle:any[] = []
  
  


  constructor(private service: CollectDataService,private messageService: MessageService) {
    this.buttn_text="edit"
    this.releaseCycles = [
     
      {
        label: 'Release 20.04', value: 'Release 20.04',
      }
    ];

  
    this.teamname = [
      {label:'Select', value:'Select Team'},
     {label: 'Content Platforms A' , value:'Content Platforms A'},
      {label: 'Content Platforms C' , value:'Content Platforms C'},
      {label: 'CRE' , value:'CRE'},
     {label: 'DMS API Metadata' , value:'DMS API Metadata'},
     {label: 'DMS API Metadata' , value:'DMS API Metadata'},
     {label: 'DTI Core Services A' , value:'DTI Core Services A'},
     {label: 'DTI Core Services A' , value:'DTI Core Services A'},
     {label: 'DTI Data Ingestion C' , value:'DTI Data Ingestion C'},
     {label: 'DTI Financials Mapping and Middle Tier' , value:'DTI Financials Mapping and Middle Tier'},
     {label: 'DTI Financials Segments' , value:'DTI Financials Segments'},
     {label: 'DTI Marketplace Data Ingestion A' , value:'DTI Marketplace Data Ingestion A'},
     {label: 'DTI Marketplace Data Ingestion B' , value:'DTI Marketplace Data Ingestion B'},
     {label: 'ESG A' , value:'ESG A'},
     {label: 'Energy B' , value:'Energy B'}
     
    ]
      
    };

  
  populate_bug_data() {
    this.is_visible=true
    this.service.collct_data_from_service_bug().subscribe(data=> {
      
     this.testdata = this.AllData.filter(
        book => book.str_team === this.selectedteams)

        this.BUGS_Total = this.AllData_Bugs.filter(
          bugs => bugs.team === this.selectedteams)


        this.pm_bugs_kosher = this.AllData_Kosher.filter(
        pm => pm.team === this.selectedteams && pm.role!="QA"  && pm.resolvedreason==="Fixed"
      )
          
        this.qa_bugs_kosher = this.AllData_Kosher.filter(
        qa => qa.team === this.selectedteams && qa.role==="QA" && qa.resolvedreason==="Fixed")
           
        this.qa_non_fixed = this.AllData_Kosher.filter(
          qa => qa.team === this.selectedteams && qa.role==="QA" && qa.resolvedreason!="Fixed"  ) 
            
    })

  }  
  
 
  
  Save_Comments(bugid,comments) {
   
    this.service.post_comments_service(bugid,comments).subscribe(data=> {
      
      this.messageService.add({severity:'success', summary:'Saved Successfully', detail:'Via BugAnalysis Team'});
            
    })

  }  
  ngOnInit() {
     
    this.sideBarVisibility = true

     this.service.collct_data_from_service_bug().subscribe(data=> {

       for (let item of data[0])
       {
       this.AllData.push(JSON.parse(item))
         
       }
      }) 

      this.service.collct_bugs_total_data_from_service_teams().subscribe(data=> {

        for (let item of data[0])
        {
        this.AllData_Bugs.push(JSON.parse(item))
        
         
        }
       }) 

       this.service.collect_kosher_data().subscribe(data=> {

        for (let item of data[0])
        {
        this.AllData_Kosher.push(JSON.parse(item))
         
        }

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

saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}

}
