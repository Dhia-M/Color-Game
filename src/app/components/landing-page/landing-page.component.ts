import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-landing-page',
  imports: [FormsModule,CommonModule,HttpClientModule],
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  email = '';
  password = '';
  emailError: string | null = null;
  passwordError: string | null = null;
  invalidCredentialsError: string | null = null;


  constructor(private authService: AuthService, private router: Router) {}

  validateEmail(email: string): boolean {
    const [name, domain] = email.split('@');
    return name?.length > 5 && domain?.includes('.');
  }

  validatePassword(password: string): boolean {
    return password.length > 6 && /\d/.test(password);
  }

  onSubmit() {
    this.emailError = null;
    this.passwordError = null;

    if (!this.email) {
      this.emailError = 'Email is required';
    } else {
      const emailName = this.email.split('@')[0];
      if (emailName.length < 6) {
        this.emailError = 'Email name must be longer than 6 characters';
      }
      else if (!this.validateEmail(this.email)) {
        this.emailError = 'Invalid email format';
      }
    }

    if (!this.password) {
      this.passwordError = 'Password is required';
    } else if (this.password.length <= 6) {
      this.passwordError = 'Password must be longer than 6 characters';
    }
     else if (!this.validatePassword(this.password)) {
      this.passwordError = 'Password must include a number';
    }

    if (!this.emailError && !this.passwordError) {
      const isAuthenticated = this.authService.login(this.email, this.password);
      if (isAuthenticated) {
        this.router.navigate(['/game']);
      } else {
        this.invalidCredentialsError = 'Invalid credentials';
      }
    }

  }
  navigateToRegister() {
    this.router.navigate(['/register']); 
  }

}
