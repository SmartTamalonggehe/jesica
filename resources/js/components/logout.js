import axios from "axios";

const click_logout = document.getElementById("click-logout");

const handleLogout = () => {
    click_logout.addEventListener("click", () => {
        axios
            .post("/logout")
            .then((res) => {
                window.location.href = "/";
            })
            .catch((err) => {
                console.log(err);
            });
    });
};

if (click_logout) {
    handleLogout();
}
