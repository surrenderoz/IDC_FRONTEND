const chartData = {
    height: 250,
    type: 'donut',
    options: {
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false
            }
        },
        colors: ['#4680ff', '#0e9e4a', '#00acc1', '#ffa21d', '#ff5252', '#7759de'],
        labels: ['Grant Name 1', 'Grant Name 2', 'Grant Name 3', 'Grant Name 4', 'Grant Name 5', 'Grant Name 6'],
        legend: {
            show: true,
            position: 'bottom'
        }
    },
    series: [85.7, 77.56, 20.9, 10.9, 15.8, 86.7]
};
export default chartData;
