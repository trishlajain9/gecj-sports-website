import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsItem } from '../services/news.service';
import { LightRaysComponent } from '../light-rays/light-rays.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, LightRaysComponent],
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

  newsList: NewsItem[] = [
    {
      title: 'Annual Sports Event 2026 – Sporion',
      date: '9 March – 12 March 2026',
      desc: 'Our college is hosting its Annual Sports Event from 9th March to 12th March 2026. The four-day event will feature various indoor and outdoor sports with participation from students across different departments. The event aims to promote physical fitness, teamwork, and the spirit of healthy competition among students. <br><br> 📅 Event Dates: 9 March – 12 March 2026 <br> 📍 Venue: Engineering College Campus',
    }
  ];

  trackBySport(index: number, sport: any) { return sport.title; }
  trackByNews(index: number, news: NewsItem) { return news._id || news.title; }
}
