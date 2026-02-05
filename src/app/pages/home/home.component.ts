import { Component } from '@angular/core';
import { ImageCarouselComponent } from '../../shared/components/image-carousel/image-carousel.component';

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ImageCarouselComponent]
})
export class HomeComponent {
  heroImages: CarouselImage[] = [
    {
      src: 'assets/images/billon_consul3.jpeg',
      alt: 'Rencontres diplomatiques',
      caption: 'Coopération bilatérale'
    },
    {
      src: 'assets/images/billon_consul1.jpg',
      alt: 'Consulat du Sultanat d\'Oman',
      caption: 'Nos locaux consulaires'
    },
    {
      src: 'assets/images/vue_Oman4.jpg',
      alt: 'Montagnes d\'Oman',
      caption: 'Paysages omanais'
    },
    {
      src: 'assets/images/vue-abidjan1.jpg',
      alt: 'Ville d\'Abidjan',
      caption: 'Notre belle capitale'
    },
    {
      src: 'assets/images/vue_Oman1.jpg',
      alt: 'Patrimoine omanais',
      caption: 'Architecture traditionnelle'
    }
  ];
}