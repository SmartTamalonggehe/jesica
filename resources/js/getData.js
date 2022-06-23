import axios from "axios";

const getDataPolygon = () => {
    return axios
        .get(`/api/${route}`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export { getDataPolygon };
