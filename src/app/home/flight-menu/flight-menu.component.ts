import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from 'src/app/shared/flight-service.service';

@Component({
  selector: 'app-flight-menu',
  templateUrl: './flight-menu.component.html',
  styleUrls: ['./flight-menu.component.scss']
})
export class FlightMenuComponent {

  hasError:boolean = false;
  form:any;
  errorMessage:string = "";

  constructor(private fb: FormBuilder,
    private flightService: FlightServiceService){}

  ngOnInit(){
    this.form = this.fb.group({
      from:[''],
      to:['']
    })
  }


  public checkFlights(){
    this.flightService.getFlights(this.form.controls["from"].value, this.form.controls["to"].value).subscribe(result=>{
      console.log(result);
    });
  }

  public checkValidity(){
    this.hasError = false;
    if((this.form.controls["from"].value.trim() === null || this.form.controls["from"].value.trim() === '' || this.form.controls["from"].value.trim().length !=3) ||
    (this.form.controls["to"].value.trim() === null || this.form.controls["to"].value.trim() === '' || this.form.controls["to"].value.trim().length !=3)){
      this.errorMessage="Insert the correct Values";
      this.hasError = true;
    }else{
      this.checkFlights();
    }
  }

}
