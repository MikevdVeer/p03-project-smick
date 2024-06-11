
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const overlayMenu = document.querySelector('.overlay-menu');

  // Toggle overlay menu when menu icon is clicked
  menuIcon.addEventListener('click', function () {
    overlayMenu.classList.toggle('open');
  });

  // Close overlay menu when clicked outside of it
  overlayMenu.addEventListener('click', function (event) {
    if (!event.target.closest('ul')) {
      overlayMenu.classList.remove('open');
    }
  });
});

// searching the names in the json file and display it in an html container
function searchInSection() {
  const searchInput = document.getElementById('keyword').value.toLowerCase().trim();
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    const itemName = item.querySelector('.name');
    const itemNameText = itemName.textContent.toLowerCase();

    if (searchInput === "") {
      itemName.classList.remove('uppercase');
      item.style.display = '';
    } else {
      if (itemNameText.includes(searchInput)) {
        itemName.classList.add('uppercase');
        item.style.display = '';
      } else {
        itemName.classList.remove('uppercase');
        item.style.display = 'none';
      }
    }
  });
}


// fetching json champions
fetch("http://localhost:3000/league-of-legends-champions")
  .then((response) => response.json())
  .then((myData) => {
    console.log(myData);
    const Data = document.querySelector('#champs');

    function displayChampsCards(champStart) {
      Data.innerHTML = '';
      for (let champ = 0; champ < 15; champ++) {
        const champs = myData[champStart + champ];

        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
          <img src="${champs.icon}" alt="Champion" />
          <h2 class="name">${champs.name}</h2>
        `;
        item.addEventListener('click', () => {
          displayChampionStats(champs);
        });

        Data.appendChild(item);
      }
    }

    displayChampsCards(0);

    // next and prevuis button displaying champions
    const nextChampBtn = document.querySelector('.next-champs');
    const prevChampBtn = document.querySelector('.prevuis-champs');
    let champsListStart = 0;

    nextChampBtn.addEventListener('click', function () {
      champsListStart += 14;
      displayChampsCards(champsListStart);
    });

    prevChampBtn.addEventListener('click', function () {
      champsListStart -= 14;
      if (champsListStart < 0) {
        champsListStart = 0;
      }
      displayChampsCards(champsListStart);
    });

  });

function displayChampionStats(champion) {
  const modal = document.querySelector(".modal");
  const championStats = document.querySelector(".championStats");

  // display champion stats
  const statsHTML = `
  <div class="stats">
  <h2>${champion.name}</h2>
  <img src="${champion.icon}" alt="Champ-Icon">
  <p>Health: ${champion.stats.hp}</p>
  <p>Armor: ${champion.stats.armor}</p>
  <p>Attack Damage: ${champion.stats.attackdamage}</p>
  </div>
`;

  championStats.innerHTML = statsHTML;

  modal.style.display = "block";

  // Close the modal when the user clicks anywhere outside of the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Close btn
  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
  }
}

// (League of Legends styles) for loop json

fetch('http://localhost:3000/league-of-legends-skins')
  .then(response => response.json())
  .then(data => {
    const imgContainer = document.querySelector('#styles');
    const imgElement = imgContainer.querySelector('img');

    let currentIndex = 0;

    function showNextImage() {
      imgElement.src = data.styles[currentIndex].url;
      imgElement.alt = data.styles[currentIndex].name; // shows the skins name if image failed to load in
      currentIndex = (currentIndex + 1) % data.styles.length;
      setTimeout(() => {
      }, 500);
    }

    showNextImage();

    setInterval(showNextImage, 3000);
  })

// video player for the maps
const video = document.querySelector("#videoPlayer");

const videoSources = [
  "/public/videos/summonersrift.mp4",
  "/public/videos/howlingabyss.mp4",
  "/public/videos/teamfighttactics.mp4"
];
let currentVideoIndex = 0;


video.src = videoSources[currentVideoIndex];

video.addEventListener("ended", function () {

  currentVideoIndex++;
  if (currentVideoIndex >= videoSources.length) {
    currentVideoIndex = 0;
  }

  video.src = videoSources[currentVideoIndex];

  video.load();
  video.play();
});