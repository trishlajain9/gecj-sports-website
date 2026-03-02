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
        { src: 'assets/gallery/E1.jpg', alt: 'Sports collage 2022-23 - 1' },
        { src: 'assets/gallery/E2.jpg', alt: 'Sports collage 2022-23 - 2' },
        { src: 'assets/gallery/E3.jpg', alt: 'Sports collage 2022-23 - 3' },
        { src: 'assets/gallery/E5.jpg', alt: 'Sports collage 2022-23 - 5' },
        { src: 'assets/gallery/E6.jpg', alt: 'Sports collage 2022-23 - 6' },
        { src: 'assets/gallery/E7.jpg', alt: 'Sports collage 2022-23 - 7' },
        { src: 'assets/gallery/E8.jpg', alt: 'Sports collage 2022-23 - 8' },
        { src: 'assets/gallery/E9.jpg', alt: 'Sports collage 2022-23 - 9' },
        { src: 'assets/gallery/E10.jpg', alt: 'Sports collage 2022-23 - 10' },
        { src: 'assets/gallery/E11.jpg', alt: 'Sports collage 2022-23 - 11' },
        { src: 'assets/gallery/W1.jpg', alt: 'Sports collage 2022-23 - 12' },
        { src: 'assets/gallery/W2.jpg', alt: 'Sports collage 2022-23 - 13' },
        { src: 'assets/gallery/W3.jpg', alt: 'Sports collage 2022-23 - 14' },
        { src: 'assets/gallery/W4.jpg', alt: 'Sports collage 2022-23 - 15' },
        { src: 'assets/gallery/W5.jpg', alt: 'Sports collage 2022-23 - 16' },
        { src: 'assets/gallery/W6.jpg', alt: 'Sports collage 2022-23 - 17' },
        { src: 'assets/gallery/W7.jpg', alt: 'Sports collage 2022-23 - 18' },
        { src: 'assets/gallery/W8.jpg', alt: 'Sports collage 2022-23 - 19' },
        { src: 'assets/gallery/W9.jpg', alt: 'Sports collage 2022-23 - 20' },
        { src: 'assets/gallery/W10.jpg', alt: 'Sports collage 2022-23 - 21' },
        { src: 'assets/gallery/W11.jpg', alt: 'Sports collage 2022-23 - 22' },
        { src: 'assets/gallery/W12.jpg', alt: 'Sports collage 2022-23 - 23' }
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
