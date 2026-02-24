import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewsService, NewsItem } from '../services/news.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-news-admin',
  standalone: true,
  template: `
    <section class="admin-login-card" style="max-width:820px;margin:2rem auto">
      <h1 class="admin-login-title" style="margin-bottom:0.5rem">Latest News & Updates</h1>
      <a routerLink="/admin" class="admin-login-btn" style="display:inline-block;width:auto;padding:8px 14px;margin-bottom:1rem">← Back to Admin</a>

      <div *ngIf="loading">Loading...</div>
      <div *ngIf="error" class="admin-login-error">{{ error }}</div>
      <ul>
        <li *ngFor="let n of items">
          <strong>{{ n.order || 0 }}.</strong> {{ n.title }} — {{ n.date || 'No date' }}
          <button class="admin-login-btn" style="padding:6px 10px;margin-left:8px" (click)="edit(n)">Edit</button>
          <button class="admin-login-btn" style="padding:6px 10px;margin-left:6px;background:#c0392b" (click)="remove(n._id!)">Delete</button>
        </li>
      </ul>

      <form [formGroup]="form" (ngSubmit)="save()" style="margin-top:0.8rem">
        <input class="admin-login-input" placeholder="Title" formControlName="title" />
        <input class="admin-login-input" placeholder="Date (e.g., 2025-08-25)" formControlName="date" />
        <input class="admin-login-input" placeholder="Image URL" formControlName="imageUrl" />
        <input class="admin-login-input" placeholder="Order" type="number" formControlName="order" />
        <textarea class="admin-login-input" placeholder="Description" formControlName="desc"></textarea>
        <button class="admin-login-btn" type="submit" [disabled]="saving">{{ saving ? (editingId ? 'Updating...' : 'Adding...') : (editingId ? 'Update' : 'Add') }} News Item</button>
      </form>
    </section>
  `,
  styleUrls: ['./admin-panel.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class NewsAdminComponent {
  items: NewsItem[] = [];
  form: FormGroup;
  loading = false;
  error: string | null = null;
  editingId: string | null = null;
  saving = false;

  private isBrowser = false;
  constructor(private fb: FormBuilder, private svc: NewsService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.form = this.fb.group({
      title: ['', Validators.required], date: [''], imageUrl: [''], order: [0], desc: ['']
    });
  }

  ngOnInit() { if (this.isBrowser) this.load(); }

  load() {
    this.loading = true; this.error = null;
    this.svc.list().subscribe({
      next: (items) => { this.items = items; this.loading = false; },
      error: (err) => { this.error = this.httpError(err, 'Failed to load'); this.loading = false; }
    });
  }
  edit(n: NewsItem) {
    this.editingId = n._id || null;
    this.form.patchValue({ title: n.title, date: n.date || '', imageUrl: n.imageUrl || '', order: n.order || 0, desc: n.desc || '' });
  }
  save() {
    if (this.form.invalid) { this.error = 'Title is required'; return; }
    this.error = null; this.saving = true;
    const payload = { ...this.form.value } as NewsItem;
    const done = () => this.saving = false;
    if (this.editingId) {
      this.svc.update(this.editingId, payload).subscribe({
        next: () => { this.editingId = null; this.form.reset({ order: 0 }); this.load(); done(); },
        error: (err) => { this.error = this.httpError(err, 'Failed to update'); done(); }
      });
    } else {
      this.svc.create(payload).subscribe({
        next: () => { this.form.reset({ order: 0 }); this.load(); done(); },
        error: (err) => { this.error = this.httpError(err, 'Failed to add'); done(); }
      });
    }
  }
  remove(id: string) {
    if (!confirm('Delete this news item?')) return;
    this.svc.delete(id).subscribe({ next: () => this.load(), error: (err) => { this.error = this.httpError(err, 'Failed to delete'); } });
  }
  httpError(err: any, fallback: string) {
    const msg = err?.error?.message || err?.message || fallback;
    if (err?.status === 401 || err?.status === 403) return 'Unauthorized. Please login again in Admin.';
    return msg;
  }
}
