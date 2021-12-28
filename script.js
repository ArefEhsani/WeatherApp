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
    document.getElementById('year-animal').innerHTML = `${year_animal}`
})

CITY_NAME = "Tehran"
API_KEY = "91aeb191a9334544a9183731212812"

fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITY_NAME}&days=7&aqi=no&alerts=no`).then(response => {
    return response.json()
}).then(data => {
    let current_temp = data.current.temp_c
    let current_icon = data.current.condition.icon
    let current_humidity = data.current.humidity
    let current_wind = data.current.wind_kph
    let TodayDate = data.forecast.forecastday[0].date
    let TodayTemp = data.forecast.forecastday[0].day.avgtemp_c
    let TodayIcon = data.forecast.forecastday[0].day.condition.icon
    let TomorrowDate = data.forecast.forecastday[1].date
    let TomorrowTemp = data.forecast.forecastday[1].day.avgtemp_c
    let TomorrowIcon = data.forecast.forecastday[1].day.condition.icon
    let TomorrowAfterThatDate = data.forecast.forecastday[2].date
    let TomorrowAfterThatTemp = data.forecast.forecastday[2].day.avgtemp_c
    let TomorrowAfterThatIcon = data.forecast.forecastday[2].day.condition.icon
    console.log(GetNameOfDay(TodayDate), TodayTemp)
    console.log(GetNameOfDay(TomorrowDate), TomorrowTemp)
    console.log(GetNameOfDay(TomorrowAfterThatDate), TomorrowAfterThatTemp)

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


function GetNameOfDay(strDate) {
    var days = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
    var d = new Date(strDate);
    var dayName = days[d.getDay()];
    return dayName
}