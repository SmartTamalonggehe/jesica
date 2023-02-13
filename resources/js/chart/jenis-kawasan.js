import ApexCharts from "apexcharts";

import { getDataKawasan } from "../getData";

const grafikLuasKawasan = async () => {
    const dataKawasan = await getDataKawasan({});

    // group by nm_kawasan
    let grouped = dataKawasan
        .map((item) => {
            item.nm_kawasan = item.nm_kawasan.toLowerCase();
            return item;
        })
        .reduce((acc, item) => {
            if (!acc[item.nm_kawasan]) {
                acc[item.nm_kawasan] = [];
            }
            acc[item.nm_kawasan].push(item);
            return acc;
        }, {});

    // console.log(grouped);

    let groupedArr = Object.values(grouped);

    const data = [];
    const categories = [];

    groupedArr.forEach((group) => {
        data.push(group.length);
        categories.push(group[0].nm_kawasan);
    });
    const options = {
        series: [
            {
                data,
            },
        ],
        chart: {
            height: 350,
            type: "bar",
            events: {
                click: function (chart, w, e) {
                    // console.log(chart, w, e)
                },
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "45%",
                distributed: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories,
            labels: {
                style: {
                    fontSize: "12px",
                },
            },
        },
        theme: {
            palette: "palette8", // upto palette10
        },
    };

    const chart = new ApexCharts(
        document.querySelector("#grafik-jenis-kawasan"),
        options
    );
    chart.render();
};

grafikLuasKawasan();
