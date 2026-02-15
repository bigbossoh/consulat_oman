import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from '../../../core/i18n/i18n.pipe';

interface CarouselImage {
  src: string;
  altKey: string;
  captionKey?: string;
}

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  standalone: true,
  imports: [CommonModule, I18nPipe]
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  @Input() images: CarouselImage[] = [];
  @Input() autoPlay: boolean = true;
  @Input() interval: number = 5000;
  @Input() showCaptions: boolean = true;
  @Input() height: string = '400px';

  currentIndex = 0;
  private intervalId?: number;

  ngOnInit(): void {
    if (this.autoPlay && this.images.length > 1) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.stopAutoPlay();
    this.intervalId = window.setInterval(() => {
      this.next();
    }, this.interval);
  }

  stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev(): void {
    this.currentIndex = this.currentIndex === 0 
      ? this.images.length - 1 
      : this.currentIndex - 1;
  }

  goTo(index: number): void {
    this.currentIndex = index;
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  get currentImage(): CarouselImage {
    return this.images[this.currentIndex];
  }
}
