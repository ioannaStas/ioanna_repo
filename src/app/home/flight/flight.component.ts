import { Component } from '@angular/core';
import { FlightServiceService } from 'src/app/shared/flight-service.service';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent {

  flights:any[] = [];
  bookedFlight:any = false;

  tiles:any = [
    { cols: 4, rows: 1, color: 'rgb(190, 171, 255)' },
    { cols: 3, rows: 1, color: 'rgb(190, 171, 255)' },
    { cols: 1, rows: 1, color: 'rgb(190, 171, 255)' },
  ];

  departureTimes:any[] = [];
  arrivalTimes:any[] = [];

  constructor(private flightService: FlightServiceService){}

  ngOnInit(){
    this.flightService.subject.subscribe(res => {
      this.flights = res;
      console.log(this.flights)
      for (let i=0; i<this.flights.length; i++){
        let departureTime = String(this.flights[i].departureTime).substring(0,2) + ":" + String(this.flights[i].departureTime).substring(2,4);
        let arrivalTime = String(this.flights[i].arrivalTime).substring(0,2) + ":" + String(this.flights[i].arrivalTime).substring(2,4);
        this.arrivalTimes.push(arrivalTime);
        this.departureTimes.push(departureTime);
      }
    });
  }

  public bookTicket(i:any){
    let characters = 'ABCDEF';
    let row = characters.charAt(Math.floor(Math.random() * characters.length));
    let seatNumber = Math.floor(Math.random() * 20 + 10);
    this.flightService.bookTicket(this.flights[i].id, seatNumber + "-" + row).subscribe(result => {
      this.bookedFlight = true;
      setTimeout(() => {
        this.bookedFlight = false;
      },4000);
    });
  }

}
