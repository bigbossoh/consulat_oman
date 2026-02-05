import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    ContactFormComponent,
    ImageCarouselComponent
  ],
  exports: [
    ContactFormComponent,
    ImageCarouselComponent
  ]
})
export class SharedModule { }
