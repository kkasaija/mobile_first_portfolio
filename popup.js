
const liveButton = 'https://kasaija-kenneth.github.io/';
const codeButton = 'https://github.com/Kasaija-Kenneth/mobile_first_portfolio';
const portfolio = [
  {
    name: 'Tonic',
    image: 'images/desk4.svg',
    name2: 'Tonic',
    image2: 'images/desk3.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
  },
  {
    name: 'Multi-Post Stories',
    image: 'images/desk2.svg',
    name2: 'Multi-Post Stories',
    image2: 'images/desk1.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
  },
  {
    name: 'Facebook 360',
    name2: 'Tonic',
    image: 'images/Snapshoot-Portfolio-4.svg',
    image2: 'images/Snapshoot-Portfolio-1.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
  },

  {
    name: 'Uber Navigation',
    name2: 'Multi-Post Stories',
    image2: 'images/Snapshoot-Portfolio-2.svg',
    image: 'images/Snapshoot-Portfolio-3.svg',
    description: 'some text some text some text some text',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'github'],
  },
];

const projectCards = [
  {
    card: 1,
    name: 'Tonic',
    name2: 'Tonic',
    image: 'images/Snapshoot-Portfolio-1.svg',
    image2: 'images/Snapshoot-Portfolio-3.svg',
    description: 'some text some text some text some text',
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['CANOPY', 'Back End Dev', '2015'],
  },
  {
    card: 2,
    name: 'Multi-Post Stories',
    name2: 'Multi-Post Stories',
    image: 'images/Snapshoot-Portfolio-3.svg',
    image2: 'images/Snapshoot-Portfolio-4.svg',
    description: 'feature that all course of a day without spamming theirfriends',
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['FACEBOOK', 'Full Stack Dev', '2015'],
  },
  {
    card: 3,
    name: 'Tonic',
    name2: 'Facebook 360',
    image: 'images/desk1.svg',
    image2: 'images/desk2.svg',
    description: ` Exploring the future of media in Facebook's first Virtual RealityVR.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['FACEBOOK', 'Full Stack Dev', '2015'],
  },
  {
    card: 4,
    name: 'Multi-Post Stories',
    name2: 'Uber Navigation',
    image: 'images/desk4.svg',
    image2: 'images/desk3.svg',
    description: `  A smart assistant to make driving more safe, efficient, and fun by your car.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['UBER', 'Lead Developer', '2018'],
  },
];

const portfolioSection = document.getElementById('portfolio');
portfolioSection.innerHTML = projectCards.map((project, index) => `
<section class="card ${index % 2 !== 0 ? 'image-left' : 'image-right'}">
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
      <div class="">
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
 `,)
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
