import axios from "axios";

const getDataPolygon = () => {
    return axios
        .get(`/api/${route}/polygon`)
        .then((res) => {
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
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

const getDataKawasanTutupan = ($by = "", $id = "") => {
    return axios
        .get(`/api/kawasan-tutupan/${$by}/${$id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export {
    getDataPolygon,
    getDataKawasan,
    getDataTutupan,
    getDataKawasanTutupan,
};
