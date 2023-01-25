import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  router: string;

  constructor(public _router: Router){
    this.router = _router.url;
  }

  public loginValid = true;
  public username = '';
  public password = '';

  private _destroySub$ = new Subject<void>();

  // ngOnInit(){
  //   console.log("im in")
  //   let navigationDetails:string[] = ["/home"];
  //   this._router.navigate(navigationDetails);
  // }

  public onSubmit(){
    let navigationDetails:string[] = ["/home"];
    this._router.navigate(navigationDetails);
  }

}