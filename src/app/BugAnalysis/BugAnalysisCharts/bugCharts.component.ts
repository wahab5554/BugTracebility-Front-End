import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { CollectDataService } from 'src/app/collect-data.service';
import * as XLSX from 'xlsx';
import {InputTextModule} from 'primeng/inputtext';
@Component({
  selector: 'app-bug',
  templateUrl: './bugCharts.component.html',
  styleUrls: ['./bugCharts.component.css']
})
export class BugChartsComponent implements OnInit {
   
  
  @ViewChild('table') table: ElementRef;
  testdata: any[] = [];
  title = 'AngularDashboard';
  data: any;
  data2: any;
  data3: any;
  data4: any;
  data5: any;
  data6: any;
  siteComparisionsData: any;
  shiftLeftData: any;
  shiftLeftOptions: any;
  options2: any;
  options: any;
  sideBarVisibility: boolean;
  teamname: any[];
  selectedteams:any[]
  releaseCycles:any[] = []
  selectedReleaseCycle:any[] = []
  AllData: any[] = [];
  AllData2: any[] = [];
  AllData3: any[] = [];
  AllData4: any[] = [];
  prod_labels:String[]=[];
  prod_data:number[]=[];
  

  constructor(private service: CollectDataService) {

    
    
    this.data5 = {
     
      labels:  ['Document System', 'IR', 'Data Processing'],
      datasets: [
          {
              label: 'Product wise',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40]
          }
         
      ]
               
      };

      
    };

     
   
  exportExcel() {

    
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws,"ReleaseCycle");
    
    /* save to file */
    XLSX.writeFile(wb, 'BugTracebilityReportCharts.xlsx');
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
  ngOnInit() {
     
    this.sideBarVisibility = true
   
    



    this.service.collect_product_wise_chart_data().subscribe(data=> {

      for (let item of data[0])
      {
      // console.log(JSON.parse(item).product_name)
    
      this.prod_labels.push(String(JSON.parse(item).product_name))
      this.prod_data.push(Number(JSON.parse(item).total_count))
      this.data5 = {
     
        labels: this.prod_labels,
        datasets: [
            {
                label: 'Product wise',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: this.prod_data
            },
            
           
        ]
  
                 
        };
        
      }
     }) 
     
     

     console.log(this.data5)
    

     this.service.collect_bdd_charts_data().subscribe(data=> {

      for (let item of data[0])
      {
      this.AllData.push(JSON.parse(item))
        
      }
     }) 
     
     this.service.collect_bdd_uat_charts_data().subscribe(data=> {

      for (let item of data[0])
      {
      this.AllData2.push(JSON.parse(item))
        
      }
     }) 

     this.service.collect_not_valid_bugs_chart_data().subscribe(data=> {

      for (let item of data[0])
      {
      this.AllData3.push(JSON.parse(item))
        
      }
     }) 

     this.service.collect_priority_GetQA_NonQA_Charts().subscribe(data=> {

      for (let item of data[0])
      {
      this.AllData4.push(JSON.parse(item))
        
      }
     }) 
     
    this.service.collect_bdd_charts_data().subscribe(data=> {
      for (let item of data[0])
        {
     
      this.data = {
        labels: ['Not Covered in BDD','Covered in BDD','General Regression'],
        datasets: [
            {
              
                data: [JSON.parse(item).bdd_covered_perc,JSON.parse(item).not_covered_bdd_perc,JSON.parse(item).general_reg_perc],
                backgroundColor: [
                    "#0059b3",
                    "#40bf40",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#0059b3",
                    "#40bf40",
                    "#FFCE56"
                ]
            }]    
        };
      }
    })

    this.service.collect_bdd_uat_charts_data().subscribe(data=> {
      for (let item of data[0])
        {
       
      this.data2 = {
        labels: ['Not Covered in BDD','Covered in BDD','General Regression'],
        datasets: [
            {
              
                data: [JSON.parse(item).bdd_covered_perc,JSON.parse(item).not_covered_bdd_perc,JSON.parse(item).general_reg_perc],
                backgroundColor: [
                    "#0059b3",
                    "#40bf40",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#0059b3",
                    "#40bf40",
                    "#FFCE56"
                ]
            }]    
        };
      }
    })

    
    this.service.collect_not_valid_bugs_chart_data().subscribe(data=> {
      for (let item of data[0])
        {
      
      this.data3 = {
        labels: ['Not Covered in BDD','Covered in BDD','General Regression'],
        datasets: [
            {
              
                data: [JSON.parse(item).bdd_covered_perc,JSON.parse(item).not_covered_bdd_perc,JSON.parse(item).general_reg_perc],
                backgroundColor: [
                    "#0059b3",
                    "#40bf40",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#0059b3",
                    "#40bf40",
                    "#FFCE56"
                ]
            }]    
        };
      }
    })

    this.service.collect_priority_GetQA_NonQA_Charts().subscribe(data=> {
      for (let item of data[0])
        {
      
      this.data4 = {
        labels: ['QA','Other than QA'],
        datasets: [
            {
              
                data: [JSON.parse(item).qa_perc,JSON.parse(item).other_perc],
                backgroundColor: [
                    "#8bad9d",
                    "#ffffdd"
                ],
                hoverBackgroundColor: [
                    "#8bad9d",
                    "#ffffdd"
                ]
            }]    
        };
      }
    })

  

      
    


    this.service.collect_priority_bugs_chart().subscribe(data=> {
      for (let item of data[0])
        {
      
      this.data6 = {
        labels: ['P1','P2','P3'],
        datasets: [
            {
              
                data: [JSON.parse(item).p1_perc,JSON.parse(item).p2_perc,JSON.parse(item).p3_perc],
                backgroundColor: [
                    "#EC2E2E",
                    "#ffd300",
                    "#005b96"
                ],
                hoverBackgroundColor: [
                  "#EC2E2E",
                    "#ffd300",
                    "#005b96"
                ]
            }]    
        };
      }
    })

    
  }

}
