import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})  

export class UserMenuComponent {



  constructor(public _router: Router,
    private userService:UserService,
    private loginService: LoginService){}

  public rerouteToUser(){
    let userString = sessionStorage.getItem("user");
    if(userString!==null){
      let user = JSON.parse(userString);
      this.userService.getAllUserTickets(user.id).subscribe(res => {
        this.userService.userSubject.next(res);
        let navigationDetails:string[] = ["/users"];
        this._router.navigate(navigationDetails);
      });
    }
  }

}
