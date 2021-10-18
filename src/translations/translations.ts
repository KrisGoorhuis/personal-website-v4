// Disables `unexpected template string expression` warning for translations: `${variable}`
/* eslint-disable no-template-curly-in-string */



type Translations = {
  [keys: string]: string[] | Translations // A translations object is either the text we want, or a nested translation object
}

type TranslationPaths<T> = { // TP requires a type parameter 
  [K in keyof T]: TranslationPaths<T[K]> // K's are keys in objects of type T. Each of them is 
}

const recursivelyFindPathsInTranslations = <T extends Translations>(object: T, previousKeys: string[] = []): TranslationPaths<T> => {
  const obj: any = { ...object }

  for (const key of Object.keys(obj)) {
    const keys = [...previousKeys, key]

    if (Array.isArray(obj[key])) {
      obj[key] = keys.join(".")
    }

    else {
      obj[key] = recursivelyFindPathsInTranslations(obj[key], keys)
    }
  }

  return obj
}

const translations = {
  stuff: {
    common: ["string", "two"]

  }
}

// translationPaths.
export const translationPaths = recursivelyFindPathsInTranslations(translations)
export default translations
