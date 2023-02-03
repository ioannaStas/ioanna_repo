import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from '../shared/flight-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  form:any = new FormGroup({
    destination: new FormControl(),
    username: new FormControl(),
    ticketid: new FormControl()
  });;
  ticketResult:any;
  showTicketField:boolean = false;
  showFlightField:boolean = false;
  showUserField:boolean = false;
  
  cards:any = [
    ["Check out our flight options","../../assets/flightphoto.jpg","You can see the flight by clicking here","Destination","ex. ATH","destination"],
    ["Check out your tickets","../../assets/flighttickets.jpg","You can book a ticket by clicking here","id","4","ticketid"],
    ["Check out your profile","../../assets/profileicon.jpg","You can see your profile info by clicking here","Username","death","username"]
  ];
 
  public constructor(private formBuilder: FormBuilder, 
    private flightService:FlightServiceService) {}

  public showInputField(i:any){
    if(i===0){
      this.showFlightField = !this.showFlightField;
      this.showTicketField = false;
      this.showUserField = false;
    } else if(i===1){
      this.showTicketField = !this.showTicketField;
      this.showFlightField = false;
      this.showUserField = false;
    } else {
      this.showUserField = !this.showUserField;
      this.showTicketField = false;
      this.showFlightField = false;
    }
  }

  public checkInputField(i:any){
    if(i===0){
      return this.showFlightField;
    } else if(i===1){
      return this.showTicketField;
    }
    return this.showUserField;
  }

}
