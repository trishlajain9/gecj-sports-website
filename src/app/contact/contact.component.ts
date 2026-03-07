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
			photo: 'assets/organiser/rajveer.png'
		},
		{
			role: 'Organiser',
			name: 'Mohd. Kaif khan',
			phone: '9001113142',
			instagram: 'https://www.instagram.com/kaif_khan78610/',
			email: '',
			photo: 'assets/organiser/kaf.jpeg'
		},
		{
			role: 'Organiser',
			name: 'Tanishq Chaturvedi',
			phone: '8829807765',
			instagram: 'https://www.instagram.com/',
			email: '',
			photo: 'assets/organiser/tanishq.jpeg'
		},
		{
			role: 'Website Designer',
			name: 'Trishla jain ',
			phone: '9468859214',
			instagram: 'https://www.instagram.com/trishla.jain__',
			email: '',
			photo: 'assets/organiser/trishla.png'
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
