import beerBrowser from './assets/images/beer-browser.png'
import chatApp from './assets/images/chat-app.png'
import dataViz from './assets/images/data-visualization.png'
import snakeGame from './assets/images/snake-game.png'
import eddyCopy from './assets/images/the-eddy-copy.png'
import unityGame from './assets/images/unity-game.png'
import minesweeper from './assets/images/minesweeper.png'
import movieBuddy from './assets/images/movie-buddy.png'
import gameOfLife from './assets/images/game-of-life.png'
import dashboard from './assets/images/dashboard.png'
import placeholder from './assets/images/placeholder.jpg'
import corporate from './assets/images/code2.jpg'
import native from './assets/images/nativeUpdated.jpg'

import { translationPaths } from './translations/translations'
import { Project } from './model'


export const Projects: Project[] = [

   {
      name: translationPaths.projects.native.name,
      description: translationPaths.projects.native.description,
      imageLarge: native,
      githubLink: "https://github.com/KrisGoorhuis/",
      liveLink: null,
      technologies: ['React Native', 'Redux', 'React-Query', 'Typescript']
   },
   {
      name: translationPaths.projects.life.name,
      description: translationPaths.projects.life.description,
      imageLarge: gameOfLife,
      githubLink: "https://github.com/KrisGoorhuis/game-of-life-redux",
      liveLink: "https://kg-game-of-life-redux.herokuapp.com/",
      technologies: ['React', 'Redux', 'Semantic HTML']
   },
   {
      name: translationPaths.projects.movieBuddy.name,
      description: translationPaths.projects.movieBuddy.description,
      imageLarge: movieBuddy,
      githubLink: "https://github.com/KrisGoorhuis/movie-buddy",
      liveLink: "https://kg-movie-app.herokuapp.com/",
      technologies: ['React', 'Redux', 'APIs', 'AJAX']
   },
   {
      name: translationPaths.projects.minesweeper.name,
      description: translationPaths.projects.minesweeper.description,
      imageLarge: minesweeper,
      githubLink: "https://github.com/KrisGoorhuis/WPF-Minesweeper",
      liveLink: null,
      technologies: ['C#', 'WPF']
   },
   {
      name: translationPaths.projects.beer.name,
      description: translationPaths.projects.beer.description,
      imageLarge: beerBrowser,
      githubLink: "https://github.com/KrisGoorhuis/beer-browser",
      liveLink: "https://beer-style-guide.herokuapp.com/",
      technologies: ['React', 'Babel', 'Webpack', 'REST API']
   },
   {
      name: translationPaths.projects.dashboard.name,
      description: translationPaths.projects.dashboard.description,
      imageLarge: dashboard,
      githubLink: "https://github.com/KrisGoorhuis/dashboard-to-nerdiness",
      liveLink: "https://dashboard-to-nerdiness.herokuapp.com/",
      technologies:['React.js', 'Redux', 'REST API', 'AJAX']
   },
   {
      name: translationPaths.projects.chat.name,
      description: translationPaths.projects.chat.description,
      imageLarge: chatApp,
      githubLink: "https://github.com/KrisGoorhuis/chat-app",
      liveLink: null,
      technologies: ['React.js', 'REST API', 'Node.js', 'MongoDB']
   },
   {
      name: translationPaths.projects.viz.name,
      description: translationPaths.projects.viz.description,
      imageLarge: dataViz,
      githubLink: "https://github.com/KrisGoorhuis/data-visualization-temperature",
      liveLink: "https://krisg-data-visualization-temp.herokuapp.com/",
      technologies: ['D3.js']
   },
   {
      name: translationPaths.projects.snake.name,
      description: translationPaths.projects.snake.description,
      imageLarge: snakeGame,
      githubLink: "https://github.com/KrisGoorhuis/snake-game",
      liveLink: "https://krisg-snake-game.herokuapp.com/",
      technologies: ['Javascript', 'Canvas']
   },
   {
      name: translationPaths.projects.unity.name,
      description: translationPaths.projects.unity.description,
      imageLarge: unityGame,
      githubLink: null,
      liveLink: null,
      technologies: ['C#', 'Unity']
   },
   {
      name: translationPaths.projects.eddy.name,
      description: translationPaths.projects.eddy.description,
      imageLarge: eddyCopy,
      githubLink: "https://github.com/KrisGoorhuis/the-eddy-copy",
      liveLink: "https://krisg-theeddy-practicecopy.herokuapp.com/",
      technologies: ['SASS']
   },
]

export const CorporateProject: Project = {
   name: translationPaths.projects.corporate.name,
   description: translationPaths.projects.corporate.descriptionOne,
   descriptionTwo: translationPaths.projects.corporate.descriptionTwo,
   imageSmall: placeholder,
   imageLarge: corporate,
   githubLink: null,
   liveLink: null,
   technologies: ['React.js', 'Redux (Thunk, Toolkit)', 'Typescript', 'Material UI', 'REST APIs', ]
}