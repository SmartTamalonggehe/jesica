import { getDataTutupan } from "../getData";

const tutupan_id = document.getElementById("tutupan-id");

const selectTutupan = async () => {
    if (tutupan_id) {
        const dataTutupan = await getDataTutupan();
        tutupan_id.innerHTML = `<option value="" disabled selected>Pilih Tutupan</option>`;
        dataTutupan.forEach((tutupan) => {
            tutupan_id.innerHTML += `
                <option value="${tutupan.id}">${tutupan.nm_tutupan}</option>
            `;
        });
    }
};

selectTutupan();
