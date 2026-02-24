import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
	selector: 'app-contact',
		standalone: true,
		imports: [CommonModule, RouterModule],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent {
	showCouncil = false;
	council = {
		title: 'Institute Sports Council',
		year: '2025-2026',
		role: 'General Secretary Sports Affairs',
		name: 'Rajveer verma',
		phoneDisplay: '8302186985',
		phoneDial: '+918302186985',
		email: 'rajveerverma99830@gmail.com',
		instagram: 'https://www.instagram.com/rajveer____.01',
		linkedin: 'https://www.linkedin.com/in/rajveer-verma-6b17ab291',
		photo: 'assets/council-general-secretary.jpg'
	};

	get mailHref(): string {
		return `mailto:${this.council.email}`;
	}

	get whatsHref(): string {
		const digits = this.council.phoneDial.replace(/[^\d]/g, '');
		return `https://wa.me/${digits}`;
	}

	onDiscoverCouncil(): void {
		this.showCouncil = true;
	}

	closeCouncil(): void {
		this.showCouncil = false;
	}

	onPhotoError(ev: Event): void {
		const img = ev.target as HTMLImageElement;
		img.src = 'assets/collage.jpg';
	}
	constructor(private router: Router) {}

	goCouncil(ev: Event) {
		// ensure navigation works even if routerLink is blocked by overlay styles
		ev.preventDefault();
		this.router.navigate(['/council']);
	}
}
