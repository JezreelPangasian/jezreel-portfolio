let currentPage = "intro";
let soundEnabled = true;

const clickSound = new Audio();

function playClick() {
    if (soundEnabled) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();
        }, 600);

    }, 1200);

    const intro = document.getElementById("intro");

    if (intro) {
        intro.addEventListener("click", () => {
            goPage("menu");
        });
    }
});

function goPage(target) {
    if (target === currentPage) return;
    playClick();
    
    const current = document.getElementById(currentPage);
    const next = document.getElementById(target);

    if (current) current.classList.remove("active");
    if (next) next.classList.add("active");

    currentPage = target;
}

function goBack() {
    goPage("menu");
}

function openProject(type) {
    const content = document.getElementById("projectContent");

    if (type === "task") {
        content.innerHTML = `
        <h2>Task Manager</h2>
        <p><b>Problem:</b> Task execution simulation</p>
        <p><b>Result:</b> Working task tracker</p>
        `;
    }

    if (type === "travel") {
        content.innerHTML = `
        <h2>Travel UI Design</h2>
        <p><b>Problem:</b> Minimal UI design</p>
        <p><b>Result:</b> Clean experience</p>
        `;
    }

    goPage("project-detail");
}

function toggleSound() {
    soundEnabled = !soundEnabled;

    const btn = document.querySelector(".sound-toggle");
    if (btn) {
        btn.textContent = soundEnabled ? "🔊" : "🔇";
    }
}

