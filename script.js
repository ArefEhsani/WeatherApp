fetch('https://api.keybit.ir/time/').then(response => {
    return response.json()
}).then(data => {
    var unix_time = data.unix.en
    var season_name = data.season.name
    var season_number = data.season.number.en
    var time = data.time24.full.en
    var date_jalali = data.date.full.official.usual.fa
    var month_name = data.date.month.name
    var day_name = data.date.weekday.name
    var day_of_month = data.date.day.number.fa
    var year_number = data.date.year.number.fa
    var date_gergorian = data.date.other.gregorian.usual.en
    var year_animal = data.date.year.animal
    var gone_days = data.date.year.agone.days.en
    var left_days = data.date.year.left.days.en

    document.getElementById('DateShower').innerHTML = `${day_name}، ${day_of_month} ${month_name} ${year_number}`
    document.getElementById('DateShower1').innerHTML = `${day_name}، ${day_of_month} ${month_name}`
    document.getElementById('passed-days').innerHTML = `${gone_days}`
    document.getElementById('left-days').innerHTML = `${left_days}`
})

fetch('https://api.weatherapi.com/v1/forecast.json?key=91aeb191a9334544a9183731212812&q=Tehran&days=7&aqi=no&alerts=no').then(response => {
    return response.json()
}).then(data => {
    let current_temp = data.current.temp_c
    let current_icon = data.current.condition.icon
    let current_humidity = data.current.humidity
    let current_wind = data.current.wind_kph

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
})


function LoadDef() {
    ShowTime()
}

function ShowTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("TimeShower").innerHTML = time
}
var myTimer = setInterval(ShowTime, 1000)