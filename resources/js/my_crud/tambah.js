import axios from "axios";
import { toastr, route, save_method, setSaveMethod } from "./tools";
console.log("route", route);

const btn_tambah = document.getElementById("tambah");
btn_tambah.addEventListener("click", function () {
    // show modal data-modal-toggle="defaultModal"
    $(".tampilModal").modal("show");
    // set save_method
    setSaveMethod("tambah");
    // set attribut form
    setForm();
    // reset form
    resetForm();
});

const setForm = () => {
    document.getElementById("judul_form").innerText = "From Tambah Data";
    document.getElementById("tombolForm").innerText = "Simpan Data";
};

const resetForm = () => {
    $(".selectReset").val("").trigger("change");
    $(".inputReset").val("");
    if (save_method !== "tambah") {
        $(".tampilModal").modal("hide");
    }
};

// submit form
document.getElementById("formKu").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    // get data from form
    const data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });

    let method;
    let url;
    if (save_method === "tambah") {
        method = "post";
        url = `/crud/${route}`;
    } else {
        method = "put";
        url = `/crud/${route}/${data.id}`;
    }

    axios({
        method,
        url,
        data,
    })
        .then(function (response) {
            toastr[response.data.type](
                response.data.pesan,
                response.data.judul
            );
            resetForm();
            let oTable = $("#my_table").dataTable();
            oTable.fnDraw(false);
        })
        .catch(function (error) {
            console.log(error);
        });
});
