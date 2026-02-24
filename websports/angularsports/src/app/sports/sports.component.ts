import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  sports = [
    {
      name: 'Basketball',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
      desc: 'Experience the thrill of basketball with world-class courts and strategic plays.'
    },
    {
      name: 'Football',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      desc: 'Join our football squad, featuring top-notch facilities and renowned athletes.'
    },
    {
      name: 'Cricket',
      img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      desc: 'Cricket at GECJ is all about learning, bonding, and fielding winning teams.'
    },
    {
      name: 'Tennis',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
      desc: 'Engage in intense rallies and showcase your skills on our tennis courts.'
    },
    {
      name: 'Badminton',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
      desc: 'Crack smashes and perfect your aim in try by world-class badminton courts.'
    },
    {
      name: 'Volleyball',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
      desc: 'Work together to spike, block, and set your way to the national level.'
    }
  ];
}
