import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  baseServerUrl = "https://localhost:44308/api/"

  RegisterUser(user: Array<String>){
    return this.http.post(this.baseServerUrl+"User/CreateUser",{
      Fname : user[0],
      Lname : user[1],
      Empid : user[2]
    },{
      responseType:'text'
    });
  }
}
