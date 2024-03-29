import map, { div_map } from "./init";

import { getDataPolygon } from "../getData";
import swalDelete from "../my_crud/hapus";

const list_koordinat = document.getElementById("list-koordinat");
let popup;

div_map.style.height = "80vh";
map.setCenter([140.47879036870296, -2.668376578653124]);
map.setZoom(9);
map.setStyle("mapbox://styles/mapbox/satellite-streets-v11");

map.on("load", () => {
    showPolygon();
});
const showPolygon = async () => {
    const queryString = window.location.search;
    const data_url = JSON.parse(
        new URLSearchParams(queryString).get("koordinat_id")
    );
    let data = [];
    if (data_url?.length > 0) {
        const ambil = await getDataPolygon();
        data = ambil.filter((item) => data_url.includes(item.koordinat_id));
        console.log(data);
    } else {
        data = await getDataPolygon();
    }

    let coordinates = [];
    const features = [];

    // if data exist
    if (data.length > 0) {
        data.forEach((coord) => {
            coord.koordinat.koordinat_det.forEach((element) => {
                coordinates.push([element.longitude, element.latitude]);
            });
            features.push({
                type: "Feature",
                properties: {
                    id: coord.id,
                    nm_kawasan: coord.nm_kawasan,
                    luas: coord.luas,
                    color: coord.warna, //coord.warna, //rgba(255, 0, 114, 0.24)
                    koordinat_id: coord.koordinat_id,
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [coordinates],
                },
            });
            coordinates = [];
        });
    }

    // Add a source for the state polygons.
    map.addSource("area", {
        type: "geojson",
        data: {
            type: "FeatureCollection",
            features,
        },
    });

    // Add a layer showing the state polygons.
    map.addLayer({
        id: "area-layer",
        type: "fill",
        source: "area",
        paint: {
            "fill-color": ["get", "color"],
            "fill-opacity": 0.8,
        },
    });
};

// When a click event occurs on a feature in the area layer,
// open a popup at the location of the click, with description
// HTML from the click event's properties.
map.on("click", "area-layer", (e) => {
    const item = e.features[0].properties;
    console.log(item);
    showPopup(item, e);
});

// Change the cursor to a pointer when
// the mouse is over the area layer.
map.on("mouseenter", "area-layer", () => {
    map.getCanvas().style.cursor = "pointer";
});

// Change the cursor back to a pointer
// when it leaves the area layer.
map.on("mouseleave", "area-layer", () => {
    map.getCanvas().style.cursor = "";
});
// when mouse click right
const mouseRight = () => {
    map.on("contextmenu", "area-layer", (e) => {
        if (popup) popup.remove();
        const href = e.features[0].properties;
        const menu = `<div class="list-group my-group">
                        <span role="button" data-id="${href.id}" class="btn-ubah list-group-item list-group-item-action list-group-item-warning">Ubah</span>
                        <span role="button" data-id="${href.koordinat_id}" class="hapus-peta list-group-item list-group-item-action list-group-item-danger">Hapus</span>
                    </div>`;
        // create popup
        popup = new mapboxgl.Popup({
            offset: [0, -15],
            anchor: "right",
        })
            .setLngLat(e.lngLat)
            .setHTML(menu)
            .addTo(map);
        // remove popup when click outside
    });
};

const btn_refresh = document.getElementById("refresh");
btn_refresh.addEventListener("click", () => {
    refreshMap();
});

const refreshMap = () => {
    console.log("remove layer");
    map.removeLayer("area-layer");
    map.removeSource("area");
    setTimeout(() => {
        showPolygon();
    }, 500);
};

const drawPolygon = () => {
    const draw = new MapboxDraw({
        displayControlsDefault: false,
        // Select which mapbox-gl-draw control buttons to add to the map.
        controls: {
            polygon: true,
            trash: true,
        },
        // Set mapbox-gl-draw to draw by default.
        // The user does not have to click the polygon control button first.
    });
    map.addControl(draw);

    map.on("draw.create", updateArea);
    map.on("draw.delete", updateArea);
    map.on("draw.update", updateArea);

    function updateArea(e) {
        const data = draw.getAll();
        if (data.features.length > 0) {
            const area = turf.area(data);
            // area to kilometers
            const areaKm = area / 1000;
            // round to 2 decimals
            const areaKmRounded = Math.round(areaKm * 100) / 100;
            // select id tambah
            const tambah = document.getElementById("tambah");
            // tambah click
            tambah.click();
            const luas = document.getElementById("luas");
            luas.value = areaKmRounded;

            inputKoordinat(e.features[0].geometry.coordinates[0], draw);
            console.log(e.features[0].geometry.coordinates[0]);
        } else {
            if (e.type !== "draw.delete")
                alert("Click the map to draw a polygon.");
        }
    }
};

const inputKoordinat = (data, draw) => {
    list_koordinat.innerHTML = "";
    // remove last data array
    data.pop();
    data.forEach((item) => {
        list_koordinat.innerHTML += `<div class="col-6 mt-2 animate__animated animate__bounceInDown">
                                        <label for="longitude">Longitude</label>
                                        <input type="text" value="${item[0]}" class="form-control inputReset" name="longitude[]" id="longitude"
                                            required />
                                    </div>
                                    <div class="col-6 mt-2 animate__animated animate__bounceInDown">
                                        <label for="latitude">Latitude</label>
                                        <input type="text" value="${item[1]}" class="form-control inputReset" name="latitude[]" id="latitude"
                                            required />
                                    </div>`;
    });
    draw.deleteAll();
};
// show popup
const showPopup = (item, e) => {
    let show = "";
    if (route == "kawasan") {
        show = `<table class="table-popup">
                    <tr>
                        <th>Kawasan:</th>
                        <td>${item.nm_kawasan}</td>
                    </tr>
                    <tr>
                        <th>Luas:</th>
                        <td>${item.luas}</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p class="text-center mt-2">
                                <a href="javascript:void(0)" class='modal-kawasan' data-id='${item.id}'>Kawasan Tutupan</a>
                            </p>
                        </td>
                    </tr>
                </table>`;
    }
    popup = new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(show).addTo(map);
};

const btnAksi = () => {
    // click body and find ubah peta
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-ubah")) {
            popup.remove();
            // swalUbah(data);
        }
        if (e.target.classList.contains("hapus-peta")) {
            const id = e.target.dataset.id;
            swalDelete(id);
            popup.remove();
        }
    });
};

// showPolygon();
if (role == "admin") {
    drawPolygon();
    mouseRight();
    btnAksi();
}

export { refreshMap, list_koordinat };
