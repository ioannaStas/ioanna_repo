import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8080";
  userSubject = new BehaviorSubject<any>([]);

  public getAllUserTickets(userId:any){
    let params = new HttpParams();
    params = params.append("userId",userId);
    let fullUrl = this.url + "/tickets/getAll";
    return this.http.get(fullUrl,{params:params})
  }

}
