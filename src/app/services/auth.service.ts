import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:3000/users'; 

  constructor(private http: HttpClient) {}

  login(userData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, userData);
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, userData);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
    
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
