import axios from "axios";
import { toastr, save_method, setSaveMethod } from "./tools";

const btn_tambah = document.getElementById("tambah");
if (btn_tambah) {
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
}

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
    const list_koordinat = document.getElementById("list-koordinat");
    if (list_koordinat) {
        list_koordinat.innerHTML = "";
    }
};

// submit form
const formKu = document.getElementById("formKu");
if (formKu) {
    formKu.addEventListener("submit", function (e) {
        e.preventDefault();
        // get data from form with serialize
        const formData = $(this).serialize();
        const data = formData;
        const id_form = document.getElementById("id_form").value;

        let method;
        let url;
        if (save_method === "tambah") {
            method = "post";
            url = `/crud/${route}`;
        } else {
            method = "put";
            url = `/crud/${route}/${id_form}`;
        }

        axios({
            method,
            url,
            data,
        })
            .then(function (response) {
                // return console.log("response", response);
                toastr[response.data.type](
                    response.data.pesan,
                    response.data.judul
                );
                if (response.data.type === "error") {
                    return;
                }
                resetForm();
                if (route == "kawasan") {
                    const btn_refresh = document.getElementById("refresh");
                    btn_refresh.click();
                    return;
                }
                let oTable = $("#my_table").dataTable();
                oTable.fnDraw(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
}

export { resetForm };
