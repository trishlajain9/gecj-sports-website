import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EventTimeline {
  _id?: string;
  title: string;
  date: string;
  time?: string;
  description: string;
  imageUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class EventTimelinesService {
  private apiUrl = '/api/event-timelines';

  constructor(private http: HttpClient) {}

  getEventTimelines(): Observable<EventTimeline[]> {
    return this.http.get<EventTimeline[]>(this.apiUrl);
  }

  addEventTimeline(event: EventTimeline): Observable<EventTimeline> {
    return this.http.post<EventTimeline>(this.apiUrl, event);
  }

  updateEventTimeline(id: string, event: EventTimeline): Observable<EventTimeline> {
    return this.http.put<EventTimeline>(`${this.apiUrl}/${id}`, event);
  }

  deleteEventTimeline(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
