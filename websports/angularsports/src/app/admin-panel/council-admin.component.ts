import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CouncilCardsService, CouncilCard } from '../services/council-cards.service';

@Component({
  selector: 'app-council-admin',
  standalone: true,
  template: `
    <section class="admin-login-card" style="max-width:820px;margin:2rem auto">
      <h1 class="admin-login-title" style="margin-bottom:0.5rem">Discover the Council</h1>
      <a routerLink="/admin" class="admin-login-btn" style="display:inline-block;width:auto;padding:8px 14px;margin-bottom:1rem">← Back to Admin</a>

      <div *ngIf="loading">Loading...</div>
  <div *ngIf="error" class="admin-login-error">{{ error }}</div>
  <ul>
        <li *ngFor="let c of items">
          <strong>{{ c.order || 0 }}.</strong> {{ c.name }} — {{ c.role }}
          <button class="admin-login-btn" style="padding:6px 10px;margin-left:8px" (click)="edit(c)">Edit</button>
          <button class="admin-login-btn" style="padding:6px 10px;margin-left:6px;background:#c0392b" (click)="remove(c._id!)">Delete</button>
        </li>
      </ul>

      <form [formGroup]="form" (ngSubmit)="save()" style="margin-top:0.8rem">
        <input class="admin-login-input" placeholder="Name" formControlName="name" />
        <input class="admin-login-input" placeholder="Role" formControlName="role" />
        <input class="admin-login-input" placeholder="Email" formControlName="email" />
        <input class="admin-login-input" placeholder="Phone" formControlName="phone" />
  <input class="admin-login-input" placeholder="Image URL" formControlName="imageUrl" />
  <input class="admin-login-input" placeholder="Instagram URL" formControlName="instagramUrl" />
  <input class="admin-login-input" placeholder="LinkedIn URL" formControlName="linkedinUrl" />
        <input class="admin-login-input" placeholder="Order" type="number" formControlName="order" />
        <textarea class="admin-login-input" placeholder="Bio" formControlName="bio"></textarea>
  <button class="admin-login-btn" type="submit" [disabled]="saving">{{ saving ? (editingId ? 'Updating...' : 'Adding...') : (editingId ? 'Update' : 'Add') }} Council Member</button>
      </form>
    </section>
  `,
  styleUrls: ['./admin-panel.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class CouncilAdminComponent {
  items: CouncilCard[] = [];
  form: FormGroup;
  loading = false;
  error: string | null = null;
  editingId: string | null = null;
  saving = false;

  constructor(private fb: FormBuilder, private svc: CouncilCardsService) {
    this.form = this.fb.group({
      name: ['', Validators.required], role: ['', Validators.required], email: [''], phone: [''], imageUrl: [''], instagramUrl: [''], linkedinUrl: [''], bio: [''], order: [0]
    });
  }

  ngOnInit() { this.load(); }

  load() {
    this.loading = true; this.error = null;
    this.svc.list().subscribe({
      next: (cards) => { this.items = cards; this.loading = false; },
      error: (err) => { this.error = this.httpError(err, 'Failed to load'); this.loading = false; }
    });
  }
  edit(c: CouncilCard) {
    this.editingId = c._id || null;
  this.form.patchValue({ name: c.name, role: c.role, email: c.email || '', phone: c.phone || '', imageUrl: c.imageUrl || '', instagramUrl: c.instagramUrl || '', linkedinUrl: c.linkedinUrl || '', bio: c.bio || '', order: c.order || 0 });
  }
  save() {
    if (this.form.invalid) { this.error = 'Name and Role are required'; return; }
    this.error = null; this.saving = true;
    const payload = { ...this.form.value } as CouncilCard;
    const done = () => { this.saving = false; };
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
    if (!confirm('Delete this member?')) return;
    this.svc.delete(id).subscribe({ next: () => this.load(), error: (err) => { this.error = this.httpError(err, 'Failed to delete'); } });
  }
  httpError(err: any, fallback: string) {
    const msg = err?.error?.message || err?.message || fallback;
    if (err?.status === 401 || err?.status === 403) {
      return 'Unauthorized. Please login again in Admin.';
    }
    return msg;
  }
}
