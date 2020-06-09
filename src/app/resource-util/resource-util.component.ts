import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-util',
  templateUrl: './resource-util.component.html',
  styleUrls: ['./resource-util.component.css']
})
export class ResourceUtilComponent implements OnInit {
  resourceGraphData: any
  resGraphOptions: any
  selectResources:any
  allResources:any
  constructor() {
    this.resourceGraphData = {
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
        // {
        //   label: 'Avg Capacity Utilization',
        //   data: [52, 76, 69, 32],
        //   type: 'line',
        //   order: 1,
        //   borderColor: "orange",
        //   yAxisID: "y-axis-1",
        //   pointStyle: 'rect',
        //   radius: 8,
        //   hoverRadius: 10,
        //   fill: false
        // },
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
        // {
        //   label: 'Automation Coverage',
        //   data: [0, 0, 0],
        //   type: 'line',
        //   order: 1,
        //   borderColor: "#3498db",
        //   yAxisID: "y-axis-1",
        //   pointStyle: 'rect',
        //   radius: 8,
        //   hoverRadius: 10,
        //   fill: false,
        //   legendMarkerColor: "white",


        // },
      ]
    }
    this.resGraphOptions = {
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
            labelString: "Resource Name",
            fontColor: "white",
            fontSize: 15
          },
        }]
      }
    }
    this.allResources = [
      {
        label: 'Faisal', value: 'Release 19.04',
      },
      {
        label: 'Rizwan', value: 'Release 19.07',
      },
      {
        label: 'Wahab', value: 'Release 19.09',
      },
      {
        label: 'Amir', value: 'Release 20.02',
      },
      {
        label: 'Farrukh', value: 'Release 20.02',
      },
      {
        label: 'Maria', value: 'Release 20.04',
      }
    ];
  }

  ngOnInit(): void {
  }

}
