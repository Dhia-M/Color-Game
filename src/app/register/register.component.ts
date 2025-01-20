import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule], // Add FormsModule
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  onRegister() {
    console.log('User registered:', {
      username: this.username,
      email: this.email,
      password: this.password,
    });
  }

}
