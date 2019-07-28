var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx , {
    type:'pie',
    data: {
        datasets:[{
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(255, 99, 132)', '#456456'],
            data:[50,50]
        }]
    },
    options: {
        plugins: {
            datalabels: {
                color: '#fff'
            }
        }
    },
});
