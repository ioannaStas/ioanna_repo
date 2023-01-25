import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TicketMenuComponent } from './ticket-menu/ticket-menu.component';
import { FlightMenuComponent } from './flight-menu/flight-menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    TicketMenuComponent,
    FlightMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TicketMenuComponent,
    FlightMenuComponent,
    HomeComponent
  ]
})
export class HomeModule { }