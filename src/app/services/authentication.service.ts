import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public messager = new Subject<boolean>();
  private urlApi: string;
  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  
  public registerUser(username: string, password: string) {
    const body = {
      "email": username,
      "password": password
    }
    return this.http.post(`${this.urlApi}/api/auth/register`, body);
  }
  public logUser(username: string, password: string) {
    const body = {
      "username": username,
      "password": password
    };
    return this.http.post(`${this.urlApi}/users/sign-in`, body);
  }
  getUserInfo() {
    const token = localStorage.getItem("token");

    return this.http.get(`${this.urlApi}/api/auth/current`,
      { headers: { Authorization: `Bearer ${token}` } })
  }
}
