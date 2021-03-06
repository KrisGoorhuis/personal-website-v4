
type Translations = {
   [keys:string] : string[] | Translations
 }
 
 type TranslationPaths<T extends Translations> = {
   [K in keyof T] : T[K] extends Translations ? TranslationPaths<T[K]> : string
 }
 

const recursivelyFindPathsInTranslations = <T extends Translations>(object:T, previousKeys:string[]=[]):TranslationPaths<T> => {
   const obj: any = {...object}
 
   for(const key of Object.keys(obj)){
     const keys = [...previousKeys, key]
 
     if(Array.isArray(obj[key])){
       obj[key] = keys.join(".")
     }
 
     else{
       obj[key] = recursivelyFindPathsInTranslations(obj[key], keys)
     }
   }
 
   return obj
 }
 


 [K in keyof T] : T[K] extends Translations ? TranslationPaths<T[K]> : string // K's are keys in objects of type T. Is T[K] 
