import beerBrowser from 'assets/images/beer-browser.png'
import beerBrowserSmall from 'assets/images/beer-browser-small.jpg'
import chatApp from 'assets/images/chat-app.png'
import chatAppSmall from 'assets/images/chat-app-small.jpg'
import dataViz from 'assets/images/data-visualization.png'
import dataVizSmall from 'assets/images/data-visualization-small.jpg'
import snakeGame from 'assets/images/snake-game.png'
import snakeGameSmall from 'assets/images/snake-game-small.jpg'
import eddyCopy from 'assets/images/the-eddy-copy.png'
import eddyCopySmall from 'assets/images/the-eddy-copy-small.jpg'
import unityGame from 'assets/images/unity-game.png'
import unityGameSmall from 'assets/images/unity-game-small.jpg'
import minesweeper from 'assets/images/minesweeper.png'
import minesweeperSmall from 'assets/images/minesweeper-small.jpg'
import movieBuddy from 'assets/images/movie-buddy.png'
import gameOfLife from 'assets/images/game-of-life.png'
import dashboard from 'assets/images/dashboard.png'
import placeholder from 'assets/images/photos/placeholder.png'

import { translationPaths } from './translations/translations'
import { Project } from './model'




export const Projects: Project[] = [

   // Mobile stuff
   {
      name: translationPaths.projects.life.name,
      description: translationPaths.projects.life.description,
      imageSmall: placeholder,
      imageLarge: gameOfLife,
      githubLink: "https://github.com/KrisGoorhuis/game-of-life-redux",
      liveLink: "https://kg-game-of-life-redux.herokuapp.com/",
      technologies: ['React.js', 'Redux', 'Semantic HTML']
   },
   {
      name: translationPaths.projects.movieBuddy.name,
      description: translationPaths.projects.movieBuddy.description,
      imageSmall: placeholder,
      imageLarge: movieBuddy,
      githubLink: "https://github.com/KrisGoorhuis/movie-buddy",
      liveLink: "https://kg-movie-app.herokuapp.com/",
      technologies: ['React.js', 'Redux', 'API', 'AJAX']
   },
   {
      name: translationPaths.projects.minesweeper.name,
      description: translationPaths.projects.minesweeper.description,
      imageSmall: minesweeperSmall,
      imageLarge: minesweeper,
      githubLink: "https://github.com/KrisGoorhuis/WPF-Minesweeper",
      liveLink: null,
      technologies: ['C#', 'WPF']
   },
   {
      name: translationPaths.projects.beer.name,
      description: translationPaths.projects.beer.description,
      imageSmall: beerBrowserSmall,
      imageLarge: beerBrowser,
      githubLink: "https://github.com/KrisGoorhuis/beer-browser",
      liveLink: "https://beer-style-guide.herokuapp.com/",
      technologies: ['React.js', 'Babel', 'Webpack', 'REST API']
   },
   {
      name: translationPaths.projects.dashboard.name,
      description: translationPaths.projects.dashboard.description,
      imageSmall: placeholder,
      imageLarge: dashboard,
      githubLink: "https://github.com/KrisGoorhuis/dashboard-to-nerdiness",
      liveLink: "https://dashboard-to-nerdiness.herokuapp.com/",
      technologies:['React.js', 'Redux', 'REST API', 'AJAX']
   },
   {
      name: translationPaths.projects.chat.name,
      description: translationPaths.projects.chat.description,
      imageSmall: chatAppSmall,
      imageLarge: chatApp,
      githubLink: "https://github.com/KrisGoorhuis/chat-app",
      liveLink: null,
      technologies: ['React.js', 'REST API', 'Node.js', 'MongoDB']
   },
   {
      name: translationPaths.projects.viz.name,
      description: translationPaths.projects.viz.description,
      imageSmall: dataVizSmall,
      imageLarge: dataViz,
      githubLink: "https://github.com/KrisGoorhuis/data-visualization-temperature",
      liveLink: "https://krisg-data-visualization-temp.herokuapp.com/",
      technologies: ['D3.js']
   },
   {
      name: translationPaths.projects.snake.name,
      description: translationPaths.projects.snake.description,
      imageSmall: snakeGameSmall,
      imageLarge: snakeGame,
      githubLink: "https://github.com/KrisGoorhuis/snake-game",
      liveLink: "https://krisg-snake-game.herokuapp.com/",
      technologies: ['Javascript', 'Canvas']
   },
   {
      name: translationPaths.projects.unity.name,
      description: translationPaths.projects.unity.description,
      imageSmall: unityGameSmall,
      imageLarge: unityGame,
      githubLink: null,
      liveLink: null,
      technologies: ['C#', 'Unity']
   },
   {
      name: translationPaths.projects.eddy.name,
      description: translationPaths.projects.eddy.description,
      imageSmall: eddyCopySmall,
      imageLarge: eddyCopy,
      githubLink: "https://github.com/KrisGoorhuis/the-eddy-copy",
      liveLink: "https://krisg-theeddy-practicecopy.herokuapp.com/",
      technologies: ['SASS']
   },
]