import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService, NewsItem } from '../services/news.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sports = [
    { title: 'Basketball', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80', desc: 'Experience the thrill of basketball with world-class courts and strategic plays.' },
    { title: 'Football', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', desc: 'Join our football squad, featuring top-notch facilities and renowned athletes.' },
    { title: 'Cricket', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', desc: 'Cricket at GECJ is all about learning, bonding, and fielding winning teams.' },
    { title: 'Tennis', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80', desc: 'Engage in intense rallies and showcase your skills on our tennis courts.' },
    { title: 'Badminton', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80', desc: 'Crack smashes and perfect your aim in try by world-class badminton courts.' },
    { title: 'Volleyball', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80', desc: 'Work together to spike, block, and set your way to the national level.' }
  ];

  newsList: NewsItem[] = [];

  private isBrowser = false;
  constructor(private news: NewsService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.news.list().subscribe({
        next: (items) => this.newsList = items,
        error: () => { this.newsList = []; }
      });
    }
  }

  trackBySport(index: number, sport: any) {
    return sport.title;
  }

  trackByNews(index: number, news: NewsItem) {
    return news._id || news.title;
  }
}
