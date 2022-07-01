import { getDataKawasanTutupan } from "../getData";

// create div
const div = document.createElement("div");
// const modal_kawasan = document.querySelectorAll(".modal-kawasan");
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-kawasan")) {
        // get data-id from button
        const id = e.target.dataset.id;
        showData("kawasan", id);
    }
});

const showData = async ($by, $id) => {
    const response = await getDataKawasanTutupan($by, $id);
    // if response empty
    if (response.length === 0) {
        if (role === "admin") {
            alert("Data tidak ditemukan silahkan Megisi data Tutupan Kawasan");
        } else {
            alert("Data tidak ditemukan silahkan memilih kawasan yang lain");
        }
        return;
    }
    let tableTr = "";
    response.forEach((data) => {
        tableTr += `<tr>
                        <td>${data.tutupan.nm_tutupan}</td>
                        <td>${data.luas}</td>
                        <td>${data.presentase}</td>
                    </tr>`;
    });
    const modal = `<div class="modal" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Data Tutupan Kawasan ${response[0].kawasan.nm_kawasan}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Tipe Tutupan Lahan</th>
                                        <th>Luas (ha)</th>
                                        <th>Persentase (%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${tableTr}
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>`;
    div.innerHTML = modal;
    document.body.appendChild(div);
    // show modal
    $("#myModal").modal("show");
};
