function openMenu() {
    let element = document.getElementById("nav-item-container");
    if (!element.classList.contains("nav-item-container-open")) {
        element.classList.add("nav-item-container-open")
    } else {
        element.classList.remove("nav-item-container-open")
    }
}