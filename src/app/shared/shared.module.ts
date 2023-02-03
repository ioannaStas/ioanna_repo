import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FlightComponent } from '../home/flight/flight.component';
import { TicketComponent } from '../home/ticket/ticket.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserComponent } from '../home/user/user.component';
import { LoginService } from './login.service';


@NgModule({
    declarations: [
        HeaderComponent,
        FlightComponent,
        TicketComponent,
        UserComponent
    ],
    exports: [
        HeaderComponent,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        CommonModule,
        MatMenuModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatOptionModule,
        HttpClientModule,
        FlightComponent,
        TicketComponent,
        FlexLayoutModule,
        UserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        CommonModule,
        MatMenuModule,
        MatCardModule,
        MatOptionModule,
        HttpClientModule,
        MatGridListModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ]
})
export class SharedModule { }
