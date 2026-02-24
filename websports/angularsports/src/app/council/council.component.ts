import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouncilCardsService, CouncilCard } from '../services/council-cards.service';

@Component({
  selector: 'app-council',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="council-hero">
      <div class="hero-inner">
        <h1>Institute Sports Council</h1>
        <p class="year">{{ academicYear }}</p>
      </div>
    </section>

    <section class="council-toolbar" aria-label="Council filters and actions">
      <input class="council-search" type="search" placeholder="Search by name or role" (input)="onSearch($event)" aria-label="Search council" />
      <select class="council-filter" (change)="onRoleChange($event)" aria-label="Filter by role">
        <option value="">All roles</option>
        <option *ngFor="let r of roles; trackBy: trackByValue" [value]="r">{{ r }}</option>
      </select>
    </section>

    <section *ngIf="generalSecretary().length" class="council-section">
      <h2>General Coordinator </h2>
      <div class="council-featured" role="list">
        <article class="council-featured-card" role="listitem" *ngFor="let m of generalSecretary(); trackBy: trackById">
          <div class="avatar-wrap">
            <div class="avatar" [style.background-image]="'url(' + (m.imageUrl || placeholder) + ')'"></div>
          </div>
          <div class="featured-meta">
            <h3>{{ m.name }}</h3>
            <p class="call">Call: {{ m.phone || 'NA' }}</p>
            <div class="socials">
              <a *ngIf="m.instagramUrl" class="ig" [href]="m.instagramUrl" target="_blank" rel="noopener" aria-label="Instagram"></a>
              <a *ngIf="m.linkedinUrl" class="li" [href]="m.linkedinUrl" target="_blank" rel="noopener" aria-label="LinkedIn"></a>
              <a *ngIf="m.email" class="em" [href]="'mailto:' + m.email" aria-label="Email"></a>
                <a *ngIf="m.phone" class="wa" [href]="waLink(m.phone)" target="_blank" rel="noopener" aria-label="WhatsApp"></a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section *ngIf="heads().length" class="council-section">
      <h2>Heads</h2>
      <div class="council-grid" role="list">
        <article class="council-card" role="listitem" *ngFor="let m of heads(); trackBy: trackById">
          <img [src]="m.imageUrl || placeholder" [alt]="m.name + ' – ' + m.role" />
          <div class="council-meta">
            <h3>{{ m.name }}</h3>
            <p class="role">{{ m.role }}</p>
            <div class="links">
              <a *ngIf="m.email" [href]="'mailto:' + m.email" [attr.aria-label]="'Email ' + m.name">Email</a>
              <a *ngIf="m.phone" [href]="'tel:' + m.phone" [attr.aria-label]="'Call ' + m.name">Call</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section *ngIf="secretaries().length" class="council-section">
      <h2>Organiseers</h2>
      <div class="council-grid" role="list">
        <article class="council-card" role="listitem" *ngFor="let m of secretaries(); trackBy: trackById">
          <img [src]="m.imageUrl || placeholder" [alt]="m.name + ' – ' + m.role" />
          <div class="council-meta">
            <h3>{{ m.name }}</h3>
            <p class="role">{{ m.role }}</p>
            <div class="links">
              <a *ngIf="m.email" [href]="'mailto:' + m.email" [attr.aria-label]="'Email ' + m.name">Email</a>
              <a *ngIf="m.phone" [href]="'tel:' + m.phone" [attr.aria-label]="'Call ' + m.name">Call</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section *ngIf="managers().length" class="council-section">
      <h2>Managers</h2>
      <div class="council-grid" role="list">
        <article class="council-card" role="listitem" *ngFor="let m of managers(); trackBy: trackById">
          <img [src]="m.imageUrl || placeholder" [alt]="m.name + ' – ' + m.role" />
          <div class="council-meta">
            <h3>{{ m.name }}</h3>
            <p class="role">{{ m.role }}</p>
            <div class="links">
              <a *ngIf="m.email" [href]="'mailto:' + m.email" [attr.aria-label]="'Email ' + m.name">Email</a>
              <a *ngIf="m.phone" [href]="'tel:' + m.phone" [attr.aria-label]="'Call ' + m.name">Call</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section *ngIf="coordinators().length" class="council-section">
      <h2>Coordinators</h2>
      <div class="council-grid" role="list">
        <article class="council-card" role="listitem" *ngFor="let m of coordinators(); trackBy: trackById">
          <img [src]="m.imageUrl || placeholder" [alt]="m.name + ' – ' + m.role" />
          <div class="council-meta">
            <h3>{{ m.name }}</h3>
            <p class="role">{{ m.role }}</p>
            <div class="links">
              <a *ngIf="m.email" [href]="'mailto:' + m.email" [attr.aria-label]="'Email ' + m.name">Email</a>
              <a *ngIf="m.phone" [href]="'tel:' + m.phone" [attr.aria-label]="'Call ' + m.name">Call</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section *ngIf="others().length" class="council-section">
      <h2>Others</h2>
      <div class="council-grid" role="list">
        <article class="council-card" role="listitem" *ngFor="let m of others(); trackBy: trackById">
          <img [src]="m.imageUrl || placeholder" [alt]="m.name + ' – ' + m.role" />
          <div class="council-meta">
            <h3>{{ m.name }}</h3>
            <p class="role">{{ m.role }}</p>
            <div class="links">
              <a *ngIf="m.email" [href]="'mailto:' + m.email" [attr.aria-label]="'Email ' + m.name">Email</a>
              <a *ngIf="m.phone" [href]="'tel:' + m.phone" [attr.aria-label]="'Call ' + m.name">Call</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <div class="empty" *ngIf="!loading && totalCount === 0">No council members found.</div>
    <div class="loading" *ngIf="loading">Loading council…</div>
  `,
  styles: [`
  .council-hero{background:linear-gradient(135deg,#0f172a,#1f2a44);color:#cfe8ff;padding:56px 16px;text-align:center}
    .council-hero .hero-inner{max-width:960px;margin:0 auto}
    .council-hero h1{margin:0 0 8px 0;font-size:clamp(28px,3.4vw,40px);font-weight:800}
  .council-hero p{margin:0;opacity:.9}

    .council-toolbar{max-width:1040px;margin:16px auto;display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end;padding:0 12px}
    .council-search,.council-filter{border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;font-size:14px;outline:none}
    .council-search{flex:1 1 280px}

    .council-grid{max-width:1200px;margin:12px auto 48px;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;padding:0 12px}
    .council-card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,.06);transition:transform .2s ease, box-shadow .2s ease}
    .council-card:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.12)}
    .council-card img{width:100%;height:180px;object-fit:cover;background:#f3f4f6}
    .council-meta{padding:12px}
    .council-meta h3{margin:0 0 4px 0;font-size:18px}
    .council-meta .role{margin:0 0 8px 0;color:#6b7280;font-size:14px}
    .council-meta .links{display:flex;gap:10px}
    .council-meta .links a{font-size:13px;color:#1e3a8a;text-decoration:none;border:1px solid #d1d5db;border-radius:999px;padding:6px 10px}
    .council-meta .links a:hover{background:#1e3a8a;color:#fff;border-color:#1e3a8a}

    .empty,.loading{text-align:center;color:#6b7280;margin:12px 0 32px}

  /* Featured GS block */
  .council-featured{max-width:960px;margin:0 auto 24px;padding:0 12px}
  .council-featured-card{position:relative;background:linear-gradient(145deg,#1b2336,#26324a);border:1px solid rgba(255,255,255,.06);border-radius:22px;padding:28px;display:flex;align-items:center;gap:24px;box-shadow:0 10px 30px rgba(0,0,0,.25)}
  .avatar-wrap{width:240px;display:flex;justify-content:center}
  .avatar{width:220px;height:220px;border-radius:50%;background-position:center;background-size:cover;box-shadow:0 25px 60px rgba(255,0,0,.18) inset, 0 -25px 60px rgba(255,0,0,.08) inset, 0 8px 28px rgba(0,0,0,.4)}
  .featured-meta h3{margin:8px 0 4px 0;font-size:22px;color:#dbeafe}
  .featured-meta .call{margin:0 0 14px 0;color:#cfe8ff}
  .socials{display:flex;gap:14px}
  .socials a{width:38px;height:38px;border-radius:8px;display:inline-block;background:#0f192c;border:1px solid rgba(255,255,255,.08);box-shadow:0 6px 16px rgba(0,0,0,.2)}
  .socials a.ig{background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23e1306c"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm5.75-3.25a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z"/></svg>');background-repeat:no-repeat;background-position:center}
  .socials a.li{background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230a66c2"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1C12.6 8.9 14.4 8 16.6 8 21.3 8 22 10.9 22 15.1V24h-4v-7.9c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.2V24H8V8z"/></svg>');background-repeat:no-repeat;background-position:center}
  .socials a.em{background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2399c2ff"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>');background-repeat:no-repeat;background-position:center}
  .socials a.wa{background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2325D366"><path d="M20.52 3.48A11.8 11.8 0 0 0 12.02 0C5.39 0 .02 5.37.02 12c0 2.1.55 4.1 1.6 5.88L0 24l6.3-1.63A12 12 0 0 0 12.02 24C18.65 24 24 18.63 24 12c0-3.2-1.25-6.22-3.48-8.52zM12.02 22a9.9 9.9 0 0 1-5.03-1.39l-.36-.21-3.74.96.99-3.64-.24-.37A9.98 9.98 0 1 1 22 12c0 5.52-4.48 10-9.98 10zm5.82-7.44c-.32-.16-1.88-.93-2.16-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.64.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.97-2.35-.26-.64-.52-.55-.71-.56l-.6-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.69 0 1.58 1.15 3.11 1.31 3.32.16.21 2.26 3.45 5.48 4.85.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.88-.77 2.15-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37z"/></svg>');background-repeat:no-repeat;background-position:center}
  @media (max-width: 720px){.council-featured-card{flex-direction:column;text-align:center;padding:22px}.avatar-wrap{width:auto}.avatar{width:180px;height:180px}}

    @media (prefers-color-scheme: dark){
      .council-card{background:#0b1020;border-color:#1f2937}
      .council-meta .role{color:#9ca3af}
      .council-meta .links a{border-color:#374151;color:#a5b4fc}
      .council-meta .links a:hover{background:#6366f1;border-color:#6366f1;color:#fff}
    }
  `]
})
export class CouncilComponent {
  placeholder = 'assets/collage.jpg';
  academicYear = '';
  loading = false;
  items = signal<CouncilCard[]>([]);
  q = signal('');
  role = signal('');

  roles: string[] = [];
  totalCount = 0;

  constructor(private svc: CouncilCardsService) {}

  ngOnInit() {
    this.setAcademicYear();
    this.fetch();
  }

  fetch() {
    this.loading = true;
    this.svc.list().subscribe({
      next: (res) => {
        const sorted = [...res].sort((a,b) => (a.order||0) - (b.order||0));
  this.items.set(sorted);
        this.roles = Array.from(new Set(sorted.map(m => m.role).filter(Boolean))) as string[];
  this.totalCount = sorted.length;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  filtered = computed(() => {
    const q = this.q().trim().toLowerCase();
    const role = this.role();
    return this.items().filter(m => {
      const hit = (!q || (m.name?.toLowerCase().includes(q) || m.role?.toLowerCase().includes(q)));
      const byRole = (!role || m.role === role);
      return hit && byRole;
    });
  });

  onSearch(ev: Event) { this.q.set((ev.target as HTMLInputElement).value || ''); }
  onRoleChange(ev: Event) { this.role.set((ev.target as HTMLSelectElement).value || ''); }

  trackById = (_: number, m: CouncilCard) => m._id ?? m.name;
  trackByValue = (_: number, v: string) => v;

  setAcademicYear() {
    const now = new Date();
    const year = now.getFullYear();
    const start = now.getMonth() >= 6 ? year : year - 1; // academic year starts in July
    this.academicYear = `${start}-${start + 1}`;
  }

  // grouping helpers (rough mapping based on role text)
  private match(filter: (m: CouncilCard) => boolean) {
    const q = this.q().trim().toLowerCase();
    const role = this.role();
    return this.items().filter(m => {
      const hit = (!q || (m.name?.toLowerCase().includes(q) || m.role?.toLowerCase().includes(q)));
      const byRole = (!role || m.role === role);
      return hit && byRole && filter(m);
    });
  }
  private isGS = (m: CouncilCard) => /general\s*secretary/i.test(m.role || '');
  private isHead = (m: CouncilCard) => /head/i.test(m.role || '');
  private isSecretary = (m: CouncilCard) => /secretary/i.test(m.role || '') && !this.isGS(m);
  private isManager = (m: CouncilCard) => /manager/i.test(m.role || '');
  private isCoordinator = (m: CouncilCard) => /coordinat/i.test(m.role || '');

  generalSecretary = computed(() => this.match(m => this.isGS(m)));
  heads = computed(() => this.match(m => this.isHead(m)));
  secretaries = computed(() => this.match(m => this.isSecretary(m)));
  managers = computed(() => this.match(m => this.isManager(m)));
  coordinators = computed(() => this.match(m => this.isCoordinator(m)));
  others = computed(() => this.match(m => !this.isGS(m) && !this.isHead(m) && !this.isSecretary(m) && !this.isManager(m) && !this.isCoordinator(m)));
  
  waLink(phone?: string) {
    if (!phone) return '';
    const digits = String(phone).replace(/[^0-9]/g, '');
    return `https://wa.me/${digits}`;
  }
}
