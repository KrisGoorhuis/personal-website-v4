export enum SupportedLanguageCodes {
   en = "en",
   fr = "fr"
}

export interface Project {
   name: string
   description: string
   descriptionTwo?:string
   imageSmall: string
   imageLarge: string
   githubLink: string | null
   liveLink: string | null
   technologies: string[]
}