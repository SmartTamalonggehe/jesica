import ApexCharts from "apexcharts";

import { getDataKawasan } from "../getData";

const grafikLuasKawasan = async () => {
    const dataKawasan = await getDataKawasan();
    const data = [];
    const categories = [];
    dataKawasan.forEach((el) => {
        data.push(el.luas);
        categories.push(el.nm_kawasan);
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
    };

    const chart = new ApexCharts(
        document.querySelector("#grafik-luas-kawasan"),
        options
    );
    chart.render();
};

grafikLuasKawasan();
