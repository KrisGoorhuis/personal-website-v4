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
  toolbar: {
    title: [
      "Kris G",
      "Kris G"
    ],
    construction: [
      "Under active construction",
      "Under active construction"
    ]
  },
  splash: {
    title: [
      "Kris Goorhuis Title",
      "Kris Goorhuis Title",
    ],
    subtitle: [
      "Front End Web Developer | Hobbyist Native Developer | Freelance Writer",
      "Front End Web Developer | Hobbyist Native Developer | Freelance Writer"
    ],
    description: [
      "Self-taught developer specialized in React, Redux, and Typescript, actively exploring React Native, with ambitions of becoming full-stack. Highly practiced in quitting caffeine.",
      "Self-taught developer specialized in React, Redux, and Typescript, actively exploring React Native, with ambitions of becoming full-stack. Highly practiced in quitting caffeine."
    ],
    callOne: [
      "See shareable work",
      "See shareable work",
    ],
    callTwo: [
      "See Github instead",
      "See Github instead",
    ]
  },
  projects: {
    buttons: {
      viewLive: [
        "Live",
        "Live",
      ],
      viewCode: [
        "Github",
        "Github",
      ]
    },
    corporate: {
      name: [
        "Corporate Work",
        "Corporate Work",
      ],
      description: [
        "A year and a half of professional automotive marketing tool construction. Cleared out available bugs/issues tickets, migrated enormous feature code to modern style, tech, and standards, spearheaded a greenfield project while documenting new technology implementations and implications, coordinated with another developer on the architecting and followthrough of the next big thing.",
        "A year and a half of professional automotive marketing tool construction. Cleared out available bugs/issues tickets, migrated enormous feature code to modern style, tech, and standards, spearheaded a greenfield project while documenting new technology implementations and implications, coordinated with another developer on the architecting and followthrough of the next big thing."
      ],
    },
    life: {
      name: [
        "Game of Life",
        "Game of Life"
      ],
      description: [
        "John Conway's Game of Life. Click tiles to generate life, watch it age, and fiddle with the parameters of its existence. Complex state flow and an intentful eye on semantic HTML.",
        "John Conway's Game of Life. Click tiles to generate life, watch it age, and fiddle with the parameters of its existence. Complex state flow and an intentful eye on semantic HTML."
      ],
    },
    movieBuddy: {
      name: [
        "Movie Buddy (maybe)",
        "Movie Buddy (maybe)"
      ],
      description: [
        "Movie suggestion engine. Uses React & Redux to wire up The Movie Database's API, run user selections through a suggestion algorithm, and display recommendations.",
        "Movie suggestion engine. Uses React & Redux to wire up The Movie Database's API, run user selections through a suggestion algorithm, and display recommendations."
      ],
    },
    minesweeper: {
      name: [
        "Minesweeper",
        "Minesweeper"
      ],
      description: [
        "Full replication in C# and Windows Presentation Foundation. Features customizable area and mine density, flagging, and smiley faces.",
        "Full replication in C# and Windows Presentation Foundation. Features customizable area and mine density, flagging, and smiley faces."
      ],
    },
    beer: {
      name: [
        "Beer Style Guide",
        "Beer Style Guide"
      ],
      description: [
        "Terse React mapping a single large JSON object. Custom scratch-configured webpack integrating SASS and Babel.",
        "Terse React mapping a single large JSON object. Custom scratch-configured webpack integrating SASS and Babel."
      ],
    },
    dashboard: {
      name: [
        "Content Dashboard",
        "Content Dashboard"
      ],
      description: [
        "A lightly styled but technically noteworthy content aggregation site. Collates data from different APIs, in different formats, into a single iterable array, and persistently stores preferences.",
        "A lightly styled but technically noteworthy content aggregation site. Collates data from different APIs, in different formats, into a single iterable array, and persistently stores preferences."
      ],
    },
    chat: {
      name: [
        "Chat App",
        "Chat App"
      ],
      description: [
        "My first foray into React. It integrates a MongoDB database of my own make, storing chat history and allowing for private conversations, notifications, and login-free unique IDs.",
        "My first foray into React. It integrates a MongoDB database of my own make, storing chat history and allowing for private conversations, notifications, and login-free unique IDs."
      ],
    },
    viz: {
      name: [
        "Temperature Visualization",
        "Temperature Visualization"
      ],
      description: [
        "Another colossal JSON object pulled apart and mapped. This time presented with the D3 visualization library.",
        "Another colossal JSON object pulled apart and mapped. This time presented with the D3 visualization library."
      ],
    },
    snake: {
      name: [
        "Snake Game",
        "Snake Game"
      ],
      description: [
        "An early javascript passion project - a recreation of the classic snake game. Includes selectable stages, score counter, and, most importantly, your character is patterned after Noodle the coral snake.",
        "An early javascript passion project - a recreation of the classic snake game. Includes selectable stages, score counter, and, most importantly, your character is patterned after Noodle the coral snake."
      ],
    },
    eddy: {
      name: [
        "Copy of The Eddy's old site",
        "Copy of The Eddy's old site"
      ],
      description: [
        "Using someone else's work as more or less a mock, this is a recreation using original CSS and assets",
        "Using someone else's work as more or less a mock, this is a recreation using original CSS and assets"
      ],
    },
    unity: {
      name: [
        "Secret Unity Things",
        "Secret Unity Things"
      ],
      description: [
        "A hobby project that may end up being sold. A private-for-now playground for C# and the Unity engine I jump back into when time allows.",
        "A hobby project that may end up being sold. A private-for-now playground for C# and the Unity engine I jump back into when time allows."
      ],
    },
  },
  language: {
    frenchModalTitle: [
      "Note: I'm not fluent in French", // Both are English by intent 
      "Note: I'm not fluent in French"
    ],
    frenchModalBody: [
      "These translations have been run through Google. I accept no responsibility for oddity.",
      "These translations have been run through Google. I accept no responsibility for oddity."
    ]
  }
}

export const translationPaths = recursivelyFindPathsInTranslations(translations)
export default translations
