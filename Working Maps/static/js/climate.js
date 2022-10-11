d3.json("http://127.0.0.1:5000/decade").then(data => {
    decade=data
    drought = data.filter(row => row[1] === 'Drought')
    flood = data.filter(row => row[1] === 'Flood')
    storm = data.filter(row => row[1] === 'Storm')
    temp = data.filter(row => row[1] === 'Extreme temperature')
    wildfire = data.filter(row => row[1] === 'Wildfire')

    var numChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: drought.map(row => row[0]),
            datasets: [
                {
                    label: 'Drought',
                    data: drought.map(row => row[6]),
                    backgroundColor: 'brown'
                },
                {
                    label: 'Flood',
                    data: flood.map(row => row[6]),
                    backgroundColor: 'blue'
                },
                {
                    label: 'Storm',
                    data: storm.map(row => row[6]),
                    backgroundColor: 'green'
                },
                {
                    label: 'Extreme Temperature',
                    data: temp.map(row => row[6]),
                    backgroundColor: 'red'
                },
                {
                    label: 'Wildfire',
                    data: wildfire.map(row => row[6]),
                    backgroundColor: 'orange'
                },
            ]
        },

        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Number of Disaster Occurences'
                }
            }
        },
        responsive: true,
        scales: {
            xAxes: {
                stacked: true
            },
            yAxes: {
                stacked: true,
            },
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Number of Disaster Occurences'
                },
            },
            scales: {
                xAxes: {
                    stacked: true
                },
                yAxes: {
                    stacked: true,
                },
            }
        }
    });
    var deathChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: drought.map(row => row[0]),
            datasets: [
                {
                    label: 'Drought',
                    data: drought.map(row => row[3]),
                    backgroundColor: 'brown'
                },
                {
                    label: 'Flood',
                    data: flood.map(row => row[3]),
                    backgroundColor: 'blue'
                },
                {
                    label: 'Storm',
                    data: storm.map(row => row[3]),
                    backgroundColor: 'green'
                },
                {
                    label: 'Extreme Temperature',
                    data: temp.map(row => row[3]),
                    backgroundColor: 'red'
                },
                {
                    label: 'Wildfire',
                    data: wildfire.map(row => row[3]),
                    backgroundColor: 'orange'
                },
            ]
        },

        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Decadal Average: Number of Deaths'
                }
            }
        },
        responsive: true,
        scales: {
            xAxes: {
                stacked: true
            },
            yAxes: {
                stacked: true,
            },
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Decadal Average: Number of Deaths'
                },
            },
            scales: {
                xAxes: {
                    stacked: true
                },
                yAxes: {
                    stacked: true,
                },
            }
        }
    });
    var affectedChart = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: drought.map(row => row[0]),
            datasets: [
                {
                    label: 'Drought',
                    data: drought.map(row => row[4]),
                    backgroundColor: 'brown'
                },
                {
                    label: 'Flood',
                    data: flood.map(row => row[4]),
                    backgroundColor: 'blue'
                },
                {
                    label: 'Storm',
                    data: storm.map(row => row[4]),
                    backgroundColor: 'green'
                },
                {
                    label: 'Extreme Temperature',
                    data: temp.map(row => row[4]),
                    backgroundColor: 'red'
                },
                {
                    label: 'Wildfire',
                    data: wildfire.map(row => row[4]),
                    backgroundColor: 'orange'
                },
            ]
        },

        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Decadal Average: Number of Affected'
                }
            }
        },
        responsive: true,
        scales: {
            xAxes: {
                stacked: true
            },
            yAxes: {
                stacked: true,
            },
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Decadal Average: Number of Affected'
                },
            },
            scales: {
                xAxes: {
                    stacked: true
                },
                yAxes: {
                    stacked: true,
                },
            }
        }
    });
})


var ctx = document.getElementById('instancesChart')
var ctx2 = document.getElementById('deathChart')
var ctx3 = document.getElementById('affectedChart')