import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUserI } from '../../interfaces/login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class UserConnectService {

  private api = '';

  constructor(private http: HttpClient) { }

  loginUserHttp(infoUser: LoginUserI): Observable<any> {
    return this.http.post<any>(this.api, infoUser);
  }

}
