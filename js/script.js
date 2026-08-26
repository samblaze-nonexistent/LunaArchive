const hour = new Date().getHours();

let greeting = "";

if(hour < 12){
    greeting = "🌅 Good Morning, Sword Master!";
}
else if(hour < 18){
    greeting = "☀️ Good Afternoon, Sword Master!";
}
else if(hour < 22){
    greeting = "🌇 Good Evening, Sword Master!";
}
else{
    greeting = "🌙 Burning the midnight oil, Sword Master?";
}

document.getElementById("greeting").textContent = greeting;

const text = document.getElementById("artemis-text");

document.getElementById("home-btn").onclick = function () {
    text.innerHTML =
    "💜 Welcome back! Ready for another adventure?";
};

document.getElementById("heroes-btn").onclick = function () {
    text.innerHTML =
    "⭐ Every hero has unique strengths! Let's find your favorite!";
};

document.getElementById("weapons-btn").onclick = function () {
    text.innerHTML =
    "🗡️ Choosing the right weapon makes a huge difference!";
};

document.getElementById("tier-btn").onclick = function () {
    text.innerHTML =
    "🏆 Tier lists are guides—not rules. Play whoever makes you happy!";
};
function showGuide(id){

    const hero = heroes.find(h => h.id === id);

    document.getElementById("modal-name").textContent =
    "🌸 " + hero.name;

document.getElementById("modal-image").src =
hero.image;

document.getElementById("modal-rating").textContent =
hero.rating;

    document.getElementById("modal-element").innerHTML =
    "<strong>🌊 Element:</strong> " + hero.element;

    document.getElementById("modal-role").innerHTML =
    "<strong>⚔ Role:</strong> " + hero.role;

    document.getElementById("modal-best").innerHTML =
    "<li>✅ " + hero.best + "</li>";

    document.getElementById("modal-tip").textContent =
    hero.tip;

    document.getElementById("guideModal").style.display = "flex";

}

function closeGuide(){

document.getElementById("guideModal").style.display="none";

}


const heroList = document.getElementById("hero-list");

function displayHeroes(list){

heroList.innerHTML = "";

list.forEach(hero => {

heroList.innerHTML += `

<div class="hero-card tier-${hero.tier}">

<img src="${hero.image}">

<h3>${hero.name}</h3>

<p><strong>${hero.rating}</strong></p>

<p>🏛 ${hero.faction}</p>

<div class="badge">

${hero.element}<br>

${hero.class}<br>

${hero.role}

</div>
<button onclick="location.href='hero.html?id=${hero.id}'">

📖 View Guide

</button>

</div>

`;

});

}

displayHeroes(heroes);
const search = document.getElementById("search");
function filterHeroes(type){

  if(type.toLowerCase() === "all"){
    displayHeroes(heroes);
    return;
  }

const filtered = heroes.filter(hero =>
    hero.element.includes(type)
);

    displayHeroes(filtered);

}

search.addEventListener("input", function(){

const keyword = search.value.toLowerCase();

const filtered = heroes.filter(hero =>

hero.name.toLowerCase().includes(keyword)

);

displayHeroes(filtered);

});
const tierList = document.getElementById("tier-list");

function displayTierList(){

    tierList.innerHTML = "";

    const tiers = [
        {
            name: "SS",
            title: "🔥 META / TOP PRIORITY",
            description: "The strongest characters in the current meta.",
            className: "tier-ss"
        },
        {
            name: "S",
            title: "💜 EXCELLENT",
            description: "Extremely strong and useful across many contents.",
            className: "tier-s"
        },
        {
            name: "A",
            title: "🔵 VERY GOOD",
            description: "Strong characters with plenty of useful applications.",
            className: "tier-a"
        },
        {
            name: "B",
            title: "🟣 GOOD",
            description: "Solid choices that perform well in the right teams.",
            className: "tier-b"
        },
        {
            name: "C",
            title: "🟠 AVERAGE",
            description: "Usable characters, but stronger alternatives exist.",
            className: "tier-c"
        },
        {
            name: "D",
            title: "🟢 WEAK",
            description: "Limited usefulness in the current meta.",
            className: "tier-d"
        },
        {
            name: "F",
            title: "⚫ OUTDATED",
            description: "Generally not recommended unless you have no better options.",
            className: "tier-f"
        }
    ];

    tiers.forEach(tier => {

        const characters = heroes.filter(
            hero => hero.tier === tier.name
        );

        tierList.innerHTML += `

        <div class="tier-section ${tier.className}">

            <div class="tier-header">

                <div class="tier-title">
                    <span class="tier-letter">
                        ${tier.name}
                    </span>

                    <div>
                        <h3>${tier.title}</h3>

                        <p>
                            ${tier.description}
                        </p>
                    </div>
                </div>

                <span class="tier-count">
                    ${characters.length} Heroes
                </span>

            </div>


            <div class="tier-row">

                ${
                    characters.length
                    ? characters.map(hero => `

                        <div
                            class="tier-hero"
                            onclick="showGuide(${hero.id})"
                            title="${hero.name}"
                        >

                            <img
                                src="${hero.image}"
                                alt="${hero.name}"
                            >

                            <span>
                                ${hero.name}
                            </span>

                        </div>

                    `).join("")
                    : `
                        <p class="empty-tier">
                            No heroes currently placed here.
                        </p>
                    `
                }

            </div>

        </div>

        `;

    });

}
displayTierList();