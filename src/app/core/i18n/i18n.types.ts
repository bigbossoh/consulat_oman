export type LanguageCode = 'fr' | 'en' | 'ar';

export type TranslationValue = string | TranslationDictionary;

export interface TranslationDictionary {
  [key: string]: TranslationValue;
}
