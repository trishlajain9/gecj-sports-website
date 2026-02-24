
import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { EventTimelinesService, EventTimeline } from '../services/event-timelines.service';

@Component({
  selector: 'app-events-timeline',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule],
  templateUrl: './event-timelines.component.html',
  styleUrls: ['./event-timelines.component.css']
})
export class EventsTimelineComponent implements OnInit {
  timelines: EventTimeline[] = [];
  isAdmin = false;
  private isBrowser = false;
  newTimeline: EventTimeline = { title: '', date: '', description: '', imageUrl: '', time: '' };
  editTimeline: EventTimeline = { title: '', date: '', description: '', imageUrl: '', time: '' };
  editTimelineId: string | null = null;

  // Grouped view state
  groupedMap: Record<string, EventTimeline[]> = {};
  groupedDates: string[] = [];

  constructor(private eventTimelinesService: EventTimelinesService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.isAdmin = !!localStorage.getItem('jwt_token');
      this.loadTimelines();
    }
  }

  loadTimelines() {
    this.eventTimelinesService.getEventTimelines().subscribe({
      next: (data) => {
        this.timelines = data || [];
        this.computeGroups();
      },
      error: () => (this.timelines = [])
    });
  }

  private computeGroups() {
    // Group events by date string (YYYY-MM-DD)
    const map: Record<string, EventTimeline[]> = {};
    for (const ev of this.timelines) {
      const d = (ev.date || '').trim();
      if (!map[d]) map[d] = [];
      map[d].push(ev);
    }
    // Sort dates ascending
    const dates = Object.keys(map).sort();
    // Within each date, keep original order
    this.groupedMap = map;
    this.groupedDates = dates;
  }

  addTimeline() {
    if (!this.newTimeline.title || !this.newTimeline.date) return;
    this.eventTimelinesService.addEventTimeline(this.newTimeline).subscribe({
      next: () => {
        this.newTimeline = { title: '', date: '', description: '', imageUrl: '', time: '' };
  this.loadTimelines();
      }
    });
  }

  enableEditTimeline(timeline: EventTimeline) {
    this.editTimelineId = timeline._id || null;
    this.editTimeline = { ...timeline };
  }

  saveEditTimeline(id: string | undefined) {
    if (!id) return;
    this.eventTimelinesService.updateEventTimeline(id, this.editTimeline).subscribe({
      next: () => {
        this.editTimelineId = null;
        this.editTimeline = { title: '', date: '', description: '', imageUrl: '' };
  this.loadTimelines();
      }
    });
  }

  cancelEditTimeline() {
    this.editTimelineId = null;
    this.editTimeline = { title: '', date: '', description: '', imageUrl: '' };
  }

  deleteTimeline(id: string | undefined) {
    if (!id) return;
    this.eventTimelinesService.deleteEventTimeline(id).subscribe({
      next: () => this.loadTimelines()
    });
  }

  trackByDate(index: number, date: string) {
    return date;
  }

  trackByEvent(index: number, ev: EventTimeline) {
    return (ev as any)._id || ev.title;
  }
}
