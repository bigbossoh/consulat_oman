import { Component } from '@angular/core';
import { ImageCarouselComponent } from '../../shared/components/image-carousel/image-carousel.component';

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-consulate',
  templateUrl: './consulate.component.html',
  styleUrls: ['./consulate.component.scss'],
  standalone: true,
  imports: [ImageCarouselComponent]
})
export class ConsulateComponent {
  consulateImages: CarouselImage[] = [
    {
      src: 'assets/images/billon_consul1.jpg',
      alt: 'Consulat du Sultanat d\'Oman',
      caption: 'Nos locaux consulaires'
    },
    {
      src: 'assets/images/billon_consul2.jpg',
      alt: 'Activités consulaires',
      caption: 'Services aux ressortissants'
    },
    {
      src: 'assets/images/billon_consul3.jpeg',
      alt: 'Rencontres diplomatiques',
      caption: 'Coopération bilatérale'
    },
    {
      src: 'assets/images/vue_abidjan3.jpg',
      alt: 'Ville d\'Abidjan',
      caption: 'Notre belle ville'
    },
    {
      src: 'assets/images/vue_abidjan4.jpg',
      alt: 'Paysage d\'Abidjan',
      caption: 'Horizons d\'avenir'
    }
  ];
}