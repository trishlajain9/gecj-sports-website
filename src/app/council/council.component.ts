import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightRaysComponent } from '../light-rays/light-rays.component';

interface CouncilMember {
	role: string;
	name: string;
	phone: string;
	instagram: string;
	email: string;
	photo: string;
}

@Component({
	selector: 'app-council',
	standalone: true,
	imports: [CommonModule, LightRaysComponent],
	templateUrl: './council.component.html',
	styleUrls: ['./council.component.css']
})
export class CouncilComponent {
	zoomedIndex: number | null = null;

	members: CouncilMember[] = [
	];

	onPhotoClick(index: number): void {
		this.zoomedIndex = index;
		setTimeout(() => {
			this.zoomedIndex = null;
		}, 2000);
	}

	onPhotoError(ev: Event): void {
		const img = ev.target as HTMLImageElement;
		img.src = 'assets/Logo/logo.png';
	}
}
