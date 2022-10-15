/* eslint-disable no-unused-vars */
// Application popup both on mobile and Desktop
const portfolio = [
  {
    name: 'To Do List',
    image: 'images/todo.PNG',
    name2: 'To Do List',
    image2: 'images/todo.PNG',
    description: 'Add your tasks.Organize your life.Achieve more every day with this simple yet powerful task manager!!',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
    liveLink: 'https://kasaija-kenneth.github.io/To-Do-List/dist/',
    sourceLink: 'https://github.com/Kasaija-Kenneth/To-Do-List/tree/interactive'
  },
  {
    name: 'Online Event',
    image: 'images/conference.png',
    name2: 'Online Event',
    image2: 'images/conference.png',
    description: 'An Online conference / Event website',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
    liveLink: 'https://kasaija-kenneth.github.io/east_africa_software_developers_symposium2022/',
    sourceLink: 'https://github.com/Kasaija-Kenneth/east_africa_software_developers_symposium2022',
  },
  {
    name: 'Book Store App',
    name2: 'Book Store App',
    image: 'images/bookapp.png',
    image2: 'images/bookapp.png',
    description: `Track your reading by storing all the books you've read before`,
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
    liveLink: 'https://kasaija-kenneth.github.io/ES6-bookApp/',
    sourceLink: 'https://github.com/Kasaija-Kenneth/ES6-bookApp/tree/modular',
  },

  {
    name: 'Uber Navigation',
    name2: 'Multi-Post Stories',
    image2: 'images/desk4.svg',
    image: 'images/Snapshoot-Portfolio-4.svg',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
     been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
     type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
       printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of 
       the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it
        1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum
         is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
           it 1960s with the relea`,
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
  },
];

// Cards for both desktop and Mobile
const projectCards = [
  {
    card: 1,
    name: 'To Do List',
    name2: 'To Do List',
    image: 'images/todo.PNG',
    image2: 'images/todo.PNG',
    description: 'Add your tasks.Organize your life.Achieve more every day with this simple yet powerful task manager!',
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['CANOPY', 'Back End Dev', '2015'],
  },
  {
    card: 2,
    name: 'Online Event',
    name2: 'Online Event',
    image: 'images/conference.png',
    image2: 'images/conference.png',
    description: 'An Online conference / Event website',
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['FACEBOOK', 'Full Stack Dev', '2015'],
  },
  {
    card: 3,
    name: 'Book Store App',
    name2: 'Book Store App',
    image: 'images/bookapp.png',
    image2: 'images/bookapp.png',
    description: `Track your reading by storing all the books you've read before`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['FACEBOOK', 'Full Stack Dev', '2015'],
  },
  {
    card: 4,
    name: 'Multi-Post Stories',
    name2: 'Uber Navigation',
    image: 'images/Snapshoot-Portfolio-4.svg',
    image2: 'images/desk4.svg',
    description: ' A smart assistant to make driving more safe, efficient, and fun by your car.',
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['UBER', 'Lead Developer', '2018'],
  },
];

const portfolioSection = document.getElementById('portfolio');
portfolioSection.innerHTML = projectCards.map((project, index) => ` 
<section class="${index % 2 !== 0 ? 'image-left' : 'image-right'}">
  <div class="content-right">
    <img class="mobileCard" src="${project.image}" alt="Tonic image" />
    <img class="desktopCard" src="${project.image2}" alt="Nature image"/>
  </div>
  <div class="content-left">
    <h2 class="mobileheadline">${project.name}</h2>
    <div class="">
      <h2 class="desktopheadline">${project.name2}</h2>
      <div id="profs" >
        <h3 id="cannopy">${project.specifics[0]}</h3>
        <img id="bullet" src="images/desk1.svg" alt=""/>
        <h3 class="profList">${project.specifics[1]}</h3>
        <img  id="bullet2"src="images/desk2.svg" alt=""/>
        <h3 class="profList">${project.specifics[2]}</h3>
      </div>
      <div id="prof2">
        <h3  id="cannopy">${project.specifics2[0]}</h3>
        <img src="images/desk3.svg" alt="Counter icon"/>
        <h3 class="">${project.specifics2[1]}</h3>
        <img src="images/desk4.svg" alt="Counter icon"/>
        <h3 class="">${project.specifics2[2]}</h3>
      </div>
      <div class="cont">
        <p class="tonicm-p">${project.description}</p>
        <p class="tonicd-p">${project.description}</p>
        <ul class="button">
          <li>${project.technologies[0]}</li>
          <li>${project.technologies[1]}</li>
          <li>${project.technologies[2]}</li>
        </ul>
        <ul class="buttonx1">
        <li>${project.technologies[0]}</li>
        <li>${project.technologies[1]}</li>
        <li>${project.technologies[2]}</li>
        </ul>
        <button data-modal=".modal" class="hidden33" type="button">
          See Project
        </button>
      </div>            
    </div>
  </div>
</section>
 `)
  .join('');

/* Desktop popup */

const sectionWrap = document.querySelector('#sectionWrap');
const mobileDetail = document.querySelector('.mobileDetail');
const desktopDetail = document.querySelector('.desktop');
const mobileWrap = document.querySelector('#mobileWrap');
const deskHeading = document.querySelector('.deskHeading');
const deskList1 = document.querySelector('.deskList1');
const deskList2 = document.querySelector('.deskList2');
const deskList3 = document.querySelector('.deskList3');
const deskList4 = document.querySelector('.deskList4');
const deskpara = document.querySelector('.deskpara');
const closeButton = document.querySelector('.closeProj');
const openButtons = document.querySelectorAll('[data-modal]');
const languageButtons = document.querySelector('.deskButtonlist');
const liveLink = document.querySelector('#liveLink');
const sourceLink = document.querySelector('#sourceLink');
const deskImag = document.querySelector('.deskImag');

function createWindow(index) {
  languageButtons.innerHTML = '';
  deskHeading.innerHTML = portfolio[index].name;
  deskpara.innerHTML = portfolio[index].description;
  portfolio[index].technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.innerHTML = technology;
    languageButtons.appendChild(li);
  });
  liveLink.href = portfolio[index].liveLink;
  sourceLink.href = portfolio[index].sourceLink;
  deskImag.src = portfolio[index].image;
  deskList1.innerHTML = 'CANOPY';
  deskList2.innerHTML = 'BACK END DEV';
  deskList3.innerHTML = '2015';
  liveLink.href = liveButton;
  sourceLink.href = codeButton;
}

function openWindow(modal) {
  sectionWrap.style.display = 'block';
  mobileWrap.style.display = 'block';
  desktopDetail.style.display = 'block';
}

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modal);
    openWindow(modal);
    createWindow(Array.prototype.indexOf.call(openButtons, button));
  });
});

function closeall() {
  mobileWrap.style.display = 'none';
  sectionWrap.style.display = 'none';
}

const mobileHeading = document.querySelector('.mobileHeading');
const mobList1 = document.querySelector('.mobList1');
const mobList2 = document.querySelector('.mobList2');
const mobList3 = document.querySelector('.mobList3');
const mobImg = document.querySelector('.mobImag');
const mobilepara = document.querySelector('.mobilepara');
const openButtonsMobile = document.querySelectorAll('[data-modal]');
const languageButtonsMobile = document.querySelector('.mobButtonlist');
const liveLinkM = document.querySelector('#liveLinkM');
const sourceLinkM = document.querySelector('#sourceLinkM');

function createWindowMobile(index) {
  languageButtonsMobile.innerHTML = '';
  mobileHeading.innerHTML = portfolio[index].name2;
  mobilepara.innerHTML = portfolio[index].description;
  portfolio[index].technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.innerHTML = technology;
    languageButtonsMobile.appendChild(li);
  });
  liveLink.href = portfolio[index].liveLink;
  sourceLink.href = portfolio[index].sourceLink;
  mobImg.src = portfolio[index].image2;
}

const ListItems = {
  itemA: 'CANOPY',
  itemB: 'BACK END DEV',
  itemC: '2015',
};

mobList1.innerHTML = ListItems.itemA;
mobList2.innerHTML = ListItems.itemB;
mobList3.innerHTML = ListItems.itemC;

function openWindowMobile(modal) {
  modal.classList.add('active');
  sectionWrap.classList.add('active');
  sectionWrap.style.display = 'none';
  mobileWrap.style.display = 'block';
  desktopDetail.style.display = 'none';
}

openButtonsMobile.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modal);
    openWindow(modal);
    createWindowMobile(Array.prototype.indexOf.call(openButtons, button));
  });
});
