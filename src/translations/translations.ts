// Disables `unexpected template string expression` warning for translations: `${variable}`
/* eslint-disable no-template-curly-in-string */




// Disclaimer: A colleague figured this out and I'm trying to make some sense of it. The result was my idea, though!
type Translations = {
  [keys: string]: string[] | Translations // A translations object is either the text array we want, or a nested translation object
}

type TranslationPaths<T> = { // TranslationPaths requires a type parameter 
  [K in keyof T]: T[K] extends Translations // What's in type T? Does what we receive by indexing with K grab something of the Translations type, meaning it's an object with keys?
  ? TranslationPaths<T[K]> // We only need this to nest what it's given in a new type. Recursiveness handles the layers 
  : string // We found an array in the function below. Join the keys with a dot and give the <Translate /> component the string it wants - it'll chose from the array
}

// Receive Translations object (just the one we write below), previous path to this point, return the monster type above when done
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



// *** //



const translations = {
  language: {
    frenchModalTitle: [
      "Note: I'm not fluent in French", // Both are English by intent 
      "Note: I'm not fluent in French"
    ],
    frenchModalBody: [
      "These translations come from Google. I accept no responsibility for oddity",
      "These translations come from Google. I accept no responsibility for oddity"
    ]
  }
}

export const translationPaths = recursivelyFindPathsInTranslations(translations)
export default translations
