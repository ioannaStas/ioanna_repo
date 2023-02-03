import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TicketMenuComponent } from './ticket-menu/ticket-menu.component';
import { FlightMenuComponent } from './flight-menu/flight-menu.component';
import { HomeComponent } from './home.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { LoginService } from '../shared/login.service';

@NgModule({
  declarations: [
    HomeComponent,
    TicketMenuComponent,
    FlightMenuComponent,
    UserMenuComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    TicketMenuComponent,
    FlightMenuComponent,
    UserMenuComponent,
    HomeComponent
  ]
})
export class HomeModule { }