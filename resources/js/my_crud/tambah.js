const tools = require("./tools");
const Toastify = require("toastify-js");
const axios = require("axios");

import validKoordinat from "./../components/valid_koordinat";

const list_koordinat = document.getElementById("list-koordinat");
const refresh = document.getElementById("refresh");

function tampilForm() {
    document.getElementById("judul_form").innerText = "From Tambah Data";
    document.getElementById("tombolForm").innerText = "Simpan Data";
    if (tools.route === "nilai") {
        document.querySelector(".gambar_lama").innerHTML = "";
    }

    $(".tampilModal").modal("show");
}

const btnTambah = document.getElementById("tambah");
if (btnTambah) {
    btnTambah.addEventListener("click", function () {
        if (tools.route === "koordinat" || tools.route === "geomorfologi") {
            costumeForm.formPolygon();
        }
        tampilForm();
        list_koordinat.innerHTML = "";
        tools.save_method = "add";
        $("#id").val("");
        $(".inputReset").val("");
        $(".selectReset").val("").trigger("change");
    });
}

function formBiasa() {
    $("#formKu").on("submit", function (e) {
        e.preventDefault();
        const cekValid = validKoordinat();
        if (!cekValid) {
            return 0;
        }

        let id = $("#id").val();
        let dataKu = $("#formKu").serialize();
        let url;
        let method;
        if (tools.save_method == "add") {
            url = `${tools.uri}`;
            method = "POST";
        } else {
            url = `${tools.uri}/:id`;
            url = url.replace(":id", id);
            method = "PUT";
        }
        axios({
            method: method,
            url: url,
            data: dataKu,
        }).then(function (response) {
            const backgroundColor =
                response.data.type === "error"
                    ? "red"
                    : "linear-gradient(to right, #00b09b, #96c93d)";
            Toastify({
                text: `${response.data.pesan}`,
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor,
                stopOnFocus: true,
                onClick: function () {
                    console.log("Toastify Click");
                },
            }).showToast();
            if (response.data.type === "error") {
                return 0;
            }
            refresh ? refresh.click() : "";
            // reset form
            $("#formKu").trigger("reset");
            $(".selectReset").val("").trigger("change");
            list_koordinat.innerHTML = "";
            if (tools.save_method == "Ubah") {
                $(".tampilModal").modal("hide");
            }
        });
    });
}

function formGambar() {
    $("#formGambar").on("submit", function (e) {
        e.preventDefault();
        let id = $("#id").val();
        let dataKu = new FormData(this);
        if (tools.save_method == "add") {
            url = `${tools.uri}`;
        } else {
            url = `${tools.uri}/:id`;
            url = url.replace(":id", id);
            dataKu.append("_method", "PUT");
        }
        $.ajax({
            url: url,
            type: "POST",
            data: dataKu,
            contentType: false,
            cache: false,
            processData: false,
            success: function (response) {
                toastr[response.type](response.pesan, response.judul);
                if (response.type === "error") {
                    return 0;
                }
                $("#formKu").trigger("reset");
                $(".selectReset").val("").trigger("change");
                resetPicture();
                let oTable = $("#my_table").dataTable();
                oTable.fnDraw(false);
                if (tools.save_method == "Ubah") {
                    $(".tampilModal").modal("hide");
                    tools.save_method = "add";
                }
            },
        }).fail(function (jqXHR, ajaxOptions, thrownError) {
            alert("Error. Server tidak merespon");
        });
    });
}

const resetPicture = () => {
    $(".custom-file-container__image-preview").attr("style", "color: aqua");
    $(".custom-file-container__custom-file__custom-file-control").html(
        `Choose file...
        <span class="custom-file-container__custom-file__custom-file-control__button"> Browse </span>`
    );
};

// Script Tambah & Ubah
if (tools.route === "nilai" || tools.route === "kartumhs") {
    formGambar();
} else {
    formBiasa();
}
