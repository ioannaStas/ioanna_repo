import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from '../shared/flight-service.service';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.scss']
})
export class PageMenuComponent {

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
    ["Book a Flight","../../assets/air-india-portable-oxygen-concentrator-policy.jpg","You can see the flight by clicking here","Destination","ex. ATH","destination"],
    ["See my Tickets","../../assets/istockphoto-1285337858-612x612.jpg","You can book a ticket by clicking here","id","4","ticketid"],
    ["Check profile","../../assets/istockphoto-1356417207-612x612.jpg","You can see your profile info by clicking here","Username","death","username"]
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

  public submitInput(i:any){
    if(i==0){
      this.flightService.getFlightByDestination(this.form.controls['destination'].value).subscribe(result=>{
        this.ticketResult = result;
        console.log(this.ticketResult);
      })
    }
  }

}
