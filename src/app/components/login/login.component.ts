import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
  userData: any = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.userData).subscribe(
      (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token); 
          this.router.navigate(['/']); 
        } else {
          alert('Login failed: No token received');
        } 
      },
      (error) => {
        alert('Invalid credentials');
      }
    );
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
