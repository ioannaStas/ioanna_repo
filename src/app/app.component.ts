import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public _router: Router,
    private fb: FormBuilder,
    private loginService:LoginService){}

    form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  username:any = "";
  password:any = "";

  public loginValid = true;
  error:boolean = false;
  user:any = {};

  ngOnInit(){
  }

  public onSubmit(){
    this.loginService.authenticate(this.form.controls.username.value,this.form.controls.password.value).subscribe({
      next :(result) => {
        this.loginService.loggedIn.next(true)
        this.loginService.user.next(result);
        this.error = false;
        sessionStorage.setItem("user", JSON.stringify(this.loginService.user.getValue()));
        sessionStorage.setItem("isLoggedIn", "true");
        let navigationDetails:string[] = ["/home"];
        this._router.navigate(navigationDetails);
      }, 
      error :() => {
        this.error = true;
      }
      });
  }

}