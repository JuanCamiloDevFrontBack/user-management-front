import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../../interfaces/login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class UserConnectService {

  private api = '';

  constructor(private http: HttpClient) { }

  loginUserHttp(infoUser: LoginI<string>): Observable<unknown> {
    return this.http.post<unknown>(this.api, infoUser);
  }

}
