import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {
    console.log("hello world");
    console.log(this.loggedIn.getValue());
    if(sessionStorage.getItem("user")){
      this.loggedIn.next(true);
      this.user.next(sessionStorage.getItem("user"));
    }
   }

  loggedIn = new BehaviorSubject<boolean>(false);
  user = new BehaviorSubject<any>({});

  public authenticate(username:any, password:any){
    let url="http://localhost:8080/users/login";
    let params = new HttpParams();
    params = params.append("username",username);
    params = params.append("password",password);
    return this.http.get(url,{params: params});
  }

  isLoggedIn(): boolean {
    console.log(this.loggedIn.getValue())
    return this.loggedIn.getValue();
  }
}
