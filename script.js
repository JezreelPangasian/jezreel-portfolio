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

    if (type === "mvc") {
        content.innerHTML = `
            <h2>MVC Calculator</h2>
            <p><b>Goal:</b> Calculator using MVC</p>
            <p><b>Tech:</b> Java</p>
        `;
    }

    if (type === "cafe") {
        content.innerHTML = `
            <h2>Cafe Mangement System</h2>
            <p><b>Goal::</b> Management cafe operations</p>
            <p><b>Tech:</b> Python, </p>
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

const particles = document.querySelector(".particles");

for (let i = 0; i < 20; i++) {
    const p = document.createElement("span");
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 6 + Math.random() * 6 + "s";
    particles.appendChild(p);
}

function openProject(type) {
    const content = document.getElementById("projectContent");

    if (type === "task") {
        content.innerHTML = `
            <h2>MVC Calculator</h2>
            <p><b>Goal:</b> To create a calculator following the MVC pattern</p>
            <p><b>Tech:</b> Java</p>
            <p><b>Result:</b> CHANGE</p>
        `;
    }

    if (type === "task") {
        content.innerHTML = `
            <h2>Cafe Management System</h2>
            <p><b>Goal:</b> To create a comprehensive cafe management system</p>
            <p><b>Tech:</b> Python, </p>
            <p><b>Result:</b> CHANGE</p>
        `;
    }

    goPage("project-detail");
}
