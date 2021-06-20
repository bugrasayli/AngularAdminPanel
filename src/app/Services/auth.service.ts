import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../Model/login';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private Url = '';
  Login(login : login): Observable<any> {
    return this.http.get(this.Url,);
  }
  Register(user : User) : Observable<any>{
    return this.http.post(this.Url,user);
  }
}
