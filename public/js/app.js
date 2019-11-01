console.log(`client side loaded...`)


$(document).ready(function () {



    function addIcon(val) {
        let icon = "";
        if (val == "clear-day") {
            icon = "wi wi-day-sunny"
        } else if (val == "clear-night") {
            icon = "wi wi-night-clear"

        } else if (val == "rain") {
            icon = "wi wi-rain"
        } else if (val == "snow") {
            icon = "wi wi-snow"
        } else if (val == "sleet") {
            icon = "wi wi-day-sleet"

        } else if (val == "wind") {
            icon = "wi wi-strong-wind"

        } else if (val == "fog") {
            icon = "wi wi-smog"

        } else if (val == "cloudy") {
            icon = "wi wi-cloudy"

        } else if (val == "partly-cloudy-day") {
            icon = "wi wi-day-cloudy"

        } else if (val == "partly-cloudy-night") {
            icon = "wi wi-night-alt-cloudy"
        }
        return icon
    }

    fetch(`/weather?address=moscow`).then(response => {
        response.json().then(data => {
            const res = data.forecastData.currently;
            $('.card:eq(0) .card-img-overlay span:first-child').text(Math.floor(res.temperature) + String.fromCharCode(176))
            $('.card:eq(0) .col1:first-child span:last-child').text(res.precipProbability)
            $('.card:eq(0) .col1:nth-child(2) span:last-child').text(res.humidity)
            $('.card:eq(0) .col1:nth-child(3) span:last-child').text(res.temperature + String.fromCharCode(176))
            $('.card:eq(0) .col1:nth-child(4) span:last-child').text(res.windSpeed)
            $('.card:eq(0) .col1:nth-child(5) span:last-child').text(res.visibility)
            const val = res.icon
            $('.card:eq(0) .activecol1 span:nth-child(2)').addClass(addIcon(val));
        })
    })


    fetch(`/weather?address=venice`).then(response => {
        response.json().then(data => {
            const res = data.forecastData.currently;
            $('.card:eq(1) .card-img-overlay span:first-child').text(Math.floor(res.temperature) + String.fromCharCode(176))
            $('.card:eq(1) .col1:first-child span:last-child').text(res.precipProbability)
            $('.card:eq(1) .col1:nth-child(2) span:last-child').text(res.humidity)
            $('.card:eq(1) .col1:nth-child(3) span:last-child').text(res.temperature + String.fromCharCode(176))
            $('.card:eq(1) .col1:nth-child(4) span:last-child').text(res.windSpeed)
            $('.card:eq(1) .col1:nth-child(5) span:last-child').text(res.visibility)
            const val = res.icon
            $('.card:eq(1) .activecol1 span:nth-child(2)').addClass(addIcon(val));

        })
    })


    fetch(`/weather?address=london`).then(response => {
        response.json().then(data => {
            const res = data.forecastData.currently;
            $('.card:eq(2) .card-img-overlay span:first-child').text(Math.floor(res.temperature) + String.fromCharCode(176))
            $('.card:eq(2) .col1:first-child span:last-child').text(res.precipProbability)
            $('.card:eq(2) .col1:nth-child(2) span:last-child').text(res.humidity)
            $('.card:eq(2) .col1:nth-child(3) span:last-child').text(res.temperature + String.fromCharCode(176))
            $('.card:eq(2) .col1:nth-child(4) span:last-child').text(res.windSpeed)
            $('.card:eq(2) .col1:nth-child(5) span:last-child').text(res.visibility)
            const val = res.icon
            $('.card:eq(2) .activecol1 span:nth-child(2)').addClass(addIcon(val));

        })
    })

    fetch(`/weather?address=dubai`).then(response => {
        response.json().then(data => {
            const res = data.forecastData.currently;
            $('.card:eq(3) .card-img-overlay span:first-child').text(Math.floor(res.temperature) + String.fromCharCode(176))
            $('.card:eq(3) .col1:first-child span:last-child').text(res.precipProbability)
            $('.card:eq(3) .col1:nth-child(2) span:last-child').text(res.humidity)
            $('.card:eq(3) .col1:nth-child(3) span:last-child').text(res.temperature + String.fromCharCode(176))
            $('.card:eq(3) .col1:nth-child(4) span:last-child').text(res.windSpeed)
            $('.card:eq(3) .col1:nth-child(5) span:last-child').text(res.visibility)
            const val = res.icon
            $('.card:eq(3) .activecol1 span:nth-child(2)').addClass(addIcon(val));

        })
    })

    fetch(`/weather?address=berlin`).then(response => {
        response.json().then(data => {
            const res = data.forecastData.currently;
            $('.card:eq(4) .card-img-overlay span:first-child').text(Math.floor(res.temperature) + String.fromCharCode(176))
            $('.card:eq(4) .col1:first-child span:last-child').text(res.precipProbability)
            $('.card:eq(4) .col1:nth-child(2) span:last-child').text(res.humidity)
            $('.card:eq(4) .col1:nth-child(3) span:last-child').text(res.temperature + String.fromCharCode(176))
            $('.card:eq(4) .col1:nth-child(4) span:last-child').text(res.windSpeed)
            $('.card:eq(4) .col1:nth-child(5) span:last-child').text(res.visibility)
            const val = res.icon
            $('.card:eq(4) .activecol1 span:nth-child(2)').addClass(addIcon(val));

        })
    })

    fetch(`/weather?address=sydney`).then(response => {
        response.json().then(data => {
            const res = data.forecastData.currently;
            $('.card:eq(5) .card-img-overlay span:first-child').text(Math.floor(res.temperature) + String.fromCharCode(176))
            $('.card:eq(5) .col1:first-child span:last-child').text(res.precipProbability)
            $('.card:eq(5) .col1:nth-child(2) span:last-child').text(res.humidity)
            $('.card:eq(5) .col1:nth-child(3) span:last-child').text(res.temperature + String.fromCharCode(176))
            $('.card:eq(5) .col1:nth-child(4) span:last-child').text(res.windSpeed)
            $('.card:eq(5) .col1:nth-child(5) span:last-child').text(res.visibility)
            const val = res.icon
            $('.card:eq(5) .activecol1 span:nth-child(2)').addClass(addIcon(val));

        })
    })

    fetch(`/weather?address=delhi`).then(response => {
        response.json().then(data => {
            const res = data.forecastData.currently;
            $('.card:eq(6) .card-img-overlay span:first-child').text(Math.floor(res.temperature) + String.fromCharCode(176))
            $('.card:eq(6) .col1:first-child span:last-child').text(res.precipProbability)
            $('.card:eq(6) .col1:nth-child(2) span:last-child').text(res.humidity)
            $('.card:eq(6) .col1:nth-child(3) span:last-child').text(res.temperature + String.fromCharCode(176))
            $('.card:eq(6) .col1:nth-child(4) span:last-child').text(res.windSpeed)
            $('.card:eq(6) .col1:nth-child(5) span:last-child').text(res.visibility)
            const val = res.icon
            $('.card:eq(6) .activecol1 span:nth-child(2)').addClass(addIcon(val));

        })
    })

    fetch(`/weather?address=newyork`).then(response => {
        response.json().then(data => {
            const res = data.forecastData.currently;
            $('.card:eq(7) .card-img-overlay span:first-child').text(Math.floor(res.temperature) + String.fromCharCode(176))
            $('.card:eq(7) .col1:first-child span:last-child').text(res.precipProbability)
            $('.card:eq(7) .col1:nth-child(2) span:last-child').text(res.humidity)
            $('.card:eq(7) .col1:nth-child(3) span:last-child').text(res.temperature + String.fromCharCode(176))
            $('.card:eq(7) .col1:nth-child(4) span:last-child').text(res.windSpeed)
            $('.card:eq(7) .col1:nth-child(5) span:last-child').text(res.visibility)
            const val = res.icon
            $('.card:eq(7) .activecol1 span:nth-child(2)').addClass(addIcon(val));

        })
    })

    fetch(`/weather?address=shangai`).then(response => {
        response.json().then(data => {
            const res = data.forecastData.currently;
            $('.card:eq(8) .card-img-overlay span:first-child').text(Math.floor(res.temperature) + String.fromCharCode(176))
            $('.card:eq(8) .col1:first-child span:last-child').text(res.precipProbability)
            $('.card:eq(8) .col1:nth-child(2) span:last-child').text(res.humidity)
            $('.card:eq(8) .col1:nth-child(3) span:last-child').text(res.temperature + String.fromCharCode(176))
            $('.card:eq(8) .col1:nth-child(4) span:last-child').text(res.windSpeed)
            $('.card:eq(8) .col1:nth-child(5) span:last-child').text(res.visibility)
            const val = res.icon
            $('.card:eq(8) .activecol1 span:nth-child(2)').addClass(addIcon(val));

        })
    })
    const form = document.querySelector(`form`);
    const input = form.querySelector(`input`)
    form.addEventListener(`submit`, (e) => {
      
        let address = input.value
        sessionStorage.setItem(`Address`, address);
    })

    $(`button[class="btn button1"]`).click(function(){
        console.log(`yourcity button clicked`)
    })
});