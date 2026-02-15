import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nPipe } from '../../core/i18n/i18n.pipe';
import { ImageCarouselComponent } from '../../shared/components/image-carousel/image-carousel.component';

interface CarouselImage {
  src: string;
  altKey: string;
  captionKey?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ImageCarouselComponent, I18nPipe, RouterLink]
})
export class HomeComponent {
  heroImages: CarouselImage[] = [
    {
      src: 'assets/images/billon_consul3.jpeg',
      altKey: 'home.carousel.billon3.alt',
      captionKey: 'home.carousel.billon3.caption'
    },
    {
      src: 'assets/images/billon_consul1.jpg',
      altKey: 'home.carousel.billon1.alt',
      captionKey: 'home.carousel.billon1.caption'
    },
    {
      src: 'assets/images/vue_Oman4.jpg',
      altKey: 'home.carousel.oman4.alt',
      captionKey: 'home.carousel.oman4.caption'
    },
    {
      src: 'assets/images/vue-abidjan1.jpg',
      altKey: 'home.carousel.abidjan1.alt',
      captionKey: 'home.carousel.abidjan1.caption'
    },
    {
      src: 'assets/images/vue_Oman1.jpg',
      altKey: 'home.carousel.oman1.alt',
      captionKey: 'home.carousel.oman1.caption'
    }
  ];
}
