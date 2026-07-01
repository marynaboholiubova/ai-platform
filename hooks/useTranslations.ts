import { getTranslations } from "@/i18n";

export function useTranslations(language: string = "en") {
  return getTranslations(language);
}