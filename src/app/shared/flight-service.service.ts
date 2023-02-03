import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8080";

  subject = new BehaviorSubject<any>([]);

  public getFlightByDestination(destination:any){
    let params = new HttpParams();
    params = params.append("destination",destination);
    let fullUrl = this.url + "/flights/destination";
    return this.http.get(fullUrl,{params: params});
  }

  public getFlights(fromDeparture:any, toDestination:any){
    let params = new HttpParams();
    params = params.append("fromDeparture",fromDeparture);
    params = params.append("toDestination",toDestination);
    let fullUrl = this.url + "/flights/getByAirports";
    return this.http.get(fullUrl,{params: params});
  }

  public bookTicket(flightId:any, seat:any){
    let ticket = {
      "seat":seat,
      "checkedIn":false,
      "flight":{
        "id":flightId
      },
      "user":{
        "id":3
      }
    }
    let fullUrl = this.url + "/tickets/ticket";
    return this.http.post(fullUrl,ticket);
  }

}
