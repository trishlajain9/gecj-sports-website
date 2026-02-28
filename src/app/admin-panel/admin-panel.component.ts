import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CouncilCardsService, CouncilCard } from '../services/council-cards.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule]
})
export class AdminComponent {
  loginForm: FormGroup;
  loginError: string | null = null;
  isSubmitting = false;

  isLoggedIn = false;

  // Council management moved to dedicated page

  constructor(private fb: FormBuilder, private authService: AuthService, private councilSvc: CouncilCardsService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isLoggedIn = !!localStorage.getItem('jwt_token');
  // management happens in /admin/council page
    }
    // Ping backend for clearer diagnostics
    this.authService.ping().subscribe({
      next: () => {},
      error: () => {
        this.loginError = 'Backend not reachable on /api. Ensure backend is running on http://localhost:3000.';
      }
    });
  }

  onSubmit() {
    this.loginError = null;
    if (this.loginForm.invalid) {
      this.loginError = 'Please enter both username and password.';
      return;
    }
    this.isSubmitting = true;
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe({
      next: (res) => {
        localStorage.setItem('jwt_token', res.token);
        this.isSubmitting = false;
        this.isLoggedIn = true;
        this.loginForm.reset();
  // management happens in /admin/council page
      },
      error: (err) => {
        if (err?.status === 0) {
          this.loginError = 'Cannot reach backend. Please start the backend server.';
        } else if (err?.status === 401) {
          this.loginError = 'Invalid credentials';
        } else {
          this.loginError = err?.error?.message || 'Login failed';
        }
        this.isSubmitting = false;
      }
    });
  }

  logout() {
    localStorage.removeItem('jwt_token');
    this.isLoggedIn = false;
  }

}