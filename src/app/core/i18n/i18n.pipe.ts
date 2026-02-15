import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { I18nService } from './i18n.service';

@Pipe({
  name: 'i18n',
  standalone: true,
  pure: false
})
export class I18nPipe implements PipeTransform, OnDestroy {
  private readonly languageSubscription: Subscription;

  constructor(
    private readonly i18nService: I18nService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.languageSubscription = this.i18nService.language$.subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }

  transform(key: string | null | undefined): string {
    if (!key) {
      return '';
    }

    return this.i18nService.translate(key);
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
