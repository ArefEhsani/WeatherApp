fetch('https://api.keybit.ir/time/').then(response => {
    return response.json()
}).then(data => {
    let unix_time = data.unix.en
    let season_name = data.season.name
    let season_number = data.season.number.en
    let time = data.time24.full.en
    let date_jalali = data.date.full.official.usual.fa
    let month_name = data.date.month.name
    let day_name = data.date.weekday.name
    let day_of_month = data.date.day.number.fa
    let year_number = data.date.year.number.fa
    let date_gergorian = data.date.other.gregorian.usual.en
    let year_animal = data.date.year.animal
    let gone_days = data.date.year.agone.days.en
    let left_days = data.date.year.left.days.en

    document.getElementById('DateShower').innerHTML = `${day_name}، ${day_of_month} ${month_name} ${year_number}`
    document.getElementById('DateShower1').innerHTML = `${day_name}، ${day_of_month} ${month_name}`
    document.getElementById('passed-days').innerHTML = `${gone_days}`
    document.getElementById('left-days').innerHTML = `${left_days}`
    document.getElementById('year-animal').innerHTML = `${year_animal}`
    document.getElementById('persian-date-mini').innerHTML = data.date.full.official.usual.fa
    document.getElementById('arabic-date-mini').innerHTML = data.date.other.ghamari.usual.fa
    document.getElementById('gergorian-date-mini').innerHTML = data.date.other.gregorian.usual.en



    let year_animal_img = document.getElementById('year-animal-img')
    if (year_animal == "موش") {
        year_animal_img.src = "img/rat.png"
    } else if (year_animal == "گاو") {
        year_animal_img.src = "img/cow.png"
    } else if (year_animal == "ببر") {
        year_animal_img.src = "img/tiger.png"
    } else if (year_animal == "گربه") {
        year_animal_img.src = "img/cat.png"
    } else if (year_animal == "اژدها") {
        year_animal_img.src = "img/dragon.png"
    } else if (year_animal == "مار") {
        year_animal_img.src = "img/snake.png"
    } else if (year_animal == "اسب") {
        year_animal_img.src = "img/horse.png"
    } else if (year_animal == "بز") {
        year_animal_img.src = "img/goat.png"
    } else if (year_animal == "میمون") {
        year_animal_img.src = "img/monkey.png"
    } else if (year_animal == "خروس") {
        year_animal_img.src = "img/rooster.png"
    } else if (year_animal == "سگ") {
        year_animal_img.src = "img/dog.png"
    } else if (year_animal == "خوک") {
        year_animal_img == "img/pig.png"
    }
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

    document.getElementById("current-temp").innerHTML = current_temp
    document.getElementById("current-wind").innerHTML = current_wind
    document.getElementById("current-humidity").innerHTML = current_humidity
    document.getElementById("current-weather-icon").src = current_icon
    document.getElementById("today-name").innerHTML = GetNameOfDay(TodayDate)
    document.getElementById("tommorrow-name").innerHTML = GetNameOfDay(TomorrowDate)
    document.getElementById("tommorrow-after-that-name").innerHTML = GetNameOfDay(TomorrowAfterThatDate)
    document.getElementById("today-temp").innerHTML = TodayTemp
    document.getElementById("tommorrow-temp").innerHTML = TomorrowTemp
    document.getElementById("tommorrow-after-that-temp").innerHTML = TomorrowAfterThatTemp
    document.getElementById("today-icon").src = TodayIcon
    document.getElementById("tommorrow-icon").src = TomorrowIcon
    document.getElementById("tommorrow-after-that-icon").src = TomorrowAfterThatIcon

})


function LoadDef() {
    ShowTime()
}
/* document.getElementsByTagName("body")[0].style.display = "none" */

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
