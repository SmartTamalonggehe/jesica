import { getDataKawasan } from "../getData";

const kawasan_id = document.getElementById("kawasan-id");

const selectKawasan = async () => {
    if (kawasan_id) {
        const dataKawasan = await getDataKawasan();
        kawasan_id.innerHTML = `<option value="" disabled selected>Pilih Kawasan</option>`;
        dataKawasan.forEach((kawasan) => {
            kawasan_id.innerHTML += `
                <option value="${kawasan.id}">${kawasan.nm_kawasan}</option>
            `;
        });
    }
};

selectKawasan();
