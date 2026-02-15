import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { I18nPipe } from '../../i18n/i18n.pipe';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [RouterModule, RouterLink, I18nPipe]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
