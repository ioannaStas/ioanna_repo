import { Component } from '@angular/core';
import { TicketService } from 'src/app/shared/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  constructor(private ticketService: TicketService){}

  ticket:any = null;
  dataToPresent:any[] = [];

  ngOnInit(){
    this.ticketService.ticket.subscribe(res => {
      if(Object.keys(res).length>0){
        this.ticket = res;
        console.log(this.ticket)
      }
    });
  }

  public checkIn(){
    this.ticket.checkedIn = true;
    this.ticketService.checkIn(this.ticket.id).subscribe(result => {
      console.log(result);
    })
  }

}
