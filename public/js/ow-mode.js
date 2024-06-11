const mapImg = document.querySelector(".map-image");
const mapDiscription = document.querySelector(".map-discription");

const flashpointBtn = document.querySelector(".flashpoint-btn");
const pushBtn = document.querySelector(".push-btn");
const hybridBtn = document.querySelector(".hybrid-btn");

// start programma

mapImg.src = "./Image/ow-images/flashpoint.webp";
mapDiscription.innerHTML = `<p>For each round a flashpoint is marked. Both teams need to fight for that flashpoint. The team that captured 3 points wins the game.</p>`;

// werking van de buttons

let mapNumber = 1;

flashpointBtn.addEventListener("click", function () {
    mapNumber = 1;
    flashpointBtn.style.backgroundColor = "#0470a2"
    pushBtn.style.backgroundColor = "#57caff";
    hybridBtn.style.backgroundColor = "#57caff";
    mapImg.src = "./Image/ow-images/flashpoint.webp";

    mapDiscription.innerHTML = ``;
    mapDiscription.innerHTML = `<p>For each round a flashpoint is marked. Both teams need to fight for that flashpoint. The team that captured 3 points wins the game.</p>`;
})

pushBtn.addEventListener("click", function () {
    mapNumber = 2;
    pushBtn.style.backgroundColor = "#0470a2"
    flashpointBtn.style.backgroundColor = "#57caff";
    hybridBtn.style.backgroundColor = "#57caff";
    mapImg.src = "./Image/ow-images/push.webp";

    mapDiscription.innerHTML = ``;
    mapDiscription.innerHTML = `<p>Help the robot push the objective to the endpoint</p>`;
})

hybridBtn.addEventListener("click", function () {
    mapNumber = 2;
    hybridBtn.style.backgroundColor = "#0470a2"
    flashpointBtn.style.backgroundColor = "#57caff";
    pushBtn.style.backgroundColor = "#57caff";
    mapImg.src = "./Image/ow-images/hybrid.webp";

    mapDiscription.innerHTML = ``;
    mapDiscription.innerHTML = `<p>There is an attacking team and a defending team. The attackers need to capture the point first before pushing the playload to the endpoint. The defending team needs to prevent this from happening.</p>`;
})