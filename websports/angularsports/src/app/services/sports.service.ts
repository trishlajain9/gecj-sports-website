import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Sport {
  _id?: string;
  name: string; // slug
  displayName: string;
  description?: string;
  mainImageUrl?: string;
  gallery?: string[];
  tags?: string[];
  featured?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SportsService {
  private base = '/api/sports';
  constructor(private http: HttpClient) {}

  list(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.base);
  }
  slugs(): Observable<string[]> { return this.http.get<string[]>(`${this.base}/slugs`); }
  getByName(name: string): Observable<Sport> { return this.http.get<Sport>(`${this.base}/${name}`); }
  create(sport: Partial<Sport>): Observable<Sport> { return this.http.post<Sport>(this.base, sport); }
  update(id: string, sport: Partial<Sport>): Observable<Sport> { return this.http.put<Sport>(`${this.base}/${id}`, sport); }
  delete(id: string): Observable<any> { return this.http.delete(`${this.base}/${id}`); }
}
