
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const params = new HttpParams().set('email', email).set('password', password);
    return this.http.post(`${this.apiUrl}/login`, null, { params: params, headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  register(email: string, password: string, username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password, username });
  }
}
