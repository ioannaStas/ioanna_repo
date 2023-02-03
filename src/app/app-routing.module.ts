import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './home/flight/flight.component';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './home/ticket/ticket.component';
import { UserComponent } from './home/user/user.component';
import { LoginGuard } from './shared/login.guard';
import { LoginService } from './shared/login.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'flights', component: FlightComponent, canActivate: [LoginGuard]},
  {path: 'users', component: UserComponent, canActivate: [LoginGuard] },
  {path: 'tickets', component: TicketComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginService, LoginGuard],
})
export class AppRoutingModule { }
