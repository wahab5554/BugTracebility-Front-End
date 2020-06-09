import { Component, OnInit } from '@angular/core';
import { CollectDataService } from '../collect-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  testdata: any[] = []
  title = 'AngularDashboard';
  data: any;
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
  constructor(private service: CollectDataService) {
    this.releaseCycles = [
      {
        label: 'Release 19.04', value: 'Release 19.04',
      },
      {
        label: 'Release 19.07', value: 'Release 19.07',
      },
      {
        label: 'Release 19.09', value: 'Release 19.09',
      },
      {
        label: 'Release 20.02', value: 'Release 20.02',
      },
      {
        label: 'Release 20.04', value: 'Release 20.04',
      }
    ];
    this.teamname = [
      {label: 'WPF' , value:'wpf'},
      {label: 'WPD' , value:'wpd'}
    ]

    this.data = {
      labels: ["19.03", "19.07", "19.10", "20.2"],
      fontColor: 'white',
      datasets: [
        {
          label: 'Avg US Complexity',
          yAxisID: "y-axis-2",
          data: [4.4, 3.9, 3.2],
          order: 2,
          backgroundColor: '#2ecc71',
          barThickness: 50,

        },
        {
          label: 'Avg BDD\'s Per US',
          data: [9.7, 6.0, 9.5],
          type: 'line',
          order: 1,
          borderColor: "yellow",
          yAxisID: "y-axis-2",
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false
        },
        {
          label: 'Avg Capacity Utilization',
          data: [52, 76, 69, 32],
          type: 'line',
          order: 1,
          borderColor: "orange",
          yAxisID: "y-axis-1",
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false
        },
        {
          label: 'Avg Bugs Per US',
          data: [1.0, 4.0, 1.5],
          type: 'line',
          order: 1,
          borderColor: "red",
          yAxisID: "y-axis-2",
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false,
          legendMarkerColor: "white",


        },
        {
          label: 'Automation Coverage',
          data: [0, 0, 0],
          type: 'line',
          order: 1,
          borderColor: "#3498db",
          yAxisID: "y-axis-1",
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false,
          legendMarkerColor: "white",


        },
      ]
    }

    this.options2 = {
      tooltips: {
        titleFontSize: 20,
        titleFontStyle: 'bold',
        bodyFontSize: 16,
        callbacks: {
          label: function (tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label || '';
            if (label) {
              label += ': ';
            }
            if (data.datasets[tooltipItem.datasetIndex].yAxisID != 'y-axis-2') { label += Math.round(tooltipItem.yLabel * 100) / 100 + '%'; }
            else { label += tooltipItem.yLabel }
            return label;
          }
        }
      },
      legend: {
        display: true,
        position: 'left',
        align: 'center',
        labels: {
          usePointStyle: false,
          fontColor: 'white',
          padding: 15,
          fontSize: 14
        }
      },
      scales: {
        yAxes: [
          {
            type: "linear",
            id: "y-axis-1",
            display: true,
            position: "right",
            gridLines: {
              // display: false,
              color: "#636e72"
            },
            scaleLabel: {
              display: true,
              labelString: "Percentage %",
              fontColor: "white",
              fontSize: 15
            },
            ticks: {
              beginAtZero: false,
              max: 100,
              min: 0,
              stepSize: 10,
              fontColor: 'white'
            }
          },
          {
            type: "linear",
            id: "y-axis-2",
            display: true,
            position: "left",
            scaleLabel: {
              display: true,
              labelString: "",
              fontColor: "white"
            },
            gridLines: {
              // display:true,
              color: "#636e72"
            },
            ticks: {
              beginAtZero: false,
              max: 10,
              min: 0,
              stepSize: 2,
              fontColor: 'white'
            }

          }

        ],
        xAxes: [{
          ticks: {
            fontColor: 'white',
          },
          scaleLabel: {
            display: true,
            labelString: "Release Cycle",
            fontColor: "white",
            fontSize: 15
          },
        }]
      }
    }

    this.shiftLeftData = {

      labels: ['19.04', '19.07', '19.10', '20.02'],
      datasets: [
        {
          label: "API/DB",
          backgroundColor: "#6d98c8",
          data: [65, 59, 80, 19, 40, 49, 20],
          stack: 1

        },

        {
          label: "UI",
          backgroundColor: "#ff523a",
          data: [35, 41, 20, 81, 60, 59, 80],
          stack: 1
        }
      ]

    };

    this.shiftLeftOptions = {
      tooltips: {
        titleFontSize: 20,
        titleFontStyle: 'bold',
        bodyFontSize: 16,
        callbacks: {
          label: function (tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label || '';
            if (label) {
              label += ': ';
            }
            label += Math.round(tooltipItem.yLabel * 100) / 100 + '%';
            return label;
          }
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
        labels: {
          usePointStyle: false,
          fontColor: 'white',
          padding: 15,
          fontSize: 14
        }
      },
      scales: {
        yAxes: [{
          type: "linear",
          display: true,
          position: "left",
          scaleLabel: {
            display: true,
            labelString: "Percentage %",
            fontColor: "white",
            fontSize: 15
          },
          gridLines: {
            // display:true,
            color: "#636e72"
          },
          ticks: {
            beginAtZero: false,
            max: 100,
            min: 0,
            stepSize: 10,
            fontColor: 'white'
          }
        }],
        xAxes: [
          {
            // label: {
            //   start: "19.04",
            //   end: "19.10",
            //   text: "Half Yearly 1"
            // },
            // gridLines: {
            //   // display:true,
            //   // color: "#636e72"
            // },
            ticks: {
              beginAtZero: false,
              max: 100,
              min: 0,
              stepSize: 10,
              fontColor: 'white'
            }
          },
          // { label: { start: 3.5, end: 7.5, text: "Half Yearly 2" } },
        ],
      }
    };

    this.siteComparisionsData = {
      datasets: [{
        label: 'Islamabad Site US Compelexity Ratio',
        yAxisID: "y-axis-1",
        data: [90, 80, 85],
        order: 2,
        backgroundColor: '#2ecc71',
        barThickness: 50,

      },
      {
        label: 'Other Sites US Compelexity Ratio',
        yAxisID: "y-axis-1",
        data: [80, 75, 80],
        order: 2,
        backgroundColor: '#e74c3c',
        barThickness: 50,

      },
      {
        label: 'Islamabad Site E2E Automation Coverage',
        yAxisID: "y-axis-1",
        data: [37, 51, 66],
        type: 'line',
        order: 1,
        borderColor: "#3498db",
        pointStyle: 'rect',
        radius: 8,
        hoverRadius: 10,
        fill: false
      },
      {
        label: 'Other Site E2E Automation Coverage',
        yAxisID: "y-axis-1",
        data: [48, 87, 75],
        type: 'line',
        order: 1,
        borderColor: "#3498db",
        borderDash: [10, 5],
        pointStyle: 'rect',
        radius: 8,
        hoverRadius: 10,
        fill: false,

      }
        ,
      {
        label: 'Islamabad Site Automation Coverage',
        yAxisID: "y-axis-1",
        data: [90, 97, 98],
        type: 'line',
        order: 1,
        borderColor: "#95a5a6",
        pointStyle: 'rect',
        radius: 8,
        hoverRadius: 10,
        fill: false,

      },
      {
        label: 'Other Site Automation Coverage',
        yAxisID: "y-axis-1",
        data: [53, 66, 59],
        type: 'line',
        order: 1,
        borderColor: "#95a5a6",
        borderDash: [10, 5],
        pointStyle: 'rect',
        radius: 8,
        hoverRadius: 10,
        fill: false,

      },
      {
        label: 'Islamabad Bugs Per US',
        yAxisID: 'y-axis-2',
        data: [1.5, 1.0, 0.7],
        type: 'line',
        order: 1,
        borderColor: "#e67e22",
        pointStyle: 'rect',
        radius: 8,
        hoverRadius: 10,
        fill: false
      },
      {
        label: 'Other Site Bugs Per US',
        yAxisID: 'y-axis-2',
        data: [1.5, 1.1, 1.1],
        type: 'line',
        order: 1,
        borderColor: "#e67e22",
        borderDash: [10, 5],
        pointStyle: 'rect',
        radius: 8,
        hoverRadius: 10,
        fill: false
      },
      {
        label: 'Islamabad BDD\'s Per US',
        yAxisID: 'y-axis-2',
        data: [5.2, 3.8, 3.3],
        type: 'line',
        order: 1,
        borderColor: "#f1c40f",
        pointStyle: 'rect',
        radius: 8,
        hoverRadius: 10,
        fill: false
      },
      {
        label: 'Other Site BDD\'s Per US',
        yAxisID: "y-axis-2",
        data: [4.8, 4.6, 4.6],
        type: 'line',
        order: 1,
        borderColor: "#f1c40f",
        borderDash: [10, 5],
        pointStyle: 'rect',
        radius: 8,
        hoverRadius: 10,
        fill: false
      }
      ],
      labels: ['19.03' , '19.07', '19.10']
    }
  }
  populateDataOnGraph() {
    this.service.collct_data_from_service().subscribe(data => {
      console.log("Data Is = ", data)
      // this.data2.labels = data['labels']
      this.siteComparisionsData = {
        datasets: [{
          label: 'Islamabad Site US Compelexity Ratio',
          yAxisID: "y-axis-1",
          data: [90, 80, 85],
          order: 2,
          backgroundColor: '#2ecc71',
          barThickness: 50,

        },
        {
          label: 'Other Sites US Compelexity Ratio',
          yAxisID: "y-axis-1",
          data: [80, 75, 80],
          order: 2,
          backgroundColor: '#e74c3c',
          barThickness: 50,

        },
        {
          label: 'Islamabad Site E2E Automation Coverage',
          yAxisID: "y-axis-1",
          data: [37, 51, 66],
          type: 'line',
          order: 1,
          borderColor: "#3498db",
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false
        },
        {
          label: 'Other Site E2E Automation Coverage',
          yAxisID: "y-axis-1",
          data: [48, 87, 75],
          type: 'line',
          order: 1,
          borderColor: "#3498db",
          borderDash: [10, 5],
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false,

        }
          ,
        {
          label: 'Islamabad Site Automation Coverage',
          yAxisID: "y-axis-1",
          data: [90, 97, 98],
          type: 'line',
          order: 1,
          borderColor: "#95a5a6",
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false,

        },
        {
          label: 'Other Site Automation Coverage',
          yAxisID: "y-axis-1",
          data: [53, 66, 59],
          type: 'line',
          order: 1,
          borderColor: "#95a5a6",
          borderDash: [10, 5],
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false,

        },
        {
          label: 'Islamabad Bugs Per US',
          yAxisID: 'y-axis-2',
          data: [1.5, 1.0, 0.7],
          type: 'line',
          order: 1,
          borderColor: "#e67e22",
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false
        },
        {
          label: 'Other Site Bugs Per US',
          yAxisID: 'y-axis-2',
          data: [1.5, 1.1, 1.1],
          type: 'line',
          order: 1,
          borderColor: "#e67e22",
          borderDash: [10, 5],
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false
        },
        {
          label: 'Islamabad BDD\'s Per US',
          yAxisID: 'y-axis-2',
          data: [5.2, 3.8, 3.3],
          type: 'line',
          order: 1,
          borderColor: "#f1c40f",
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false
        },
        {
          label: 'Other Site BDD\'s Per US',
          yAxisID: "y-axis-2",
          data: [4.8, 4.6, 4.6],
          type: 'line',
          order: 1,
          borderColor: "#f1c40f",
          borderDash: [10, 5],
          pointStyle: 'rect',
          radius: 8,
          hoverRadius: 10,
          fill: false
        }
        ],
        labels: data['labels'],
      }
    })
  }
 
   
  ngOnInit() {
    this.populateDataOnGraph()
    this.sideBarVisibility = true
    

    this.service.collct_data_from_service_bug().subscribe(data=>{
      
       
      console.log(data)
})
 
  }

}
