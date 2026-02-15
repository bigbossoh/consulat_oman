import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { I18nService } from './i18n.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizedTitleStrategy extends TitleStrategy {
  private latestSnapshot: RouterStateSnapshot | null = null;

  constructor(
    private readonly title: Title,
    private readonly i18nService: I18nService
  ) {
    super();

    this.i18nService.language$.subscribe(() => {
      if (this.latestSnapshot) {
        this.updateTitle(this.latestSnapshot);
      }
    });
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.latestSnapshot = snapshot;

    const titleKey = this.buildTitle(snapshot);
    if (!titleKey) {
      return;
    }

    this.title.setTitle(this.i18nService.translate(titleKey));
  }
}
