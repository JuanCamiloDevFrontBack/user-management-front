import { HttpBackend, HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { LoginI } from '../../interfaces/login/login.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserConnectService {

  private api = `${environment.API}login`;

  constructor(
    private readonly http: HttpClient,
    private readonly httpB: HttpClient,
    protected readonly backend: HttpBackend) {
    httpB = new HttpClient(backend);
  }

  loginUserHttp(infoUser: LoginI<string>): Observable<unknown> {
    return this.http.post<unknown>(this.api, infoUser)
      .pipe(
        map(res => res),
        catchError(err => { throw { err } }));
  }

  /* TODO: los siguientes métodos se dejan a modo de ejemplo y aprendizaje. */
  loginUserHttpBackend(infoUser: LoginI<string>): Observable<unknown> {
    // TODO: si existen interceptores, esta petición no va a pasar por ellos.
    return this.httpB.post<unknown>(this.api, infoUser);
  }

  /* TODO:
  aunque 'fetch' funcione correctamente y se pueda utilizar sin problemas, es mucho
  más recomendable utilizar el módulo de HttpClient ya que es propio de angular
  y así evitar algún que otro error o comportamiento no deseado. 
  */
  loginUserHttpFetch(infoUser: LoginI<string>): Promise<unknown> {
    const req = { method: 'POST', body: JSON.stringify(infoUser) };
    return fetch(this.api, req)
      .then(res => res.json())
      .then(res => res)
      .catch(err => err)
  }

}
