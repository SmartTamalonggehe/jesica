import axios from "axios";
import { toastr } from "./tools";
import swal from "sweetalert";
import { refreshMap } from "../maps/polygon";

// click body selector btn-hapus

$(document).on("click", ".btn-hapus", function (e) {
    e.preventDefault();
    const href = $(this).data("id");
    swalDelete(href);
});

const swalDelete = (href) => {
    swal({
        title: "Apa anda yakin?",
        text: "Data yang telah dihapus tidak dapat dikembalikan!",
        icon: "warning",
        buttons: ["Tidak", "Yakin"],
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            axios({
                method: "delete",
                url: `/crud/${route}/${href}`,
            })
                .then(function (response) {
                    toastr[response.data.type](
                        response.data.pesan,
                        response.data.judul
                    );
                    if (route == "kawasan") {
                        refreshMap();
                        return;
                    }
                    let oTable = $("#my_table").dataTable();
                    oTable.fnDraw(false);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    });
};

export default swalDelete;
