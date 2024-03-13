import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const options = {
    chart: {
        type: 'column'
    },
    colors: ['#1de9b6', '#1dc4e9', '#A389D4', '#899FD4'],
    title: {
        text: 'Monthly Averange IDC'
    },
    // subtitle: {
    //     text: 'Source: WorldClimate.com'
    // },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'IDC Amount'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} $</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'IDC Limit',
            data: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,]
        },
        {
            name: 'IDC Used',
            data: [40,78,100,233,499,678,680,720,811,850,920,980]
        },
        // {
        //     name: 'London',
        //     data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
        // },
        // {
        //     name: 'Berlin',
        //     data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        // }
    ]
};
const BarBasicChart = () => {
    return <HighchartsReact highcharts={Highcharts} options={options}/>;
};
export default BarBasicChart;
