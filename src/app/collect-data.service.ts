import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MessageService} from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class CollectDataService {
  sprint: any;
  constructor(private http: HttpClient) { }

  collct_data_from_service(){
    return this.http.get('http://localhost:5000/get_shift_left_data/')
  }
  collct_data_from_service_bug(){
     
    return this.http.get('http://127.0.0.1:5000/GetData')
  }
  collct_data_from_service_teams(){
     
    return this.http.get('http://127.0.0.1:5000/GetTeams')
  }
  collct_bugs_total_data_from_service_teams(){
     
    return this.http.get('http://127.0.0.1:5000/GetBugsTotal')
  }

  collect_kosher_data(){
     
    return this.http.get('http://127.0.0.1:5000/GetKosherData')
  }

  collect_bdd_data(){
     
    return this.http.get('http://127.0.0.1:5000/GetBDDBugs')
  }
  collect_bdd_charts_data(){
     
    return this.http.get('http://127.0.0.1:5000/get_charts')
  }

  collect_bdd_uat_charts_data(){
     
    return this.http.get('http://127.0.0.1:5000/get_charts_uat')
  }
  collect_not_valid_bugs_chart_data(){
     
    return this.http.get('http://127.0.0.1:5000/get_not_valid_data')
  }
  collect_product_wise_chart_data(){
     
    return this.http.get('http://127.0.0.1:5000/GetProductwise')
  }
  collect_priority_bugs_chart(){
     
    return this.http.get('http://127.0.0.1:5000/GetPriorityBugs')
  }
  collect_priority_GetQA_NonQA_Charts(){
     
    return this.http.get('http://127.0.0.1:5000/GetQA_NonQA')
  }
  collect_RCA(){
     
    return this.http.get('http://127.0.0.1:5000/GetRCA')
  }
  post_comments_service(bugid:string,comments:string){
   
     
    return this.http.get('http://127.0.0.1:5000/PostComments/'+bugid+'/'+comments,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  post_rca_comments_service(bugid:string,rca_category:string,rca_bug_reason:string,rca_comments:string){
   
     
    return this.http.get('http://127.0.0.1:5000/PostRCA_Data/'+bugid+'/'+rca_category+'/'+rca_bug_reason+'/'+rca_comments,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

}
