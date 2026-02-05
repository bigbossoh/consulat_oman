import { Component } from '@angular/core';
import { ImageCarouselComponent } from '../../shared/components/image-carousel/image-carousel.component';

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss'],
  standalone: true,
  imports: [ImageCarouselComponent]
})
export class MissionsComponent {
  landscapeImages: CarouselImage[] = [
    {
      src: 'assets/images/vue_Oman2.jpg',
      alt: 'Paysage du Sultanat d\'Oman',
      caption: 'Opportunités d\'investissement'
    },
    {
      src: 'assets/images/vue_Oman3.jpg',
      alt: 'Désert d\'Oman',
      caption: 'Énergies renouvelables'
    },
    {
      src: 'assets/images/vue_Oman4.jpg',
      alt: 'Montagnes d\'Oman',
      caption: 'Tourisme durable'
    },
    {
      src: 'assets/images/vue_Oman5.jpeg',
      alt: 'Côte d\'Oman',
      caption: 'Infrastructures modernes'
    },
    {
      src: 'assets/images/vue_Oman6.jpg',
      alt: 'Développement d\'Oman',
      caption: 'Vision 2040'
    }
  ];
}