const list = document.querySelector(".cards-wrapper");
const maps = document.querySelector(".maps-wrapper");
const relics = document.querySelector(".relics-wrapper");

fetch("http://localhost:3000/smite-gods")
  .then((myData) => myData.json())
  .then((jsonData) => createCard(jsonData));

function createCard(jsonData) {
  for (let i = 0; i < jsonData.length; i++) {
    list.innerHTML += `
        <div class="cards">
          <img src="${jsonData[i].image}">
          <h3 class="name">${jsonData[i].name}</h3>
        </div>
        
        
    `;
  }
}

fetch("http://localhost:3000/smite-relic")
  .then((myData) => myData.json())
  .then((jsonData1) => createCard2(jsonData1));

function createCard2(jsonData1) {
  for (let r = 0; r < jsonData1.length; r++) {
    relics.innerHTML += `
    <div class="cards">
          <img src="${jsonData1[r].image}">
          <h3 class="name">${jsonData1[r].name}</h3>
          
        </div>
          
    `;
  }
}

fetch("http://localhost:3000/smite-maps")
  .then((myData1) => myData1.json())
  .then((jsonData2) => createCard1(jsonData2));

function createCard1(jsonData2) {
  for (let p = 0; p < jsonData2.length; p++) {
    maps.innerHTML += `
        <div class="cards1">
          <img src="${jsonData2[p].image}">
          <h3 class="name1">${jsonData2[p].name}</h3>
        </div>
         
    `;
  }
}

//for de search  bar to work, we need an event listener that listens for a keyup event on the input field and then calls the function search() when this happens.
function searchItems() {
  const searchInput = document.getElementById('keyword').value.toLowerCase().trim();
  const items = document.querySelectorAll('.cards'); // Update to target .cards

  items.forEach(item => {
    const itemName = item.querySelector('.name');
    const itemNameText = itemName.textContent.toLowerCase();

    if (searchInput === "") {
      // No need to manipulate classes if search input is empty
      item.style.display = '';
    } else {
      if (itemNameText.includes(searchInput)) {
        item.style.display = ''; // Display the item if it matches the search query
      } else {
        item.style.display = 'none'; // Hide the item if it doesn't match
      }
    }
  });
}


// Define global variables
let godsListStart = 0;
let totalGods = 0;

// Function to fetch the total number of gods
function getTotalGods() {
  fetch("http://localhost:3000/smite-gods")
    .then((response) => response.json())
    .then((myData) => {
      totalGods = myData.length;
      displayGodsCards(); // Display gods after fetching total
    });
}

// Function to display Gods
function displayGodsCards() {
  fetch("http://localhost:3000/smite-gods")
    .then((response) => response.json())
    .then((myData) => {
      list.innerHTML = ""; // Clear previous cards

      for (
        let i = godsListStart;
        i < godsListStart + 10 && i < myData.length; i++) {
        const god = myData[i];
        const item = document.createElement("div");
        item.classList.add("cards");
        item.innerHTML = `
          <img src="${god.image}" alt="${god.name}" />
          <h3 class="name">${god.name}</h3>
        `;
        list.appendChild(item);
      }

      // Disable/Enable pagination buttons based on list position
      nextGodsBtn.disabled = godsListStart >= totalGods - 10;
      prevGodsBtn.disabled = godsListStart === 0;
    });
}

// Initial display
getTotalGods();

// Event listeners for pagination buttons
const nextGodsBtn = document.querySelector(".next-gods");
const prevGodsBtn = document.querySelector(".prevuis-gods");

nextGodsBtn.addEventListener("click", function () {
  godsListStart += 10;
  displayGodsCards();
});

prevGodsBtn.addEventListener("click", function () {
  godsListStart -= 10;
  if (godsListStart < 0) {
    godsListStart = 0;
  }
  displayGodsCards();
});