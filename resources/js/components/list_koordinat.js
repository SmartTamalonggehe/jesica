const add_koordinat = document.getElementById("add-koordinat");
const remove_koordinat = document.getElementById("remove-koordinat");
const list_koordinat = document.getElementById("list-koordinat");

const inputKoordinat = `<div class="col-6 mt-2 animate__animated animate__bounceInDown">
                            <label for="longitude">Longitude</label>
                            <input type="text" class="form-control inputReset" name="longitude[]" id="longitude"
                                required />
                        </div>
                        <div class="col-6 mt-2 animate__animated animate__bounceInDown">
                            <label for="latitude">Latitude</label>
                            <input type="text" class="form-control inputReset" name="latitude[]" id="latitude"
                                required />
                        </div>`;

const handleClick = () => {
    add_koordinat.addEventListener("click", (e) => {
        console.log("add");
        e.preventDefault();
        list_koordinat.insertAdjacentHTML("beforeend", inputKoordinat);
    });

    remove_koordinat.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("remove");
        // remove 2 last element
        const last_element = list_koordinat.lastElementChild;

        // if there is only one element, don't remove
        if (list_koordinat.children.length > 0) {
            const second_last_element =
                list_koordinat.lastElementChild.previousElementSibling;
            // add class animate__animated animate__bounceOutDown
            last_element.classList.add("animate__animated");
            last_element.classList.add("animate__bounceOutDown");
            second_last_element.classList.add("animate__animated");
            second_last_element.classList.add("animate__bounceOutDown");
            // remove element
            setTimeout(() => {
                list_koordinat.removeChild(last_element);
                list_koordinat.removeChild(second_last_element);
            }, 1000);
        }
    });
};

if (list_koordinat) {
    // style add_koordinat icon
    add_koordinat.style.cursor = "pointer";
    add_koordinat.style.color = "#007bff";
    // style remove_koordinat icon
    remove_koordinat.style.cursor = "pointer";
    remove_koordinat.style.color = "#f71000";
    handleClick();
}
