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
    // construction: [
    //   "Under active construction",
    //   "En construction active"
    // ]
    construction: [
      "Down for renovations. Come back later",
      "Vers le bas pour rénovations. Revenez plus tard"
    ]
  },
  splash: {
    title: [
      "Kris Goorhuis",
      "Kris Goorhuis",
    ],
    // subtitle: [
    //   "Developer | Hobbyist Native, C#, and Python Developer | Freelance Writer",
    //   "Développeur Web | Développeur amateur Natif, C# et Python | Rédacteur indépendant"
    // ],
    // description: [
    //   "Self-taught developer specialized in React and GraphQL, learning Nest. Highly practiced in quitting caffeine.",
    //   "Développeur autodidacte spécialisé en React et GraphQL, learning Nest. Très pratiqué pour arrêter la caféine."
    // ],
    subtitle: [
      "Web Developer | Hobbyist Native, C#, and Python Developer | Freelance Writer",
      "Développeur Web | Développeur amateur Natif, C# et Python | Rédacteur indépendant"
    ],
    description: [
      "Hi! I took the function out of this site. It used to be my resume. Come back later enough and it'll be something cool",
      "Salut! J'ai retiré la fonction de ce site. C'était mon CV. Reviens assez tard et ce sera quelque chose de cool"
    ],
    callOne: [
      "See shareable work",
      "Voir le travail partageable",
    ],
    callTwo: [
      "See Github instead",
      "Voir Github à la place",
    ]
  },
  projects: {
    buttons: {
      viewLive: [
        "Live",
        "Direct",
      ],
      viewCode: [
        "Github",
        "Github",
      ]
    },
    native: {
      name: [
        "React Native - SpaceX Browser etc.",
        "React Native - SpaceX Browser etc.",
      ],
      description: [
        "Exploratory React Native projects, from simple ports of existing desktop code to fully stack-navigated, platform-exploiting, API heavy SpaceXData browsers. Also makes use of modern querying technology (React Query).",
        "Projets exploratoires React Native, des simples ports de code de bureau existant aux navigateurs SpaceXData à navigation complète, exploitant la plate-forme et lourds d'API. La technologie d'interrogation moderne a été utilisée pour traiter les données."
      ],
    },
    corporate: {
      name: [
        "Corporate Work",
        "Travail en entreprise",
      ],
      descriptionOne: [
        "A year and a half of professional automotive marketing tool construction. Cleared out available bugs/issues tickets, migrated enormous feature code to modern style, tech, and standards, spearheaded a greenfield project while documenting new technology implementations and implications, coordinated with another developer on the architecting and followthrough of the Next Big Thing.",
        "Un an et demi de construction d'outils professionnels de marketing automobile. Suppression des tickets de bogues/problèmes disponibles, migration d'un énorme code de fonctionnalités vers un style, une technologie et des normes modernes, a dirigé un projet entièrement nouveau tout en documentant les nouvelles implémentations et implications technologiques, en coordination avec un autre développeur sur l'architecture et le suivi de la Prochaine Grande Chose."
      ],
      descriptionTwo: [
        "No links to things that aren't mine to share here.",
        "Aucun lien vers des choses qui ne m'appartiennent pas à partager ici.",
      ]
    },
    life: {
      name: [
        "Game of Life",
        "Le jeu de la vie"
      ],
      description: [
        "John Conway's Game of Life. Click tiles to generate life, watch it age, and fiddle with the parameters of its existence. Complex state flow and an intentful eye on semantic HTML.",
        "Le jeu de la vie de John Conway. Cliquez sur les tuiles pour générer de la vie, la regarder vieillir et jouer avec les paramètres de son existence. Flux d'états complexe et un œil attentif sur le HTML sémantique."
      ],
    },
    movieBuddy: {
      name: [
        "Movie Buddy (maybe)",
        "Copain de cinéma (peut-être)"
      ],
      description: [
        "Movie suggestion engine. Uses React & Redux to wire up The Movie Database's API, run user selections through a suggestion algorithm, and display recommendations.",
        "Moteur de suggestion de films. Utilise React & Redux pour connecter l'API de The Movie Database, exécuter les sélections des utilisateurs via un algorithme de suggestion et afficher les recommandations."
      ],
    },
    minesweeper: {
      name: [
        "Minesweeper",
        "Dragueur de mines"
      ],
      description: [
        "Full replication in C# and Windows Presentation Foundation. Features customizable area and mine density, flagging, and custom ASCII art.",
        "Réplication complète en C# et Windows Presentation Foundation. Comprend une zone personnalisable et une densité de mines, un marquage et un art ASCII personnalisé."
      ],
    },
    beer: {
      name: [
        "Beer Style Guide",
        "Guide des styles de bière"
      ],
      description: [
        "Terse React mapping a single large JSON object. Custom scratch-configured webpack integrating SASS and Babel.",
        "Terse React mappant un seul grand objet JSON. Webpack personnalisé à configuration scratch intégrant SASS et Babel."
      ],
    },
    dashboard: {
      name: [
        "Content Dashboard",
        "Tableau de bord de contenu"
      ],
      description: [
        "A lightly styled but technically noteworthy content aggregation site. Collates data from different APIs, in different formats, into a single iterable array, and persistently stores preferences.",
        "Un site d'agrégation de contenu au style léger mais techniquement remarquable. Rassemble les données de différentes API, dans différents formats, dans un seul tableau itérable et stocke de manière persistante les préférences."
      ],
    },
    chat: {
      name: [
        "Chat App",
        "Application de chat"
      ],
      description: [
        "My first foray into React. It integrates a bespoke MongoDB database, stores chat history, and allows for private conversations, notifications, and login-free unique IDs.",
        "Ma première incursion dans React. Il intègre une base de données MongoDB sur mesure, stocke l'historique des discussions et permet des conversations privées, des notifications et des identifiants uniques sans connexion."
      ],
    },
    viz: {
      name: [
        "Temperature Visualization",
        "Visualisation de la température"
      ],
      description: [
        "Another colossal JSON object pulled apart and mapped, this time presented with the D3 visualization library.",
        "Un autre objet JSON colossal séparé et cartographié, cette fois présenté avec la bibliothèque de visualisation D3."
      ],
    },
    snake: {
      name: [
        "Snake Game",
        "Jeu de Serpent"
      ],
      description: [
        "An early javascript passion project - a recreation of the classic snake game. Includes selectable stages, score counter, and, most importantly, your character is patterned after Noodle the coral snake from Snake Pass.",
        "Un premier projet de passion javascript - une recréation du jeu de serpent classique. Comprend des étapes sélectionnables, un compteur de score et, plus important encore, votre personnage est calqué sur Noodle le serpent corail de Snake Pass."
      ],
    },
    eddy: {
      name: [
        "Copy of The Eddy's old site",
        "Copie de l'ancien site de The Eddy"
      ],
      description: [
        "Using someone else's designs as a mock, this is a recreation using original CSS and assets",
        "Utilisant le travail de quelqu'un d'autre comme plus ou moins une simulation, il s'agit d'une récréation utilisant des CSS et des ressources d'origine"
      ],
    },
    unity: {
      name: [
        "Secret Unity Things",
        "Choses secrètes de l'unité"
      ],
      description: [
        "A hobby project that may end up being sold. A private-for-now playground for C# and the Unity engine I jump back into when time allows.",
        "Un projet de passe-temps qui peut finir par être vendu. Un terrain de jeu privé pour le moment pour C# et le moteur Unity dans lequel je retourne quand le temps le permet."
      ],
    },
  },
  language: {
    frenchModalTitle: [
      "Note: I'm not yet fluent in French", // Both are English by intent 
      "Note: I'm not yet fluent in French"
    ],
    frenchModalBody: [
      "These translations have been run through Google.",
      "These translations have been run through Google."
    ]
  }
}

export const translationPaths = recursivelyFindPathsInTranslations(translations)
export default translations
