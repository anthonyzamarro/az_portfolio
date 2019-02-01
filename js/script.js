// HAMBURGER ICON AND NAVBAR
const hamburger = document.querySelector('.hamburger');
const hamburgerNav = document.querySelector('.hamburger-nav');
const nav = document.querySelector('.navbar');

// const responsiveNav = () => {
//  if (matchMedia) {
//   const mq = window.matchMedia("(min-width: 700px)");
//   mq.addListener(WidthChange);
//   WidthChange(mq);
//   }
// };
// function WidthChange(mq) {
//   if (mq.matches) {
//     hamburger.style.visibility = 'visible';
//     hamburgerNav.style.visibility = 'visible';
//     nav.style.visibility = 'visible';
//   } else {
//     // window width is less than 700px
//     hamburger.style.visibility = 'hidden';
//     hamburgerNav.style.visibility = 'hidden';
//     nav.style.visibility = 'hidden';
//   }

// }

// responsiveNav();

hamburger.addEventListener('click', () => {
  hamburgerNav.classList.toggle('show-hamburger');
  hamburger.classList.toggle('hide-hamburger');
  nav.classList.toggle('show');
  if (nav.classList.contains('show')) {
    nav.classList.add('nav-sticky');
  }
});

hamburgerNav.addEventListener('click', () => {
  hamburger.classList.toggle('hide-hamburger');
  nav.classList.toggle('show');
});

// PROJECT CAROUSEL

const projects = [
  {
    "name": "WageFinder",
    "alt": "image of wagefinder app",
    "image": "images/wagefinder-image-medium_3x.png",
    "url": "https://www.wagefinder.today/",
    "description": "A mobile-only app that helps IT workers find out what they're worth.",

  },
  {
    "name": "Arcade Game",
    "alt": "image of arcade game app",
    "image": "images/arcade_game-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/Arcade-Game/",
    "description": "Imagine the classic 'Frogger' game, but with \
      bugs instead of trucks."
  },
  {
    "name": "Local Weather",
    "alt": "image of local weather app",
    "image": "images/local_weather-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/az-local-weather/",
    "description": "See your local weather with this simple app!"
  },
  {
    "name": "Eat: Boston",
    "alt": "image of eat: boston app",
    "image": "images/boston_foursquare1-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/neighborhood_map/",
    "description": "A Google map that uses the Foursquare API  \
      to show you what great restaurants are in Boston."
  },
  {
    "name": "Twitch TV",
    "alt": "image of twitch tv app",
    "image": "images/twitch_tv-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/twitch/twitch.html",
    "description": "See what players are playing now on Twitch"
  },
  {
    "name": "Wikipedia Viewer",
    "alt": "image of wikipedia viewer app",
    "image": "images/wikipedia_viewer-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/Wikipedia-Viewer/wikipeda.html",
    "description": "A search bar that finds Wikipedia articles for you!"
  },
  {
    "name": "Random Quotes",
    "alt": "image of random quotes app",
    "image": "images/random_quotes-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/quote-machine/quote.html",
    "description": "Get inspired by my random quote generator!"
  },
  {
    "name": "Markdown Previewer",
    "alt": "image of markdown previewer app",
    "image": "images/markdown-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/FCC-Markdown-Previewer/",
    "description": "Write some Github markdown"
  },
  {
    "name": "Drum Machine",
    "alt": "image of drum machine app",
    "image": "images/drum-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/fcc-drum-machine/",
    "description": "Have some fun with this drum machine"
  },
  {
    "name": "Calculator",
    "alt": "image of calculator app",
    "image": "images/calculator-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/fcc-calculator/",
    "description": "A simple calculator like what you used in school"
  },
  {
    "name": "Pomodoro",
    "alt": "image of pomodoro app",
    "image": "images/pomodoro-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/fcc-pomodoro/",
    "description": "Get some focused work done with this pomodoro"
  }
];

const buildProjectList = () => {
  const projectList = document.querySelector('#project-list');
  // const projectListItem = document.createElement('li');
  projects.forEach((project) => {
    projectList.insertAdjacentHTML('afterbegin',
      `
      <li class="project">
          <div class="project-name">${project.name}</div>
          <a class="project-link" href="${project.url}" target="_blank">
            <img class="project-image" src="${project.image}" alt="${project.alt}">
            <div class="project-description"><span>${project.description}</span></div>
          </a>
        </li>`
      );
  });
}

buildProjectList()

// SLOW SCROLL
const aboutNav = document.getElementById('about-nav');
const about = document.querySelector('.about');
const skillsNav = document.getElementById('skills-nav');
const skills = document.querySelector('.skills');
const projectsNav = document.getElementById('projects-nav');
const projectsSection = document.querySelector('.projects');
// const eduNav = document.getElementById('education-nav');
// const eduSection = document.querySelector('.education');
const contactNav = document.getElementById('contact-nav');
const contact = document.querySelector('.contact');

const slowScrolls = () => {
  aboutNav.addEventListener('click', () => {
    about.scrollIntoView({
      behavior: 'smooth'
    });
  });
  projectsNav.addEventListener('click', () => {
    projectsSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
  contactNav.addEventListener('click', () => {
    contact.scrollIntoView({
      behavior: 'smooth'
    });
  });
  skillsNav.addEventListener('click', () => {
    skills.scrollIntoView({
      behavior: 'smooth'
    });
  });
  // eduNav.addEventListener('click', () => {
  //   eduSection.scrollIntoView({
  //     behavior: 'smooth'
  //   });
  // });
}

slowScrolls()











