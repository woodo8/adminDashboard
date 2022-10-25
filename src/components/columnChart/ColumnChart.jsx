import React from 'react'
import ReactApexChart from 'react-apexcharts';

const colors = ["#3a0ca3","#3a0ca3","#3a0ca3","#3a0ca3","#3a0ca3","#3a0ca3","#3a0ca3","#3a0ca3"]
export const areaChartTotalSale = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    },
    {
        name: 'series3',
        data: [11, 46, 22, 37, 24, 59, 91],
    },

    ],
    options: {
        chart: {
            height: 350,
            type: 'area'
        },
        colors: ["#a27aff","#5028ad","#3502ad"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },
    colors: ["#3a0cff","#3affaf","#3a0ca1"],

};
export const TotalSaleChart = () => {
    return (
        <>
            <ReactApexChart options={areaChartTotalSale.options} series={areaChartTotalSale.series} type="area" height={350}  />
        </>
    )
}
export const columnChartSale = {
    series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
    }],
    options: {
        grid:{
            show: false,
        },
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                    // console.log(chart, w, e)
                }
            }
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '65%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ['John', 'Doe'],
                ['Joe', 'Smith'],
                ['Jake', 'Williams'],
                'Amber',
                ['Peter', 'Brown'],
                ['Mary', 'Evans'],
                ['David', 'Wilson'],
                ['Lily', 'Roberts'],
            ],
            labels: {
                style: {
                    colors: colors,
                    fontSize: '12px'
                }
            }
        }
    },



};
export const ColumnChartSale = () => {
    return (
        <>
            <ReactApexChart options={columnChartSale.options} series={columnChartSale.series} type="bar" height={250} />
        </>
    )
}