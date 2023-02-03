import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private userService: UserService){}

  tickets:any[]=[];
  arrivalTimes:any[]=[];
  departureTimes:any[]=[];
  regularDistribution = 100 / 3;

  ngOnInit(){
    this.userService.userSubject.subscribe(res => {
      this.tickets = res;
      for (let i=0; i<this.tickets.length; i++){
        let departureTime = String(this.tickets[i].flight.departureTime).substring(0,2) + ":" + String(this.tickets[i].flight.departureTime).substring(2,4);
        let arrivalTime = String(this.tickets[i].flight.arrivalTime).substring(0,2) + ":" + String(this.tickets[i].flight.arrivalTime).substring(2,4);
        this.arrivalTimes.push(arrivalTime);
        this.departureTimes.push(departureTime);
      }
    });
  }

}
