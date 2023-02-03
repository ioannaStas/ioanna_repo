import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/shared/ticket.service';

@Component({
  selector: 'app-ticket-menu',
  templateUrl: './ticket-menu.component.html',
  styleUrls: ['./ticket-menu.component.scss']
})
export class TicketMenuComponent {

  form:any;
  hasError:boolean = false;
  errorMessage:string = "";

  constructor(private fb: FormBuilder,
    private _router : Router,
    private ticketService: TicketService){}

  ngOnInit(){
    this.form = this.fb.group({
      ticketNumber:[]
    })
  }
 
  public checkValidity(){
    this.hasError = false;
    if(this.form.controls["ticketNumber"].value.trim() === null 
      || this.form.controls["ticketNumber"].value.trim() === ''
      || this.form.controls["ticketNumber"].value.trim().length > 20
      || ! /^[0-9]+$/.test(this.form.controls["ticketNumber"].value)){
        this.errorMessage="Insert a correct ticket number";
        this.hasError = true;
      } else {
        this.rerouteToTicket();
      }
  }
  public rerouteToTicket(){
      this.ticketService.getTicketById(this.form.controls["ticketNumber"].value).subscribe(result =>{
        let navigationDetails:string[] = ["/tickets"];
        this.ticketService.ticket.next(result);
        this._router.navigate(navigationDetails);
    });
  }

}