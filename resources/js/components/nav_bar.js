const nav_bar = document.querySelector(".nav-sidebar");

const selector = () => {
    // select a in nav-item and add class active if it's the current page
    const nav_items = document.querySelectorAll(".nav-item a");
    const location = window.location.href;

    nav_items.forEach((item) => {
        if (item.getAttribute("href") == location) {
            item.classList.add("active");
            // check parent of nav-item and add class active if it's the current page
            const parent1 = item.parentElement.parentElement;
            const parent2 = item.parentElement.parentElement.parentElement;
            let parent;
            if (parent1.classList.contains("nav-item-submenu")) {
                parent = parent1;
            } else if (parent2.classList.contains("nav-item-submenu")) {
                parent = parent2;
            }
            // check if parent is nav-item-submenu
            if (parent) {
                parent.classList.add("nav-item-expanded");
                parent.classList.add("nav-item-open");
            }
        }
    });
};

if (nav_bar) {
    selector();
}
