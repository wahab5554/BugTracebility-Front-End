import { Component, OnInit } from '@angular/core';
import { CollectDataService } from './collect-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BugTracebility Matrix';
  heading_text:string;
  sideBarVisibility: boolean;
  constructor(private router:Router, private service: CollectDataService) {

  }

  ngOnInit() {
    this.sideBarVisibility = true
    this.heading_text="Bug Analysis Data"
  }
  navigateTo(route){
    this.router.navigate([route])
  }
}