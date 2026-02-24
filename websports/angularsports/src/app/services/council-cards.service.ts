import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CouncilCard {
  _id?: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  imageUrl?: string;
  bio?: string;
  order?: number;
  instagramUrl?: string;
  linkedinUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class CouncilCardsService {
  private apiUrl = '/api/council-cards';

  constructor(private http: HttpClient) {}

  list(): Observable<CouncilCard[]> { return this.http.get<CouncilCard[]>(this.apiUrl); }
  create(card: CouncilCard): Observable<CouncilCard> { return this.http.post<CouncilCard>(this.apiUrl, card); }
  update(id: string, card: Partial<CouncilCard>): Observable<CouncilCard> { return this.http.put<CouncilCard>(`${this.apiUrl}/${id}`, card); }
  delete(id: string): Observable<any> { return this.http.delete(`${this.apiUrl}/${id}`); }
}
