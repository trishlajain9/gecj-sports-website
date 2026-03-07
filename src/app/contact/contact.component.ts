import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LightRaysComponent } from '../light-rays/light-rays.component';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [CommonModule, RouterModule, LightRaysComponent],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent {
	showCouncil = false;

	councilMembers = [
		{
			role: 'Website Owner ',
			name: 'Rajveer Verma',
			phone: '8302186985',
			instagram: 'https://www.instagram.com/rajveer____.01',
			email: 'rajveerverma99830@gmail.com',
			photo: 'assets/council-general-secretary.jpg'
		},
		{
			role: 'Organiser',
			name: 'Mohd. Kaif khan',
			phone: '9992888093',
			instagram: 'https://www.instagram.com/',
			email: '',
			photo: 'assets/council/aryansh.jpg'
		},
		{
			role: 'Organiser',
			name: 'Tanishq Chaturvedi',
			phone: '9727215454',
			instagram: 'https://www.instagram.com/',
			email: '',
			photo: 'assets/council/akanksha.jpg'
		},
		{
			role: 'Organiser',
			name: 'Yaman Singh',
			phone: '9855221266',
			instagram: 'https://www.instagram.com/',
			email: '',
			photo: 'assets/council/yaman.jpg'
		},
		{
			role: 'Organiser',
			name: 'TBA',
			phone: '',
			instagram: '',
			email: '',
			photo: ''
		},
		{
			role: 'Organiser',
			name: 'TBA',
			phone: '',
			instagram: '',
			email: '',
			photo: ''
		}
	];

	toggleCouncil(): void {
		this.showCouncil = !this.showCouncil;
	}

	onPhotoError(ev: Event): void {
		const img = ev.target as HTMLImageElement;
		img.src = 'assets/Logo/logo.png';
	}
}
