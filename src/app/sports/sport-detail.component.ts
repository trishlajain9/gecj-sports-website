import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

type Sport = { name: string; img: string; desc: string; images?: string[] };

@Component({
  selector: 'app-sport-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="sport-detail" *ngIf="sport(); else notFound">
      <a routerLink="/sports" class="back">← Back to Sports</a>
      <h1 class="title">{{ sport()!.name }}</h1>
      <div class="img-wrap">
        <img [src]="sport()!.img" [alt]="sport()!.name + ' image'" (error)="onImgError($event)"/>
      </div>
      <p class="desc">{{ sport()!.desc }}</p>
      <div class="gallery" *ngIf="sport()!.images?.length">
        <h2 class="gallery-title">Photos</h2>
        <div class="photos">
          <img *ngFor="let src of sport()!.images; index as i" [src]="src" [alt]="sport()!.name + ' photo ' + (i+1)" (error)="onImgError($event)"/>
        </div>
      </div>
    </section>
    <ng-template #notFound>
      <section class="sport-detail">
        <a routerLink="/sports" class="back">← Back to Sports</a>
        <h1 class="title">Sport not found</h1>
        <p class="desc">We couldn't find details for this sport.</p>
      </section>
    </ng-template>
  `,
  styles: [`
    .sport-detail { max-width: 980px; margin: 0 auto; padding: 100px 16px 40px; color: #e6f4ff; }
    .back { color: #93c5fd; text-decoration: none; font-weight: 700; }
    .back:hover { text-decoration: underline; }
    .title { margin: 10px 0 12px; font-size: 2rem; font-weight: 900; color: #98e1ff; }
    .img-wrap { border-radius: 16px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,.35); background: #0f1e33; }
    .img-wrap img { width: 100%; height: auto; display: block; }
  .desc { margin-top: 16px; font-size: 1.05rem; color: #cbe3ff; }
  .gallery { margin-top: 18px; }
  .gallery-title { font-size: 1.4rem; font-weight: 800; color: #98e1ff; margin: 12px 0; }
  .photos { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; }
  .photos img { width: 100%; height: 150px; object-fit: cover; border-radius: 10px; box-shadow: 0 6px 22px rgba(0,0,0,.35); background: #0f1e33; }
    @media (max-width: 700px) { .title { font-size: 1.6rem; } }
  `]
})
export class SportDetailComponent {
  private sports: Record<string, Sport> = {
    basketball: {
      name: 'Basketball',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
      desc: 'Experience the thrill of basketball with world-class courts and strategic plays.',
      images: [
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=70',
        'https://images.unsplash.com/photo-1518614183011-8aee3a67cc17?auto=format&fit=crop&w=800&q=70',
        'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=70'
      ]
    },
    football: {
      name: 'Football',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      desc: 'Join our football squad, featuring top-notch facilities and renowned athletes.',
      images: [
        'https://images.unsplash.com/photo-1521417531039-96c94a58689d?auto=format&fit=crop&w=800&q=70',
        'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=70',
        'https://images.unsplash.com/photo-1508606572321-901ea443707f?auto=format&fit=crop&w=800&q=70'
      ]
    },
    cricket: {
      name: 'Cricket',
      img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
      desc: 'Cricket at GECJ is all about learning, bonding, and fielding winning teams.',
      images: [
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=70',
        'https://images.unsplash.com/photo-1542144612-1c7b03b42a1c?auto=format&fit=crop&w=800&q=70',
        'https://images.unsplash.com/photo-1521417531039-96c94a58689d?auto=format&fit=crop&w=800&q=70'
      ]
    },
    tennis: {
      name: 'Tennis',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
      desc: 'Engage in intense rallies and showcase your skills on our tennis courts.',
      images: [
        'https://images.unsplash.com/photo-1542144612-1c7b03b42a1c?auto=format&fit=crop&w=800&q=70',
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=70'
      ]
    },
    badminton: {
      name: 'Badminton',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
      desc: 'Crack smashes and perfect your aim in try by world-class badminton courts.',
      images: [
        'https://images.unsplash.com/photo-1518614183011-8aee3a67cc17?auto=format&fit=crop&w=800&q=70',
        'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=70'
      ]
    },
    volleyball: {
      name: 'Volleyball',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
      desc: 'Work together to spike, block, and set your way to the national level.',
      images: [
        'https://images.unsplash.com/photo-1508606572321-901ea443707f?auto=format&fit=crop&w=800&q=70',
        'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=70'
      ]
    }
  };

  param = signal('');
  sport = computed<Sport | undefined>(() => this.sports[this.param()]);

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      this.param.set((pm.get('name') || '').toLowerCase());
    });
  }

  onImgError(ev: Event) {
    (ev.target as HTMLImageElement).src = 'assets/collage.jpg';
  }
}
