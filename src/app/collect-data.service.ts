import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {MessageService} from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class CollectDataService {
  sprint: any;
  constructor(private http: HttpClient) { }

   
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

 
  collect_get_valid_qa_bugs(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/get_valid_qa_bugs/'+sprint)
  }

  collect_bdd_uat_charts_data(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/get_charts_uat/'+sprint)
  }
  collect_not_valid_bugs_chart_data(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/get_invalid_bugs_bdd_covered/'+sprint)
  }
  collect_product_wise_chart_data(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/GetProductwise/'+sprint)
  }
  collect_priority_bugs_chart(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/GetPriorityBugs/'+sprint)
  }
  collect_priority_GetQA_NonQA_Charts(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/GetQA_NonQA/'+sprint)
  }
  collect_RCA(sprint:string,team:string){
     
    return this.http.get('http://127.0.0.1:5000/GetRCA/'+sprint+'/'+team)
  }

  collect_RCA_pie_chart_data(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/GetRCA_Pie_Data/'+sprint)
  }
  collect_RCA_how_bug_foundchart_data(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/GetRCA_bug_found_Pie_Data/'+sprint)
  }
  collect_RCA_bug_identification_phase_chart_data(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/GetRCA_bug_identification_phase_pie_Data/'+sprint)
  }

  get_vsts_data(sprint:string,start_date:String,end_date:String){
   
     
    return this.http.get('http://127.0.0.1:5000/Get_vsts_data/'+sprint+'/'+start_date+'/'+end_date,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }
  search_data(sprint:string,start_date:String,end_date:String){
   
     
    return this.http.get('http://127.0.0.1:5000/search_data/'+sprint+'/'+start_date+'/'+end_date,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }
  collect_bdd_data(sprint:string,report:string){
     
    return this.http.get('http://127.0.0.1:5000/GetBDDBugs/'+sprint+'/'+report)
  }
  collect_not_valid_qa_bugs_data(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/get_not_valid_data/'+sprint)
  }

  collect_qa_bugs_summary_report(sprint:string){
     
    return this.http.get('http://127.0.0.1:5000/get_qa_bugs_summary_report/'+sprint)
  }
  search_bugs_summary(sprint:string,team:string){
   
     
    return this.http.get('http://127.0.0.1:5000/bugs_summary/'+sprint+'/'+team,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  get_bugs_percentage(sprint:string,team:string){
   
     
    return this.http.get('http://127.0.0.1:5000/bugs_percentage/'+sprint+'/'+team,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  get_pm_other_bugs_data(sprint:string,team:string){
   
     
    return this.http.get('http://127.0.0.1:5000/pm_other_bugs/'+sprint+'/'+team,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  get_qa_fixed_bugs_data(sprint:string,team:string){
   
     
    return this.http.get('http://127.0.0.1:5000/get_qa_bugs_fixed/'+sprint+'/'+team,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
  }

  get_qa_non_fixed_bugs_data(sprint:string,team:string){
   
    return this.http.get('http://127.0.0.1:5000/qa_non_fixed/'+sprint+'/'+team,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
  }
  get_team_roles_db(team){
  
    return this.http.get('http://127.0.0.1:5000/get_db_roles_data/'+team,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
  }
  update_main_table_service(){
   
     
    return this.http.get('http://127.0.0.1:5000/update_main_table')
    
    
  }
  post_comments_service(bugid:string,comments:string){
   
     
    return this.http.get('http://127.0.0.1:5000/PostComments/'+bugid+'/'+comments,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  post_rca_comments_service(bugid:string,rca_category:string,rca_bug_found:string,rca_bug_identification_phase:string,rca_comments:string){
   
     
    return this.http.get('http://127.0.0.1:5000/PostRCA_Data/'+bugid+'/'+rca_category+'/'+rca_bug_found+'/'+rca_bug_identification_phase+'/'+rca_comments,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  collect_teams(){
     
    return this.http.get('http://127.0.0.1:5000/get_teams',{headers:new HttpHeaders().set('Content-Type','application/json')})
  }

  collect_iterations(){
     
    return this.http.get('http://127.0.0.1:5000/get_iterations',{headers:new HttpHeaders().set('Content-Type','application/json')})
  }

  collect_iterations_all(){
     
    return this.http.get('http://127.0.0.1:5000/get_iterations_all',{headers:new HttpHeaders().set('Content-Type','application/json')})
  }


  update_team_roles(role:string,name:string,team:string){
   
     
    return this.http.get('http://127.0.0.1:5000/update_team_roles/'+role+'/'+name+'/'+team,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  delete_team_member(name:string){
   
     
    return this.http.get('http://127.0.0.1:5000/delete_member/'+name,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }
  get_sprint_comparison(sprint1:string,sprint2:string){
   
     
    return this.http.get('http://127.0.0.1:5000/get_qa_bugs_rate_sprint_wise/'+sprint1+'/'+sprint2,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  get_sprints(sprint_types:string){
   
     
    return this.http.get('http://127.0.0.1:5000/insert_iterations/'+sprint_types,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  set_current(sprint_types:string){
   
     
    return this.http.get('http://127.0.0.1:5000/set_current/'+sprint_types,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  
  remove_current(sprint_types:string){
   
     
    return this.http.get('http://127.0.0.1:5000/remove_current/'+sprint_types,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }



  insert_sprint(sprint:string,start_date:string,end_date:string){
   
     
    return this.http.get('http://127.0.0.1:5000/insert_sprints_data/'+sprint+'/'+start_date+'/'+end_date,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }

  update_sprints(sprint:string,start_date:string,end_date:string){
   
     console.log("working")
    return this.http.get('http://127.0.0.1:5000/update_sprint/'+sprint+'/'+start_date+'/'+end_date,{headers:new HttpHeaders().set('Content-Type','application/json')})
    
    
     
    
  }
}
