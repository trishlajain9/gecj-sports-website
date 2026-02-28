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
      desc: 'Where the court becomes a battleground. Play bold, lead fearless and let your victory echo across campus.'
    },
    {
      name: 'Football',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      desc: 'Command the pitch with strength and strategic brilliance. Play for pride, rise above rivals, and etch your name in history.'
    },
    {
      name: 'Cricket',
      img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      desc: 'Where every run carries pride and every wicket builds legacy. Stand tall and turn pressure into pure dominance.'
    },
    {
      name: 'Tennis',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
      desc: 'Dominate the baseline with relentless speed and control. Stand fearless, outlast the pressure and claim your moment of triumph.'
    },
    {
      name: 'Badminton',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
      desc: 'Strike with lightning speed and unshakable determination. Smash with pride, move with purpose and claim every rally as yours.'
    },
    {
      name: 'Volleyball',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
      desc: 'Rise above the net with unity, power and fearless spirit. Block strong, strike harder and lead your team to championship glory.'
    }
  ];
}
