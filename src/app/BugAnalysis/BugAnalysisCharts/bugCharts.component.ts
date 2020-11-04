import { Component,OnInit,ViewChild, ElementRef} from '@angular/core';

import { CollectDataService } from 'src/app/collect-data.service';
import * as XLSX from 'xlsx';
import {MessageService} from 'primeng/api';
import { SortEvent } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import { empty } from 'rxjs';
import { RouteConfigLoadEnd } from '@angular/router';
import { DataSettingsComponent } from '../DataSettings.component';
import { AppComponent } from '../../app.component';
 
@Component({
  selector: 'app-bug',
  templateUrl: './bugCharts.component.html',
  styleUrls: ['./bugCharts.component.css']
})
export class BugChartsComponent implements OnInit {
   
 
  @ViewChild('table') table: ElementRef;
  testdata: any[] = [];
  title = 'Bug Tracebility Matrix';
  data: any;
  pieOptions:any;
  pieOptions2:any;
  pieOptions3:any;
  pieOptions4:any;

  pieOptions6:any;
  pieOptions7:any;
  pieOptions8:any;
  pieOptions9:any;
  pieOptions10:any;
  data2: any;
  data3: any;
  data4: any;
  data5: any;
  data6: any;
  data7: any;
  data8: any;
  data9: any;
  AllData4:any;
  graphData: any;
  selectedsprint:any[]


  sideBarVisibility: boolean;
  is_visible: boolean= false;
  prod_labels:String[]=[];
  prod_data:number[]=[];
  sprints: any[] = [{label:'Select',value:'Select'}];

  sprint:string;
  constructor(private service: CollectDataService,private messageService: MessageService,private AppComponent:AppComponent) {

    AppComponent.heading_text='Dashboard Trends'
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
  this.data8= [];

  this.data= [];
  this.data2= [];
  this.data3= [];
  this.data4= [];
  this.data5= [];
  this.data6= [];
  this.data7= [];
  this.data8= [];
  this.data9= [];
  this.AllData4= [];
  this.graphData= [];
  this.selectedsprint=[];
}




populate_charts()
{

 

    
  this.pieOptions = {
   
    
    
    
    responsive:true,
    showAllTooltips: true,
    tooltips: {
      
      
      
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
          return   tooltipData +'%';
        }
      },
      x: 20,
      yAlign: 'center',
      xAlign: 'center',
    },
  
    
   
    legend: {
        position: 'right',
       
    },
    title: {
      display: true,
      text: 'Test Plan Covered -Valid QA Bugs',
      fontSize: 16
    }, 
}

this.pieOptions2 = {
  legend: {
      position: 'right',
     
  },
  tooltips: {
    
    
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
         console.log(tooltipData)
        if (tooltipData=="0.0")
        {
           tooltipLabel.tooltipHidden;
        }
         else
         {
        return   tooltipData +'%';
         }
      }
    },
  
    
  },
  position: 'custom',
 
  showAllTooltips: true,

  title: {
    display: true,
    text: 'Test Plan Covered -Valid UAT Bugs',
    fontSize: 16
  }, 
}

this.pieOptions3 = {
  legend: {
      position: 'right',
     
  },
  tooltips: {
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
      }
    },
    x: 20,
    yAlign: 'center',
    xAlign: 'center',
  },

  responsive:true,
  showAllTooltips: true,

  title: {
    display: true,
    text: 'Bugs Identification Process',
    fontSize: 16
  }, 
}

this.pieOptions4 = {
  legend: {
      position: 'right',
     
  },
  tooltips: {
  
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
      }
    },
    yAlign: 'bottom',
    xAlign: 'center',
  },

  responsive:true,
  showAllTooltips: true,

  title: {
    display: true,
    text: 'Bugs Identification By Role',
    fontSize: 16
  }, 
}

this.pieOptions6 = {
  legend: {
      position: 'right',
     
  },
  tooltips: {
   
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
      }
    },
    yAlign: 'bottom',
    xAlign: 'center',
    
  },

  responsive:true,
  showAllTooltips: true,

  title: {
    display: true,
    text: 'Bugs Severity',
    fontSize: 16
  }, 
}

this.pieOptions7 = {
  legend: {
      position: 'right',
     
  },
  tooltips: {
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
        return tooltipData +'%';
      }
    },
    yAlign: 'bottom',
    xAlign: 'center',
  },

  responsive:true,
  showAllTooltips: true,

  title: {
    display: true,
    text: 'Test Plan Covered Not Valid QA Bugs',
    fontSize: 16
  }, 
}


this.pieOptions8 = {
  legend: {
      position: 'bottom',
     
  },
  tooltips: {
 
     
    
    callbacks: {
      label: function(tooltipItem, data) {
        var allData = data.datasets[tooltipItem.datasetIndex].data;
        var tooltipLabel = data.labels[tooltipItem.index];
        var tooltipData = allData[tooltipItem.index];
        var total = 0;
        for (var i in allData) {
          total += allData[i];
        }
       
        return  tooltipData +'%';
      }
    },


    yAlign: 'bottom',
    xAlign: 'center',
    
  },

  responsive:true,
  showAllTooltips: true,

  title: {
    display: true,
    text: 'Bugs RCA Catgeory',
    fontSize: 16
  }, 
}

this.pieOptions9 = {
  legend: {
      position: 'right',
     
  },
  tooltips: {
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
      }
    },
    yAlign: 'bottom',
    xAlign: 'center',
  },

  responsive:true,
  showAllTooltips: true,

  title: {
    display: true,
    text: 'Bugs Identification Phase',
    fontSize: 16
  }, 
}
this.pieOptions10 = {
  legend: {
      position: 'right',
     
  },
  
 
  responsive:true,
  showAllTooltips: true,

  title: {
    display: true,
    text: 'Product Wise',
    fontSize: 16
  }, 

  tooltips: {
   yAlign: 'bottom',
    xAlign: 'center',
    callbacks: {
      title: function() {}
   
    }
},
 




}

if(this.selectedsprint[0]== undefined)
  {
   
    this.is_visible=false
    this.messageService.add({severity:'error', summary:'Please Select Sprint!', detail:'Via BugAnalysis Team'});
  }

else
{
  this.sprint=this.selectedsprint.toString().replace('\\','-')
  this.is_visible=true
  this.messageService.add({severity:'success', summary:'Data Fetched From Database', detail:'Via BugAnalysis Team'});
  this.service.collect_RCA_pie_chart_data(this.sprint.replace('\\','-')).subscribe(data=> {
    for (let item of data[0])
      {
    
    this.data8 = {
      labels: ['Data Issue','Coding Issue','Environmental Specific','Design Related','Missing Requirement'],
       
      datasets: [
          {
             
              data: [JSON.parse(item).data_issue_perc,JSON.parse(item).coding_issue_perc,JSON.parse(item).environmental_specific_perc,
                JSON.parse(item).desing_related_perc,JSON.parse(item).missing_req_perc
              
              
              ],
              
              backgroundColor: [
                  "#D49385",
                  "#A1BEEC",
                  "#A7D375",
                  "#A9795B",
                  "#F7660B"
                

              ],
              hoverBackgroundColor: [
                "#D49385",
                "#A1BEEC",
                "#A7D375",
                "#A9795B",
                "#F7660B"
              

              ]
          }]    
      };
    }
    
    
  })

  
  this.service.collect_product_wise_chart_data(this.sprint.replace('\\','-')).subscribe(data=> {
   


    this.graphData=[];
    this.prod_labels=[];
    this.prod_data=[];
    for (let item of data[0])
    {
  
    
  
    this.prod_labels.push(String(JSON.parse(item).product_name))
    this.prod_data.push(Number(JSON.parse(item).total_count))


    this.graphData = {
   
      labels: this.prod_labels,
      datasets: [
          {

              label: 'Total',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: this.prod_data
          },
          
         
      ]

               
      };
      
    }


  })

     this.service.collect_priority_GetQA_NonQA_Charts(this.sprint.replace('\\','-')).subscribe(data=> {
      for (let item of data[0])
        {
      
      this.data4 = {
        labels: ['QA','Other than QA'],
        datasets: [
            {
              
                data: [JSON.parse(item).qa_perc,JSON.parse(item).other_perc],
                backgroundColor: [
                    "#8bad9d",
                    "#E9F3BE"
                ],
                hoverBackgroundColor: [
                    "#8bad9d",
                    "#E9F3BE"
                ]
            }]    
    
        };
      }
    })

     
    this.service.collect_get_valid_qa_bugs(this.sprint.replace('\\','-')).subscribe(data=> {
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

    this.service.collect_bdd_uat_charts_data(this.sprint.replace('\\','-')).subscribe(data=> {
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

    
    this.service.collect_RCA_how_bug_foundchart_data(this.sprint.replace('\\','-')).subscribe(data=> {
      for (let item of data[0])
        {
      
      this.data3 = {
        labels: ['Manual Testing','Automated Testing'],
        datasets: [
            {
              
                data: [JSON.parse(item).manual_issue_perc,JSON.parse(item).automated_issue_perc],
                backgroundColor: [
                    "#2D5820",
                    "#5D2249"
                   
                ],
                hoverBackgroundColor: [
                    "#2D5820",
                    "#5D2249"
                 
                ]
            }]    
        };
      }
    })

    
  

    this.service.collect_not_valid_bugs_chart_data(this.sprint.replace('\\','-')).subscribe(data=> {
      for (let item of data[0])
        {
      
      this.data7 = {
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
    


    this.service.collect_priority_bugs_chart(this.sprint.replace('\\','-')).subscribe(data=> {
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
  

   
    this.service.collect_RCA_bug_identification_phase_chart_data(this.sprint.replace('\\','-')).subscribe(data=> {
      for (let item of data[0])
        {
      
      this.data9 = {
        labels: ['In Sprint','In Regression','In Production'],
        datasets: [
            {
              
                data: [JSON.parse(item).total_sprint_perc,JSON.parse(item).total_regression_perc,JSON.parse(item).total_production_perc],
                backgroundColor: [
                    "#e6f7ff",
                    "#00ffcc",
                    " #99ff99"
                  

                ],
                hoverBackgroundColor: [
                  "#e6f7ff",
                  "#00ffcc",
                  "#99ff99"
                

                ]
            }]    
        };
      }
    })

  
  }

}
customSort(event: SortEvent) {
  event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
          result = -1;
      else if (value1 != null && value2 == null)
          result = 1;
      else if (value1 == null && value2 == null)
          result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
          result = value1.localeCompare(value2);
      else
          result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
  });
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
