import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8080";

  public getFlightByDestination(destination:any){
    let params = new HttpParams();
    params = params.append("destination",destination);
    let fullUrl = this.url + "/flights/destination";
    return this.http.get(fullUrl,{params: params});
  }

}
