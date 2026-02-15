import { LanguageCode, TranslationDictionary } from './i18n.types';
import { frMessages } from './messages-fr';
import { enMessages } from './messages-en';
import { arMessages } from './messages-ar';

export const translations: Record<LanguageCode, TranslationDictionary> = {
  fr: frMessages,
  en: enMessages,
  ar: arMessages
};
