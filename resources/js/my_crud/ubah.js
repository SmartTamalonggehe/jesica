import { setSaveMethod } from "./tools";

$(document).on("click", ".btn-ubah", function (e) {
    e.preventDefault();
    const href = $(this).data("id");
    axios({
        method: "get",
        url: `/crud/${route}/${href}/edit`,
    })
        .then(function (response) {
            // show modal
            $(".tampilModal").modal("show");
            // set save_method
            setSaveMethod("ubah");
            // set attribut form
            document.getElementById("judul_form").innerText = "From Ubah Data";
            document.getElementById("tombolForm").innerText = "Simpan Data";
            // call formData
            formData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
});

const formData = (data) => {
    if (route == "tutupan") {
        document.getElementById("id_form").value = data.id;
        document.getElementById("nm_tutupan").value = data.nm_tutupan;
    }
    if (route == "kawasan-tutupan") {
        document.getElementById("id_form").value = data.id;
        $("#kawasan-id").val(data.kawasan_id).trigger("change");
        $("#tutupan-id").val(data.tutupan_id).trigger("change");
        document.getElementById("luas").value = data.luas;
        document.getElementById("presentase").value = data.presentase;
    }
    if (route == "kawasan") {
        document.getElementById("id_form").value = data.id;
        document.getElementById("kd_kawasan").value = data.kd_kawasan;
        document.getElementById("nm_kawasan").value = data.nm_kawasan;
        document.getElementById("warna").value = data.warna;
        document.getElementById("luas").value = data.luas;
    }
};
