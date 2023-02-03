import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ticket = new BehaviorSubject<any>({});
  url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getTicketById(id:any){
    let params = new HttpParams();
    params = params.append("id",id);
    let fullUrl = this.url + "/tickets";
    return this.http.get(fullUrl,{params: params});
  }

  public checkIn(ticketId:any){
    let body = {
      "id":ticketId,
      "checkedIn":true
    }
    let fullUrl = this.url + "/tickets/checkin";
    return this.http.post(fullUrl,body);
  }

}
