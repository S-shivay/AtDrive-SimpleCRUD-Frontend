import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent {
  userData: any = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.userData).subscribe(
      () => {
        this.router.navigate(['/login']); 
      },
      (error) => {
        alert('Registration failed');
      }
    );
  }
}
