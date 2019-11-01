if (`geolocation` in navigator) {
    console.log(`is teyre`)
} else {
    console.log(`geolocation is not there`)
}


navigator.geolocation.getCurrentPosition(function (position) {
    getCity(position.coords.latitude, position.coords.longitude);
});

$(`.chart-container`).prepend(`<img class="chart-img" width = 40px src="img/rin2.gif">`);
let tempData = []
let timeData = []
let chartCanvas = document.getElementById('myChart');
chartCanvas.width = 800;
chartCanvas.height = 300;
let ctx = document.getElementById('myChart').getContext('2d');
let yourCity;
const getCity = (lat, long) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1IjoiaGFyZHl5YjIiLCJhIjoiY2swczI0NGpnMDJzOTNvcGI2YW9uNmxrcCJ9.p6ymAgqYnK5yfAPI-kDGkw`)
        .then(response => {
            response.json().then(data => {
                yourCity = data.features[0].context[1].text;
                console.log(yourCity)
            })
        })


    fetch(`/weather?address=` + yourCity).then((response) => {
        response.json().then(data => {
            if (data.error) console.log(data.error)
            else {
                console.log(data.forecastData);
                for (let i = 0; i < 7; i++) {
                    let averageTemp = data.forecastData.daily.data[i].apparentTemperatureHigh + data.forecastData.daily.data[i].apparentTemperatureLow
                    let tempNow = averageTemp.toFixed(2);
                    $(`.temp2:eq(${i})`).text(tempNow + String.fromCharCode(176))
                }

                for (let i = 0; i < 24; i++) {
                    tempData.push(data.forecastData.hourly.data[i].temperature)
                    timeData.push((new Date(data.forecastData.hourly.data[i].time * 1000)).getHours())
                }
                $(`.chart-img`).remove();

                const res = data.forecastData.currently;
                $('.card:eq(0) .card-img-overlay span:first-child').text(Math.floor(res.temperature) + String.fromCharCode(176))
                $('span[class="city"]').text(yourCity);
                $('.card:eq(0) .col1:first-child span:last-child').text(res.precipProbability)
                $('.card:eq(0) .col1:nth-child(2) span:last-child').text(res.humidity)
                $('.card:eq(0) .col1:nth-child(3) span:last-child').text(res.temperature + String.fromCharCode(176))
                $('.card:eq(0) .col1:nth-child(4) span:last-child').text(res.windSpeed)
                $('.card:eq(0) .col1:nth-child(5) span:last-child').text(res.visibility)
                const val = res.icon
                $('.card-img-top1').attr('src', addIcon(val))

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: timeData,
                        datasets: [{
                            label: 'My First dataset',
                            borderColor: 'blueviolet',
                            backgroundColor: 'blueviolet',
                            fill: false,
                            data: tempData
                        }]
                    },
                    options: {
                        legend: {
                            display: false
                        }
                    }
                });
            }
        })
    })
}
Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

let date = new Date();

for (let i = 1; i < 7; i++)
    $(`.col2-date:eq(${i})`).text(date.addDays(1).getDate() + ` / ` + date.getMonth().toString());

function addIcon(val) {

    let cardBackgroundImage = "";
    if (val == "clear-day") {
        cardBackgroundImage = "img/frogs/sunny.jpg"
    } else if (val == "clear-night") {
        cardBackgroundImage = "img/frogs/clear.jpg"
    } else if (val == "rain") {
        cardBackgroundImage = "img/frogs/rain1.jpg"
    } else if (val == "snow") {
        cardBackgroundImage = "img/frogs/snow1.jpg"
    } else if (val == "sleet") {
        cardBackgroundImage = "img/frogs/snow.jpg"
    } else if (val == "wind") {
        cardBackgroundImage = "img/frogs/"

    } else if (val == "fog") {
        cardBackgroundImage = "img/frogs/"
    } else if (val == "cloudy") {
        cardBackgroundImage = "img/frogs/mostly-cloudy.jpg"
    } else if (val == "partly-cloudy-day") {
        cardBackgroundImage = "img/frogs/partly-cloudy.jpg"
    } else if (val == "partly-cloudy-night") {
        cardBackgroundImage = "img/frogs/cloudy.jpg"
    }
    return cardBackgroundImage
}