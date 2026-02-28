
import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
		{ path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
			{ path: 'sports', loadComponent: () => import('./sports/sports.component').then(m => m.SportsComponent) },
			{ path: 'sports/:name', loadComponent: () => import('./sports/sport-detail.component').then(m => m.SportDetailComponent) },
		//{ path: 'sports/:name', loadComponent: () => import('./sports/sport-detail.component').then(m => m.SportDetailComponent) },
	{ path: 'events', loadComponent: () => import('./events/events.component').then(m => m.EventsComponent) },
	{ path: 'timeline', loadComponent: () => import('./event-timelines/event-timelines.component').then(m => m.EventsTimelineComponent) },
	{ path: 'gallery', loadComponent: () => import('./gallery/gallery.component').then(m => m.GalleryComponent) },
	{ path: 'council', loadComponent: () => import('./council/council.component').then(m => m.CouncilComponent) },
	{ path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
	{ path: 'admin', loadComponent: () => import('./admin-panel/admin-panel.component').then(m => m.AdminComponent) },
	{ path: 'admin/council', loadComponent: () => import('./admin-panel/council-admin.component').then(m => m.CouncilAdminComponent) },
		{ path: 'admin/news', loadComponent: () => import('./admin-panel/news-admin.component').then(m => m.NewsAdminComponent) },
		
];
