import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Adjust path to auth.service.ts
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landing-page',
  imports: [FormsModule,CommonModule], // Add FormsModule

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

    // Check if email is empty
    if (!this.email) {
      this.emailError = 'Email is required';
    } else {
      // Check if the name part (before @) is longer than 6 characters
      const emailName = this.email.split('@')[0];  // Get the part before '@'
      if (emailName.length < 6) {
        this.emailError = 'Email name must be longer than 6 characters';
      }
      // Check if email format is valid (only after the length check)
      else if (!this.validateEmail(this.email)) {
        this.emailError = 'Invalid email format';
      }
    }

    // Check if password is empty
    if (!this.password) {
      this.passwordError = 'Password is required';
    } else if (this.password.length <= 6) {
      this.passwordError = 'Password must be longer than 6 characters';
    }
     else if (!this.validatePassword(this.password)) {
      this.passwordError = 'Password must include a number';
    }

    // If no errors, proceed with login
    if (!this.emailError && !this.passwordError) {
      const isAuthenticated = this.authService.login(this.email, this.password);
      if (isAuthenticated) {
        this.router.navigate(['/game']);
      } else {
        this.invalidCredentialsError = 'Invalid credentials';  // Set the invalid credentials error
      }
    }
  }

}
