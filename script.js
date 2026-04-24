let currentPage = "intro";

window.onload = () => {
    document.getElementById("loader").style.display = "none";
};

function goPage(target) {
    document.getElementById(currentPage).classList.remove("active");
    document.getElementById(target).classList.add("active");
    currentPage = target;
}

document.getElementById("intro").onclick = () => {
    goPage("menu");
};

function openProject() {
    goPage("project-detail");
}