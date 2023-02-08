import { getDataKawasan } from "./../getData";
const kawasan = document.getElementById("kawasan");
const menu_kawasan = document.getElementById("menu-kawasan");
const menu_navbar = document.getElementById("menu-navbar");
const menuKawasan = async () => {
    const polygon = await getDataKawasan();
    // convert and group
    let grouped = polygon
        .map((item) => {
            item.nm_kawasan = item.nm_kawasan.toLowerCase();
            return item;
        })
        .reduce((acc, item) => {
            if (!acc[item.nm_kawasan]) {
                acc[item.nm_kawasan] = [];
            }
            acc[item.nm_kawasan].push(item);
            return acc;
        }, {});

    let groupedArr = Object.values(grouped);
    let isiMenu = `<div class="col-12 -m-3">
                            <a href="/kawasan">
                                <p class="my-hover cursor-pointer">
                                    Keseluruhan
                                </p>
                            </a>
                    </div>`;
    groupedArr.forEach((group) => {
        const koordinat_id = group.map((item) => item.koordinat_id);
        isiMenu += ` <div class="col-12 -m-3">
                        <p class="text-wrap text-capitalize cursor-pointer my-hover my-click" data-array=[${koordinat_id}]>
                            ${group[0].nm_kawasan}
                        </p>
                    </div>`;
    });
    kawasan.innerHTML = isiMenu;

    // cari my click
    const my_click = document.getElementsByClassName("my-click");
    for (let i = 0; i < my_click.length; i++) {
        my_click[i].addEventListener("click", function () {
            const dataAtribut = this.dataset.array; // access data-array
            const arrDataAtribut = JSON.parse(dataAtribut);
            window.location.href = `/kawasan?koordinat_id=[${arrDataAtribut}]`;
        });
    }
};

if (menu_navbar) {
    menuKawasan();
    menu_kawasan.addEventListener("click", (event) => {
        const grandParent = event.target.parentNode;
        const menu = grandParent.querySelector(".my-menu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });
}
