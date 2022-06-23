import { getDataKawasan } from "../getData";

const kawasan_id = document.getElementById("kawasan_id");

const selectKawasan = async () => {
    const dataKawasan = await getDataKawasan();
    if (kawasan_id) {
        kawasan_id.innerHTML = `<option value="" selected>Pilih Kawasan</option>`;
        dataKawasan.forEach((kawasan) => {
            kawasan_id.innerHTML += `
                <option value="${kawasan.id}">${kawasan.nm_kawasan}</option>
            `;
        });
    }
};

selectKawasan();
