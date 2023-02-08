
const chart = new Chart('barChart', {
    type: "bar", //radar, pie, line
    data: {
        labels:['columna1','columna2','columna3'],
        datasets:[{
            label: 'Titulo',
            data:[10,4,18],
            backgroundColor: ['rgb(255,0,0, 0.4)','rgb(0,255,0)','rgb(0,0,255)'],
        }],
    },
    //Para que empiece desde 0 en lugar de el más pequeño
    options: {
        scales: {
            yAxes : [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    },
})