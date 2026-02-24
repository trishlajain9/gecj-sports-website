import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = '/api/admin'; // dev proxy targets http://localhost:3000

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password });
  }

  // Lightweight backend health check
  ping(): Observable<{ status: string; time: string }> {
    return this.http.get<{ status: string; time: string }>(`/api/health`);
  }
}
