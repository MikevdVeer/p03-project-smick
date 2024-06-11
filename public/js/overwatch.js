fetch("http://localhost:3000/overwatch-heros")
  .then((response) => response.json())
  .then((myData) => {
    const itemBox = document.querySelector(".item-box");

    for (let i = 0; i < myData.length; i++) {
      itemBox.innerHTML += `
        <div class="card">
            <h1>${myData[i].name}</h1>
            <img src="${myData[i].imgUrl}" alt="${myData[i].name}">
            <h2>Role: ${myData[i].role}</h2>
            <h3>${myData[i].description}</h3>
        </div>
        `
    }
  })

const menuIcon = document.querySelector('.menu-icon');
const overlayMenu = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', function () {
  overlayMenu.classList.toggle('open');
});

overlayMenu.addEventListener('click', function (event) {
  if (!event.target.closest('ul')) {
    overlayMenu.classList.remove('open');
  }
});