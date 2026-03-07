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
      img: 'assets/sports/basketball/B1.jpeg',
      desc: 'Experience the thrill of basketball with world-class courts and strategic plays.',
      images: [
        'assets/sports/basketball/B1.jpeg',
        'assets/sports/basketball/B2.jpeg',
        'assets/sports/basketball/B3.jpeg',
        'assets/sports/basketball/B4.jpg',
        'assets/sports/basketball/B5.jpg',
        'assets/sports/basketball/B7.jpg',
        'assets/sports/basketball/B8.jpg',
        'assets/sports/basketball/B10.jpg',
        'assets/sports/basketball/B11.jpg',
        'assets/sports/basketball/B12.jpg',
        'assets/sports/basketball/B13.jpg',
        'assets/sports/basketball/B14.jpg',
        'assets/sports/basketball/B16.jpg'
      ]
    },
    carrom: {
      name: 'Carrom',
      img: 'assets/sports/Carrom/C1.jpeg',
      desc: 'Sharpen your precision and tactical thinking on the carrom board.',
      images: [
        'assets/sports/Carrom/C1.jpeg',
        'assets/sports/Carrom/C2.jpg',
        'assets/sports/Carrom/C3.jpg'
      ]
    },
    cricket: {
      name: 'Cricket',
      img: 'assets/sports/cricket/CR1.jpg',
      desc: 'Cricket at GECJ is all about learning, bonding, and fielding winning teams.',
      images: [
        'assets/sports/cricket/CR1.jpg',
        'assets/sports/cricket/CR2.jpg',
        'assets/sports/cricket/princi.jpg'
      ]
    },
    chess: {
      name: 'Chess',
      img: 'assets/sports/Chess/CH1.jpg',
      desc: 'Develop strategy, patience, and discipline with every chess match.',
      images: [
        'assets/sports/Chess/CH1.jpg',
        'assets/sports/Chess/CH2.jpg'
      ]
    },
    badminton: {
      name: 'Badminton',
      img: 'assets/sports/Badminton/ba1.jpg',
      desc: 'Crack smashes and perfect your aim in try by world-class badminton courts.',
      images: [
        'assets/sports/Badminton/ba1.jpg',
        'assets/sports/Badminton/ba2.jpg',
        'assets/sports/Badminton/ba3.jpeg',
        'assets/sports/Badminton/ba4.jpg',
        'assets/sports/Badminton/ba5.jpg'
      ]
    },
    volleyball: {
      name: 'Volleyball',
      img: 'assets/sports/Volleyball/V1.jpg',
      desc: 'Work together to spike, block, and set your way to the national level.',
      images: [
        'assets/sports/Volleyball/V1.jpg',
        'assets/sports/Volleyball/V2.jpg',
        'assets/sports/Volleyball/V3.jpg'
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
