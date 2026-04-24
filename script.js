let currentPage = "intro";

function goPage(target) {
    document.getElementById(currentPage).classList.remove("active");
    document.getElementById(target).classList.add("active");
    currentPage = target;
}

document.getElementById("intro").onclick = () => {
    goPage("menu");
};