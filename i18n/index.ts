import en from "./en";

export const translations = {
  en,
};

export type Language = keyof typeof translations;

export function getTranslations(language: string) {
  return translations[language as Language] ?? translations.en;
}