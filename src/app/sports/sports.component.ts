import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  sports = [
    {
      name: 'Basketball',
      img: 'assets/sports/basketball/B1.jpeg',
      desc: 'Where the court becomes a battleground. Play bold, lead fearless and let your victory echo across campus.'
    },
    {
      name: 'Carrom',
      img: 'assets/sports/Carrom/C1.jpeg',
      desc: 'Master precision and strategy as every strike sharpens focus. Read the board, control the pace, and own the final move.'
    },
    {
      name: 'Cricket',
      img: 'assets/sports/cricket/CR1.jpg',
      desc: 'Where every run carries pride and every wicket builds legacy. Stand tall and turn pressure into pure dominance.'
    },
    {
      name: 'Chess',
      img: 'assets/sports/Chess/CH1.jpg',
      desc: 'Think three moves ahead with calm confidence and sharp tactics. Build your attack, guard your king, and checkmate with purpose.'
    },
    {
      name: 'Badminton',
      img: 'assets/sports/Badminton/ba1.jpg',
      desc: 'Strike with lightning speed and unshakable determination. Smash with pride, move with purpose and claim every rally as yours.'
    },
    {
      name: 'Volleyball',
      img: 'assets/sports/Volleyball/V1.jpg',
      desc: 'Rise above the net with unity, power and fearless spirit. Block strong, strike harder and lead your team to championship glory.'
    }
  ];
}
