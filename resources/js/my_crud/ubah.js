import { setSaveMethod } from "./tools";

$(document).on("click", ".btn-ubah", function (e) {
    e.preventDefault();
    const href = $(this).data("id");
    console.log(href);
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
    // if (route == "nilai") {
    //     document.getElementById("id_form").value = data.id;
    //     $("#student-id").val(data.student_id).trigger("change");
    //     document.getElementById("UTS").value = data.UTS;
    //     document.getElementById("UAS").value = data.UAS;
    //     document.getElementById("total").value = data.total;
    //     document.getElementById("grade").value = data.grade;
    // }
};
