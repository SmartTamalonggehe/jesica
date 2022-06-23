import axios from "axios";

const getDataPolygon = () => {
    return axios
        .get(`/api/${route}/polygon`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

const getDataKawasan = () => {
    return axios
        .get(`/api/kawasan`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

const getDataTutupan = () => {
    return axios
        .get(`/api/tutupan`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export { getDataPolygon, getDataKawasan, getDataTutupan };
