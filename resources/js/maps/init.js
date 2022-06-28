// select id map
export const div_map = document.getElementById("map");
// style div_map
div_map.style.width = "100%";
div_map.style.height = "100vh";

mapboxgl.accessToken =
    "pk.eyJ1Ijoia2luZ3BybyIsImEiOiJjbDQ3anFhenMwaTh4M2ptb3NlamczZDQyIn0.w9C4ttg39IoyFfBDp3dSkg";
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 8, // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), "top-left");

export default map;
