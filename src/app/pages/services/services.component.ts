import { Component } from '@angular/core';
import { I18nPipe } from '../../core/i18n/i18n.pipe';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [I18nPipe]
})
export class ServicesComponent {}
