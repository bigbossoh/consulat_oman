import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { I18nService } from '../../i18n/i18n.service';
import { LanguageCode } from '../../i18n/i18n.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, I18nPipe]
})
export class HeaderComponent {
  isMenuOpen = false;
  readonly availableLanguages: LanguageCode[] = ['fr', 'en', 'ar'];

  constructor(private readonly i18nService: I18nService) {}

  get currentLanguage(): LanguageCode {
    return this.i18nService.currentLanguage;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  setLanguage(language: string): void {
    if (!this.availableLanguages.includes(language as LanguageCode)) {
      return;
    }

    this.i18nService.setLanguage(language as LanguageCode);
    this.closeMenu();
  }
}
