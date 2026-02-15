import { Component } from '@angular/core';
import { I18nPipe } from '../../core/i18n/i18n.pipe';
import { ImageCarouselComponent } from '../../shared/components/image-carousel/image-carousel.component';

interface CarouselImage {
  src: string;
  altKey: string;
  captionKey?: string;
}

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss'],
  standalone: true,
  imports: [ImageCarouselComponent, I18nPipe]
})
export class MissionsComponent {
  landscapeImages: CarouselImage[] = [
    {
      src: 'assets/images/vue_Oman2.jpg',
      altKey: 'missions.carousel.oman2.alt',
      captionKey: 'missions.carousel.oman2.caption'
    },
    {
      src: 'assets/images/vue_Oman3.jpg',
      altKey: 'missions.carousel.oman3.alt',
      captionKey: 'missions.carousel.oman3.caption'
    },
    {
      src: 'assets/images/vue_Oman4.jpg',
      altKey: 'missions.carousel.oman4.alt',
      captionKey: 'missions.carousel.oman4.caption'
    },
    {
      src: 'assets/images/vue_Oman5.jpeg',
      altKey: 'missions.carousel.oman5.alt',
      captionKey: 'missions.carousel.oman5.caption'
    },
    {
      src: 'assets/images/vue_Oman6.jpg',
      altKey: 'missions.carousel.oman6.alt',
      captionKey: 'missions.carousel.oman6.caption'
    }
  ];
}
