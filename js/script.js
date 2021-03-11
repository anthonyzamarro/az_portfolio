// HAMBURGER ICON AND NAVBAR
const hamburger = document.querySelector('.hamburger');
const hamburgerNav = document.querySelector('.hamburger-nav');
const nav = document.querySelector('.navbar');
// HAMBURGER ICON AND NAVBAR MOBILE
const hamburgerMobile = document.querySelector('#hamburger-mobile');
const hamburgerMobileNav = document.querySelector('#hamburger-mobile-nav');
const navbarMobile = document.querySelector('#navbar-mobile');

// toggle hamburger and nav, show
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hide-hamburger');
  nav.classList.toggle('show');
});
// toggle hamburger and nav, hide
hamburgerNav.addEventListener('click', () => {
  hamburger.classList.toggle('hide-hamburger');
  nav.classList.toggle('show');
});

// PROJECT CAROUSEL
const projects = [
  // {
  //   "name": "WageFinder",
  //   "alt": "image of wagefinder app",
  //   "image": "images/wagefinder-image-medium_3x.png",
  //   "url": "https://www.wagefinder.today/",
  //   "description": "A mobile-only app that helps IT workers find out what they're worth.",

  // },
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
    "url": "https://anthonyzamarro.github.io/fcc-local-weather/",
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
  },
  {
    "name": "Recipe Box",
    "alt": "image of recipe box app",
    "image": "images/recipe-box-medium_3x.png",
    "url": "https://fcc--recipe-box.herokuapp.com/",
    "description": "A simple app that lets you create and store recipes"
  },
  {
    "name": "Exercise Tracker",
    "alt": "image of exercise tracker",
    "image": "images/exercise-track-medium_3x.png",
    "url": "https://fcc-ex-trac.glitch.me/",
    "description": "Create a user and track your exercises with this Node.js App"
  },
  {
    "name": "Issue Tracker",
    "alt": "image of issue tracker",
    "image": "images/issue-tracker-medium_3x.png",
    "url": "https://fcc-issue-tracks.glitch.me/",
    "description": "Track issues for your projects with this Node.js App"
  }
];

const buildProjectList = () => {
  const projectList = document.querySelector('#project-list');
  // const projectListItem = document.createElement('li');
  projects.forEach((project) => {
    projectList.insertAdjacentHTML('afterbegin',
      `
      <li class="project">
          <a class="project-link" href="${project.url}" target="_blank">
            <img class="project-image" src="${project.image}" alt="${project.alt}">
            <div class="project-description">
              <div class="project-name">${project.name}</div>
              <span>${project.description}</span>
            </div>
          </a>
        </li>`
      );
  });
}

buildProjectList();

// SLOW SCROLL
const navItem = document.querySelectorAll('.nav-item');
const slowScrolls = () => {
  navItem.forEach(item => {
    item.addEventListener('click', (e) => {
      let sectionId = document.querySelector(`#${e.target.dataset.id}`);
      sectionId.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      // close mobile nav if user clicks nav item on mobile
      if (window.innerWidth < 560) {
        Object.assign(navbarMobile.style, 
          {
            'right': '-305px',
            'transition': 'all 1s ease'
          }
        );
        Object.assign(hamburgerMobile.style, {'visibility': 'visible'});
      }
    });
  })
}

slowScrolls();

const showMobileNav = () => {
  // open nav
  hamburgerMobile.addEventListener('click', (e) => {
    Object.assign(navbarMobile.style, 
      {
        'right': '0',
        'transition': 'all 1s ease'
      }
    );
    Object.assign(hamburgerMobile.style, {'visibility': 'hidden'});
  });
  // close nav
  hamburgerMobileNav.addEventListener('click',  (e) => {
    Object.assign(navbarMobile.style, 
      {
        'right': '-305px',
        'transition': 'all 1s ease'
      }
    );
    Object.assign(hamburgerMobile.style, {'visibility': 'visible'});
  });

  // document.addEventListener('click', (e) => {
  //   if (e.target.classList.contains('nav-m') || e.target.classList.contains('hamburger-mobile li')) {
  //     console.log(e.target.classList.contains('nav-m'));
  //     Object.assign(navbarMobile.style,
  //     {
  //       'right': '-305px',
  //       'transition': 'all 1s ease'
  //     }
  //   );
  //   }
  // });
}

showMobileNav();


const dynamicDate = () => { document.querySelector('#date').innerHTML = new Date().getFullYear(); }

dynamicDate();




