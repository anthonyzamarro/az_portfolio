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
  // {
  //   "name": "WageFinder",
  //   "image": "images/wagefinder-image-medium_3x.png",
  //   "url": "https://www.wagefinder.today/",
  //   "description": "A mobile-only app that helps IT workers find out what they're worth."
  // },
  // {
  //   "name": "Arcade Game",
  //   "image": "images/arcade_game-medium_3x.png",
  //   "url": "https://anthonyzamarro.github.io/Arcade-Game/",
  //   "description": "Imagine the classic 'Frogger' game, but with \
  //     bugs instead of trucks."
  // },
  {
    "name": "Local Weather",
    "image": "images/local_weather-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/az-local-weather/",
    "description": "See your local weather with this simple app!"
  },
  // {
  //   "name": "Eat: Boston",
  //   "image": "images/boston_foursquare1-medium_3x.png",
  //   "url": "https://anthonyzamarro.github.io/neighborhood_map/",
  //   "description": "A Google map that uses the Foursquare API  \
  //     to show you what great restaurants are in Boston."
  // },
  {
    "name": "Twitch TV",
    "image": "images/twitch_tv-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/twitch/twitch.html",
    "description": "See what players are playing now on Twitch."
  },
  {
    "name": "Wikipedia Viewer",
    "image": "images/wikipedia_viewer-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/Wikipedia-Viewer/wikipeda.html",
    "description": "A search bar that finds Wikipedia articles for you!"
  },
  {
    "name": "Random Quotes",
    "image": "images/random_quotes-medium_3x.png",
    "url": "https://anthonyzamarro.github.io/quote-machine/quote.html",
    "description": "Get inspired by my random quote generator!"
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
          <div class="project-description">
          </div>
          <img class="project-image" src="${project.image}">
          <a class="project-link" href="${project.url}" target="_blank"></a>
        </li>`
      );
  });
}

buildProjectList()

// SLOW SCROLL
const aboutNav = document.getElementById('about-nav');
const about = document.querySelector('.about');
const skillsNav = document.getElementById('skills-nav');
const skills = document.querySelector('.skills-section');
const projectsNav = document.getElementById('projects-nav');
const projectsSection = document.querySelector('.projects');
const eduNav = document.getElementById('education-nav');
const eduSection = document.querySelector('.education');
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











