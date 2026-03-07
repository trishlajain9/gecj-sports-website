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
  activeBatchId: string | null = '2022-23'; // Show Intercollege Tournaments by default
  selectedPhoto: Photo | null = null; // Track selected photo for lightbox
  batches: GalleryBatch[] = [
    {
      id: '2023-24',
      title: 'Sporion 2.O',
      yearRange: '2023-24',
      description: 'Highlights from the 2023-24 sports events and ceremonies.',
      photos: [
        { src: 'assets/gallery/24-25/B1.jpeg', alt: 'Sporion 2.O 2023-24 - 1' },
        { src: 'assets/gallery/24-25/B10.jpg', alt: 'Sporion 2.O 2023-24 - 2' },
        { src: 'assets/gallery/24-25/B11.jpg', alt: 'Sporion 2.O 2023-24 - 3' },
        { src: 'assets/gallery/24-25/B12.jpg', alt: 'Sporion 2.O 2023-24 - 4' },
        { src: 'assets/gallery/24-25/B13.jpg', alt: 'Sporion 2.O 2023-24 - 5' },
        { src: 'assets/gallery/24-25/B14.jpg', alt: 'Sporion 2.O 2023-24 - 6' },
        { src: 'assets/gallery/24-25/B16.jpg', alt: 'Sporion 2.O 2023-24 - 7' },
        { src: 'assets/gallery/24-25/B2.jpeg', alt: 'Sporion 2.O 2023-24 - 8' },
        { src: 'assets/gallery/24-25/B3.jpeg', alt: 'Sporion 2.O 2023-24 - 9' },
        { src: 'assets/gallery/24-25/B4.jpg', alt: 'Sporion 2.O 2023-24 - 10' },
        { src: 'assets/gallery/24-25/B5.jpg', alt: 'Sporion 2.O 2023-24 - 11' },
        { src: 'assets/gallery/24-25/B6.jpg', alt: 'Sporion 2.O 2023-24 - 12' },
        { src: 'assets/gallery/24-25/B7.jpg', alt: 'Sporion 2.O 2023-24 - 13' },
        { src: 'assets/gallery/24-25/B8.jpg', alt: 'Sporion 2.O 2023-24 - 14' },
        { src: 'assets/gallery/24-25/ba1.jpg', alt: 'Sporion 2.O 2023-24 - 15' },
        { src: 'assets/gallery/24-25/ba2.jpg', alt: 'Sporion 2.O 2023-24 - 16' },
        { src: 'assets/gallery/24-25/ba3.jpeg', alt: 'Sporion 2.O 2023-24 - 17' },
        { src: 'assets/gallery/24-25/ba4.jpg', alt: 'Sporion 2.O 2023-24 - 18' },
        { src: 'assets/gallery/24-25/ba5.jpg', alt: 'Sporion 2.O 2023-24 - 19' },
        { src: 'assets/gallery/24-25/ba6.jpg', alt: 'Sporion 2.O 2023-24 - 20' },
        { src: 'assets/gallery/24-25/C1.jpeg', alt: 'Sporion 2.O 2023-24 - 21' },
        { src: 'assets/gallery/24-25/C2.jpg', alt: 'Sporion 2.O 2023-24 - 22' },
        { src: 'assets/gallery/24-25/C3.jpg', alt: 'Sporion 2.O 2023-24 - 23' },
        { src: 'assets/gallery/24-25/CH1.jpg', alt: 'Sporion 2.O 2023-24 - 24' },
        { src: 'assets/gallery/24-25/CH2.jpg', alt: 'Sporion 2.O 2023-24 - 25' },
        { src: 'assets/gallery/24-25/CR1.jpg', alt: 'Sporion 2.O 2023-24 - 26' },
        { src: 'assets/gallery/24-25/CR2.jpg', alt: 'Sporion 2.O 2023-24 - 27' },
        { src: 'assets/gallery/24-25/I1.jpeg', alt: 'Sporion 2.O 2023-24 - 28' },
        { src: 'assets/gallery/24-25/I10.jpg', alt: 'Sporion 2.O 2023-24 - 29' },
        { src: 'assets/gallery/24-25/I11.jpg', alt: 'Sporion 2.O 2023-24 - 30' },
        { src: 'assets/gallery/24-25/I2.jpg', alt: 'Sporion 2.O 2023-24 - 31' },
        { src: 'assets/gallery/24-25/I3.jpg', alt: 'Sporion 2.O 2023-24 - 32' },
        { src: 'assets/gallery/24-25/I4.jpg', alt: 'Sporion 2.O 2023-24 - 33' },
        { src: 'assets/gallery/24-25/I5.jpg', alt: 'Sporion 2.O 2023-24 - 34' },
        { src: 'assets/gallery/24-25/I6.jpg', alt: 'Sporion 2.O 2023-24 - 35' },
        { src: 'assets/gallery/24-25/I7.jpg', alt: 'Sporion 2.O 2023-24 - 36' },
        { src: 'assets/gallery/24-25/I8.jpg', alt: 'Sporion 2.O 2023-24 - 37' },
        { src: 'assets/gallery/24-25/I9.jpg', alt: 'Sporion 2.O 2023-24 - 38' },
        { src: 'assets/gallery/24-25/K1.jpeg', alt: 'Sporion 2.O 2023-24 - 39' },
        { src: 'assets/gallery/24-25/K1.jpg', alt: 'Sporion 2.O 2023-24 - 40' },
        { src: 'assets/gallery/24-25/K2.jpeg', alt: 'Sporion 2.O 2023-24 - 41' },
        { src: 'assets/gallery/24-25/V1.jpg', alt: 'Sporion 2.O 2023-24 - 42' },
        { src: 'assets/gallery/24-25/V2.jpg', alt: 'Sporion 2.O 2023-24 - 43' },
        { src: 'assets/gallery/24-25/V3.jpg', alt: 'Sporion 2.O 2023-24 - 44' }
      ]
    },
    {
      id: '2022-23',
      title: 'Sporion',
      yearRange: '2022-23',
      description: 'Memories from intercollege competitions and awards.',
      photos: [
        { src: 'assets/gallery/22-23/E1.jpg', alt: 'Sports collage 2022-23 - 1' },
        { src: 'assets/gallery/22-23/E2.jpg', alt: 'Sports collage 2022-23 - 2' },
        { src: 'assets/gallery/22-23/E3.jpg', alt: 'Sports collage 2022-23 - 3' },
        { src: 'assets/gallery/22-23/E5.jpg', alt: 'Sports collage 2022-23 - 4' },
        { src: 'assets/gallery/22-23/E6.jpg', alt: 'Sports collage 2022-23 - 5' },
        { src: 'assets/gallery/22-23/E7.jpg', alt: 'Sports collage 2022-23 - 6' },
        { src: 'assets/gallery/22-23/E8.jpg', alt: 'Sports collage 2022-23 - 7' },
        { src: 'assets/gallery/22-23/E9.jpg', alt: 'Sports collage 2022-23 - 8' },
        { src: 'assets/gallery/22-23/E10.jpg', alt: 'Sports collage 2022-23 - 9' },
        { src: 'assets/gallery/22-23/E11.jpg', alt: 'Sports collage 2022-23 - 10' },
        { src: 'assets/gallery/22-23/W1.jpg', alt: 'Sports collage 2022-23 - 11' },
        { src: 'assets/gallery/22-23/W2.jpg', alt: 'Sports collage 2022-23 - 12' },
        { src: 'assets/gallery/22-23/W3.jpg', alt: 'Sports collage 2022-23 - 13' },
        { src: 'assets/gallery/22-23/W4.jpg', alt: 'Sports collage 2022-23 - 14' },
        { src: 'assets/gallery/22-23/W5.jpg', alt: 'Sports collage 2022-23 - 15' },
        { src: 'assets/gallery/22-23/W6.jpg', alt: 'Sports collage 2022-23 - 16' },
        { src: 'assets/gallery/22-23/W7.jpg', alt: 'Sports collage 2022-23 - 17' },
        { src: 'assets/gallery/22-23/W8.jpg', alt: 'Sports collage 2022-23 - 18' }
      ]
    }
  ];

  toggleBatch(id: string) {
    this.activeBatchId = this.activeBatchId === id ? null : id;
  }

  openPhoto(photo: Photo) {
    this.selectedPhoto = photo;
    try {
      document.body.style.overflow = 'hidden';
    } catch {
      // ignore
    }
  }

  closePhoto() {
    this.selectedPhoto = null;
    document.body.style.overflow = 'auto';
  }

  trackByBatch = (_: number, b: GalleryBatch) => b.id;
  trackByPhoto = (_: number, p: Photo) => p.src + p.alt;
}
