import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NewsItem {
  _id?: string;
  title: string;
  date?: string;
  desc?: string;
  imageUrl?: string;
  order?: number;
}

@Injectable({ providedIn: 'root' })
export class NewsService {
  private apiUrl = '/api/news';
  constructor(private http: HttpClient) {}
  list(): Observable<NewsItem[]> { return this.http.get<NewsItem[]>(this.apiUrl); }
  create(item: NewsItem): Observable<NewsItem> { return this.http.post<NewsItem>(this.apiUrl, item); }
  update(id: string, item: Partial<NewsItem>): Observable<NewsItem> { return this.http.put<NewsItem>(`${this.apiUrl}/${id}`, item); }
  delete(id: string): Observable<any> { return this.http.delete(`${this.apiUrl}/${id}`); }
}
