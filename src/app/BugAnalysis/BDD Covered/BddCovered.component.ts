import { Component, OnInit } from '@angular/core';
import { CollectDataService } from 'src/app/collect-data.service';

@Component({
  selector: 'app-bug2',
  templateUrl: './BddCovered.component.html',
  styleUrls: ['./BddCovered.component.css']
})
export class BddComponent implements OnInit {
  testdata: any[] = [];
  
  pm_bugs_kosher : any[] = [];
  bdd_data : any[] = [];
  qa_non_fixed : any[] = [];
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
  BddReports: any[] = [];
  selectedreport:any[]
  releaseCycles:any[] = []
  selectedReleaseCycle:any[] = []
  

  constructor(private service: CollectDataService) {
    
  
    this.BddReports = [
      {
        label: 'Select Reporttype' , value:'Select Reporttype'
      },
      {
        label: 'BDD Covered - Valid QA Bugs' , value:'BDD Covered - Valid QA Bugs'
      },
      {
        label: 'BDD Not Covered - Valid UAT Bugs' , value:'BDD Not Covered - Valid UAT Bugs'
      },
      {
        label: 'BDD Not Covered - Not Valid QA Bugs' , value:'BDD Not Covered - Not Valid QA Bugs'



      }
    ];
      
  }

  
  populate_bdd_data() {
    this.service.collect_bdd_data().subscribe(data=> {
      
  
        this.bdd_data = this.AllData.filter(
        r => r.reporttype === this.selectedreport)
           
       
            
    })

  }  
  
  ngOnInit() {
     
    this.sideBarVisibility = true
    this.service.collect_bdd_data().subscribe(data=> {

      for (let item of data[0])
      {
      this.AllData.push(JSON.parse(item))
        
      }
     }) 
      
  }

}
