import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FlightComponent } from './home/flight/flight.component';
import { TicketComponent } from './home/ticket/ticket.component';
import { UserComponent } from './home/user/user.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    TicketComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
