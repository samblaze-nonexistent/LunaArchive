// ================= HERO PAGE =================

const params = new URLSearchParams(window.location.search);
const heroId = Number(params.get("id"));

const hero = heroes.find(h => h.id === heroId);


// ================= SAFETY CHECK =================

if (!hero) {

    document.getElementById("hero-name").textContent =
        "Hero Not Found";

    document.getElementById("tab-content").innerHTML = `
        <h2>❌ Hero Not Found</h2>
        <p>We couldn't find this hero in the LunaArchive database.</p>
    `;

} else {

    // ================= HERO HEADER =================

    document.getElementById("hero-name").textContent =
        hero.name;

    document.getElementById("hero-image").src =
        hero.image;

    document.getElementById("hero-rating").textContent =
        hero.rating;

    document.getElementById("hero-element").textContent =
        hero.element;

    document.getElementById("hero-role").textContent =
        hero.role;


    const content =
        document.getElementById("tab-content");


    // ================= GUIDE =================

    document.getElementById("guide-btn").onclick =
        function () {

            content.innerHTML = `

                <h2>📖 Guide</h2>

                <div class="guide-text">
                    ${hero.guide || hero.tip || "Guide coming soon..."}
                </div>

            `;

        };


    // ================= SKILLS =================

    document.getElementById("skills-btn").onclick =
        function () {

            content.innerHTML = `

                <h2>⚔ Skills</h2>

                <div class="guide-text">
                    ${hero.skills || "⚔ Skill information coming soon..."}
                </div>

            `;

        };


    // ================= TEAMS =================

    document.getElementById("teams-btn").onclick =
        function () {

            let html = `

                <h2>👥 Recommended Team</h2>

                <div class="team-list">

            `;


            if (hero.teams && hero.teams.length > 0) {

                hero.teams.forEach(member => {

                    // Character object
                    if (typeof member === "object") {

                        html += `

                            <button
                                class="team-btn"
                                onclick="location.href='hero.html?id=${member.id}'">

                                ${member.name}

                            </button>

                        `;

                    }

                    // Old string format
                    else {

                        html += `

                            <div class="team-member">

                                ${member}

                            </div>

                        `;

                    }

                });

            } else {

                html += `

                    <p>
                        Team recommendation coming soon!
                    </p>

                `;

            }


            html += `</div>`;

            content.innerHTML = html;

        };


    // ================= EQUIPMENT =================

    document.getElementById("equipment-btn").onclick =
        function () {

            let html = `

                <h2>🗡 Recommended Equipment</h2>

                <div class="equipment-list">

            `;


            if (hero.equipment && hero.equipment.length > 0) {

                hero.equipment.forEach(item => {

                    html += `

                        <div class="equip-item">

                            <img
                                src="${item.image}"
                                alt="${item.name}">

                            <span>
                                ${item.name}
                            </span>

                        </div>

                    `;

                });

            } else {

                html += `

                    <p>
                        Equipment recommendations coming soon!
                    </p>

                `;

            }


            html += `</div>`;

            content.innerHTML = html;

        };


    // ================= DEFAULT TAB =================

    document.getElementById("guide-btn").click();

}