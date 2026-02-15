import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LanguageCode, TranslationDictionary } from './i18n.types';
import { translations } from './translations';

const LANGUAGE_STORAGE_KEY = 'oman-consulat-language';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  readonly supportedLanguages: LanguageCode[] = ['fr', 'en', 'ar'];

  private readonly languageSubject = new BehaviorSubject<LanguageCode>(this.resolveInitialLanguage());

  readonly language$ = this.languageSubject.asObservable();

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.applyLanguageAttributes(this.languageSubject.value);
  }

  get currentLanguage(): LanguageCode {
    return this.languageSubject.value;
  }

  setLanguage(language: LanguageCode): void {
    if (!this.supportedLanguages.includes(language) || language === this.currentLanguage) {
      return;
    }

    this.languageSubject.next(language);
    this.applyLanguageAttributes(language);
    this.persistLanguage(language);
  }

  translate(key: string): string {
    return (
      this.findValue(translations[this.currentLanguage], key) ??
      this.findValue(translations.fr, key) ??
      key
    );
  }

  isRtl(language: LanguageCode = this.currentLanguage): boolean {
    return language === 'ar';
  }

  private resolveInitialLanguage(): LanguageCode {
    const persistedLanguage = this.getPersistedLanguage();
    if (persistedLanguage) {
      return persistedLanguage;
    }

    if (typeof navigator === 'undefined') {
      return 'fr';
    }

    const browserLanguage = navigator.language.toLowerCase();
    const matchingLanguage = this.supportedLanguages.find((lang) => browserLanguage.startsWith(lang));

    return matchingLanguage ?? 'fr';
  }

  private getPersistedLanguage(): LanguageCode | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }

    let persisted: string | null = null;
    try {
      persisted = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch {
      return null;
    }

    if (!persisted) {
      return null;
    }

    return this.supportedLanguages.includes(persisted as LanguageCode)
      ? (persisted as LanguageCode)
      : null;
  }

  private persistLanguage(language: LanguageCode): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage errors (private mode, storage restrictions, etc.).
    }
  }

  private applyLanguageAttributes(language: LanguageCode): void {
    this.document.documentElement.lang = language;
    this.document.documentElement.dir = this.isRtl(language) ? 'rtl' : 'ltr';
  }

  private findValue(dictionary: TranslationDictionary, key: string): string | undefined {
    const parts = key.split('.');
    let currentValue: unknown = dictionary;

    for (const part of parts) {
      if (!currentValue || typeof currentValue !== 'object' || !(part in currentValue)) {
        return undefined;
      }

      currentValue = (currentValue as Record<string, unknown>)[part];
    }

    return typeof currentValue === 'string' ? currentValue : undefined;
  }
}
