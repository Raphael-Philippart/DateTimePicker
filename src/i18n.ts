import us from "./locales/us.json";
import fr from "./locales/fr.json";

/**
 * An object containing translations for different languages.
 * @type {Object.<string, any>}
 */
const translations: { [key: string]: any } = {
  us,
  fr,
};

/**
 * Retrieves translations for a specified language.
 * If translations for the requested language are not available, the default (English) translations are used.
 * If the list of years in the translations is empty or undefined, a list of years centered around the current year is generated.
 *
 * @param {string} lang - The language for which translations are requested. Example: 'US' or 'FR'.
 * @returns {any} The translations for the specified language. If the language is not found, the default translations are returned.
 */
export const getTranslation = (lang: string): any => {
  // Retrieves translations for the specified language, or the default translations if the language is not found.
  const translation = translations[lang] || translations["us"];

  // Checks if the list of years is available and not empty; otherwise, generates a list of years.
  if (!translation.years || translation.years.length === 0) {
    const currentYear = new Date().getFullYear();
    translation.years = Array.from({ length: 101 }, (_, i) => currentYear - 50 + i);
  }

  return translation;
};
