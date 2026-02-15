import { Component } from '@angular/core';
import { I18nPipe } from '../../core/i18n/i18n.pipe';
import { ImageCarouselComponent } from '../../shared/components/image-carousel/image-carousel.component';

interface CarouselImage {
  src: string;
  altKey: string;
  captionKey?: string;
}

@Component({
  selector: 'app-consulate',
  templateUrl: './consulate.component.html',
  styleUrls: ['./consulate.component.scss'],
  standalone: true,
  imports: [ImageCarouselComponent, I18nPipe]
})
export class ConsulateComponent {
  consulateImages: CarouselImage[] = [
    {
      src: 'assets/images/billon_consul1.jpg',
      altKey: 'consulate.carousel.billon1.alt',
      captionKey: 'consulate.carousel.billon1.caption'
    },
    {
      src: 'assets/images/billon_consul2.jpg',
      altKey: 'consulate.carousel.billon2.alt',
      captionKey: 'consulate.carousel.billon2.caption'
    },
    {
      src: 'assets/images/billon_consul3.jpeg',
      altKey: 'consulate.carousel.billon3.alt',
      captionKey: 'consulate.carousel.billon3.caption'
    },
    {
      src: 'assets/images/vue-abidjan3.jpg',
      altKey: 'consulate.carousel.abidjan3.alt',
      captionKey: 'consulate.carousel.abidjan3.caption'
    },
    {
      src: 'assets/images/vue-abidjan4.jpg',
      altKey: 'consulate.carousel.abidjan4.alt',
      captionKey: 'consulate.carousel.abidjan4.caption'
    }
  ];
}
