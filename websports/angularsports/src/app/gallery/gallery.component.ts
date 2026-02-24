import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Photo = { src: string; alt: string };
type GalleryBatch = {
  id: string;
  title: string;
  yearRange: string; // e.g., 2023-24
  description?: string;
  photos: Photo[];
};

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  batches: GalleryBatch[] = [
    {
      id: '2023-24',
      title: 'Annual Sports Meet',
      yearRange: '2023-24',
      description: 'Highlights from the 2023-24 sports events and ceremonies.',
      photos: [
        { src: 'assets/collage.jpg', alt: 'Sports collage 2023-24 - 1' },
        { src: 'assets/collage.jpg', alt: 'Sports collage 2023-24 - 2' },
        { src: 'assets/collage.jpg', alt: 'Sports collage 2023-24 - 3' }
      ]
    },
    {
      id: '2022-23',
      title: 'Intercollege Tournaments',
      yearRange: '2022-23',
      description: 'Memories from intercollege competitions and awards.',
      photos: [
        { src: 'assets/collage.jpg', alt: 'Sports collage 2022-23 - 1' },
        { src: 'assets/collage.jpg', alt: 'Sports collage 2022-23 - 2' },
        { src: 'assets/collage.jpg', alt: 'Sports collage 2022-23 - 3' }
      ]
    }
  ];

  activeBatchId: string | null = null;

  toggleBatch(id: string) {
    this.activeBatchId = this.activeBatchId === id ? null : id;
  }

  trackByBatch = (_: number, b: GalleryBatch) => b.id;
  trackByPhoto = (_: number, p: Photo) => p.src + p.alt;
}
