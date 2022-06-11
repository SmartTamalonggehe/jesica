import Toastify from "toastify-js";
const list_koordinat = document.getElementById("list-koordinat");

const koordinatValid = () => {
    if (list_koordinat) {
        const longitude = document.getElementById("longitude");
        const latitude = document.getElementById("latitude");
        const longitude_value = longitude.value;
        const latitude_value = latitude.value;
        // check if longitude is decimal number or not (ex: -140.23456789)
        if (longitude_value.match(/^-?\d+\.?\d*$/)) {
            // check if latitude is decimal number or not (ex: -140.23456789)
            if (latitude_value.match(/^-?\d+\.?\d*$/)) {
                // check if longitude is between -180 and 180
                if (longitude_value >= -180 && longitude_value <= 180) {
                    // check if latitude is between -90 and 90
                    if (latitude_value >= -90 && latitude_value <= 90) {
                        return true;
                    } else {
                        Toastify({
                            text: "Latitude tidak boleh lebih dari 90",
                            duration: 3000,
                            close: true,
                            gravity: "top",
                            position: "right",
                            backgroundColor:
                                "linear-gradient(to right, #f44336, #f44336)",
                            stopOnFocus: true,
                            onClick: () => {
                                latitude.focus();
                            },
                        }).showToast();
                        return false;
                    }
                } else {
                    Toastify({
                        text: "Longitude tidak boleh lebih dari 180",
                        duration: 3000,
                        close: true,
                        gravity: "top",
                        position: "right",
                        backgroundColor:
                            "linear-gradient(to right, #f44336, #f44336)",
                        stopOnFocus: true,
                        onClick: () => {
                            longitude.focus();
                        },
                    }).showToast();
                    return false;
                }
            } else {
                Toastify({
                    text: "Latitude harus berupa angka",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "right",
                    backgroundColor:
                        "linear-gradient(to right, #f44336, #f44336)",
                    stopOnFocus: true,
                    onClick: () => {
                        latitude.focus();
                    },
                }).showToast();
                return false;
            }
        } else {
            Toastify({
                text: "Longitude harus berupa angka",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "linear-gradient(to right, #f44336, #f44336)",
                stopOnFocus: true,
                onClick: () => {
                    longitude.focus();
                },
            }).showToast();
            return false;
        }
    }
    return true;
};

export default koordinatValid;
