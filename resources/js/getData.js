import axios from "axios";

const getDataPolygon = () => {
    return axios
        .get("/api/polygon")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export { getDataPolygon };
