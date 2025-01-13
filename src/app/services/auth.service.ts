import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [{ email: 'adminn@example.com', password: 'admin123' }];

  login(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password);
  }
}
