const buttons =
    document.querySelectorAll(".expand-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
            button.nextElementSibling;

        const arrow =
            button.querySelector(".expand-arrow");

        content.classList.toggle("active");
        arrow.classList.toggle("active");

    });

});

const modal = document.getElementById("modal");
const backdrop = document.getElementById("modal-backdrop");
const modalBody = document.getElementById("modal-body");

function openModal(project) {

    let content = "";

    if (project === "fightnight") {

        content = `
        <h2>Fight Night</h2>

        <p>
            A co-op fighting game where each player controls different body parts.
        </p>

        <div class="modal-video">

            <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/QqGXax4zuXY"
                title="Fight Night"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>

        </div>

        <div class="modal-links">
            <a href="https://github.com/yooooop/Seattle" target="_blank">
                View GitHub Repository
            </a>
        </div>
        `;
    }
    else if (project === "nutri") {

        content = `
            <h2>Nutri</h2>

            <p>
                AI nutrition tracking application with barcode scanning, cloud backend,
                and AI-powered dietary analysis.
            </p>

            <div class="modal-video">
                <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/5gax5bqA0Tc"
                    title="Nutri"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        `;
    }

    else if (project === "rhythm") {

        content = `
            <h2>Rhythm</h2>

            <p>
                Rhythm-based boss fight game developed during a one-week game jam,
                focused on responsive combat and timing.
            </p>

            <div class="modal-video">
                <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/vuVvUrQwfoQ"
                    title="Rhythm"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="modal-links">
                <a href="https://github.com/yooooop/rhythm"
                target="_blank">
                    View GitHub Repository
                </a>
            </div>
        `;
    }

    else if (project === "eye") {

        content = `
            <h2>Eye for an Eye</h2>

            <p>
                AI combat prototype exploring enemy behavior, combat interactions,
                and gameplay mechanics.
            </p>

            <div class="modal-video">
                <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/JQmeCv-fKV8?controls=0"
                    title="Eye for an Eye"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="modal-links">
                <a href="https://github.com/yooooop/Running"
                target="_blank">
                    View GitHub Repository
                </a>
            </div>
        `;
    }

    else if (project === "bio") {

        content = `
            <h2>Bioinformatics Research</h2>

            <p>
                Deep learning research focused on peptide sequence classification
                using CNN and Transformer architectures in PyTorch.
            </p>

            <div class="modal-links">
                <a href="https://github.com/yooooop/Bioinformatics"
                target="_blank">
                    View GitHub Repository
                </a>
            </div>
        `;
    }

    else if (project === "golf") {
        content = `
            <h2>Puttzzle</h2>

            <p>
                Sliding Puzzle Mini Golf Game
            </p>

            <div class="modal-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/an7OpUbuzUU?si=1Gg_2RGhS-3F_gu5"
                    title="Eye for an Eye"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="modal-links">
                <a href="https://github.com/yooooop/Niagara"
                target="_blank">
                    View GitHub Repository
                </a>
            </div>
        `;
    
    }

    modalBody.innerHTML = content;

    modal.classList.add("active");
    backdrop.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
    backdrop.classList.remove("active");
}

/* FEATURE PREVIEW (KEEP ONLY ONE VERSION) */
function playPreview(card) {
    const hover = card.querySelector(".hover");
    const staticImg = card.querySelector(".static");

    if (hover) hover.style.opacity = "1";
    if (staticImg) staticImg.style.opacity = "0";
}

function pausePreview(card) {
    const hover = card.querySelector(".hover");
    const staticImg = card.querySelector(".static");

    if (hover) hover.style.opacity = "0";
    if (staticImg) staticImg.style.opacity = "1";
}

const projects = {
    fightnight: {
        title: "Fight Night",
        desc: "A Co-Op Fighthing Game where each player takes control of separate body parts.\nWork together to defeat a live behaviour changing AI!",
        img: "assets/projects/thumbFN.jpg",
        gif: "assets/projects/hoverFN.gif"
    },
    nutri: {
        title: "Nutri",
        desc: "A Nutrition Tracking App with a built in barcode scanner and AI that warns you on possible dietary restrictions and allergy hazards",
        img: "assets/projects/thumbNutri.jpg",
        gif: "assets/projects/hoverNutri.gif"
    },
    rhythm: {
        title: "Rhythm",
        desc: "A rhythm game built with 5 other people, time your attacks and dodges right to defeat The Dog!",
        img: "assets/projects/thumbRhythm.jpg",
        gif: "assets/projects/hoverRhythm.gif"
    },
    bio: {
        title: "Machine Learning and Artificial Intelligence for Genes and Proteins",
        desc: "Bioinformatic projects done, from homologous gene findings to protein prediction, the future is exciting!",
        img: "assets/projects/thumbBio.jfif",
        gif: "assets/projects/hoverBio.gif"
    },
    eye: {
        title: "Eye for an Eye",
        desc: "A Buckshot Roulette inspired strategic game of skill and risk, wager your organs and don't die, Good",
        img: "assets/projects/thumbEye.jpg",
        gif: "assets/projects/hoverEye.gif"
    }
};

let currentProject = "fightnight";

window.addEventListener("DOMContentLoaded", () => {
    setActiveProject("fightnight");
});

function setActiveProject(id, element) {

    currentProject = id;

    const p = projects[id];

    document.getElementById("featured-title").innerText = p.title;
    document.getElementById("featured-desc").innerText = p.desc;

    document.getElementById("featured-img").src = p.img;
    document.getElementById("featured-gif").src = p.gif;

    document.querySelectorAll(".project-card.square")
    .forEach(c => c.classList.remove("active"));

    if (!element) {
        element = document.querySelector(
            `.project-card.square[onclick*="${id}"]`
        );
    }

    if (element) {
        element.classList.add("active");
    }
}

function openFeaturedModal() {
    openModal(currentProject);
}