function ChangeBackground() {
    const image_urls = [
        "https://i.pinimg.com/originals/c5/d8/6c/c5d86cecd6f2371bbc48ead059002537.jpg",
        "https://i.pinimg.com/originals/8c/f2/e3/8cf2e3186bbacb92681699b3fff5b29b.jpg",
        "https://timedia.tierient.com/timg/6c770c79e2da1efa.jpg",
        "https://youtravel.me/upload/tours/15981/media/bdd/bddb3f2210b42ecb4c3ca311c7c4bbec.jpg",
        "https://diuim.ru/images/speasyimagegallery/albums/8/images/altai002.jpg",
        "https://diuim.ru/images/speasyimagegallery/albums/8/images/altai002.jpg",
        "https://i.pinimg.com/originals/ec/cf/a1/eccfa1e04a128701f26806a9f1e9591a.jpg",
        "https://to-ru.com/wp-content/uploads/2016/02/Altai.jpg"
    ]

    random_img = Math.floor(Math.random() * image_urls.length);

    document.body.style.backgroundImage = `url('${image_urls[random_img]}')`
    document.body.style.backgroundRepeat = "no-repeat";
}

function LoadDef() {
    ShowTime()
    ChangeBackground()
}

fetch('https://api.keybit.ir/time/').then(response => {
    return response.json()
}).then(data => {
    let season_name = data.season.name
    let season_number = data.season.number.en
    let month_name = data.date.month.name
    let day_name = data.date.weekday.name
    let day_of_month = data.date.day.number.fa
    let year_number = data.date.year.number.fa
    let year_animal = data.date.year.animal

    document.getElementById('DateShower').innerHTML = `${day_name}، ${day_of_month} ${month_name} ${year_number}`
    document.getElementById('DateShower1').innerHTML = `${day_name}، ${day_of_month} ${month_name}`
    document.getElementById('passed-days').innerHTML = data.date.year.agone.days.fa
    document.getElementById('left-days').innerHTML = data.date.year.left.days.fa
    document.getElementById('year-animal').innerHTML = `${year_animal}`
    document.getElementById('persian-date-mini').innerHTML = data.date.full.official.usual.fa
    document.getElementById('arabic-date-mini').innerHTML = data.date.other.ghamari.usual.fa
    document.getElementById('gergorian-date-mini').innerHTML = data.date.other.gregorian.usual.en
    try {
        document.getElementById('event-box').innerHTML = data.date.day.events.local.text
    } catch (error) {
        document.getElementById('event-box').innerHTML = "رویدادی برای امروز وجود ندارد"
    }

    let year_animal_img = document.getElementById('year-animal-img')

    switch (year_animal) {
        case 'موش':
            year_animal_img.src = "img/rat.png";
            break;
        case 'گاو':
            year_animal_img.src = "img/cow.png";
            break;
        case 'ببر':
            year_animal_img.src = "img/tiger.png";
            break;
        case 'گربه':
            year_animal_img.src = "img/cat.png";
            break;
        case 'اژدها':
            year_animal_img.src = "img/dragon.png";
            break;
        case 'مار':
            year_animal_img.src = "img/snake.png";
            break;
        case 'اسب':
            year_animal_img.src = "img/horse.png";
            break;
        case 'بز':
            year_animal_img.src = "img/goat.png";
            break;
        case 'میمون':
            year_animal_img.src = "img/monkey.png";
            break;
        case 'خروس':
            year_animal_img.src = "img/rooster.png";
            break;
        case 'سگ':
            year_animal_img.src = "img/dog.png";
            break;
        case 'خوک':
            year_animal_img.src = "img/pig.png";
            break;
    }

})
fetch('https://api.keybit.ir/owghat/?city=%D8%AA%D9%87%D8%B1%D8%A7%D9%86').then(response => {
    return response.json()
}).then(data => {
    document.getElementById('azan-sobh').innerHTML = data.result.azan_sobh
    document.getElementById('azan-zohr').innerHTML = data.result.azan_zohr
    document.getElementById('azan-maghreb').innerHTML = data.result.azan_maghreb
})

WeatherApiSet("Tehran")

document.getElementById("btn-search").onclick = function() {
    SearchInput = document.getElementById("search-box")
    WeatherApiSet(SearchInput.value)
}

function WeatherApiSet(city) {
    API_KEY = "91aeb191a9334544a9183731212812"
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`).then(response => {
        return response.json()
    }).then(data => {
        document.getElementById("weather-city-name").innerHTML = data.location.name
        document.getElementById("current-temp").innerHTML = data.current.temp_c
        document.getElementById("current-wind").innerHTML = data.current.wind_kph
        document.getElementById("current-humidity").innerHTML = data.current.humidity
        document.getElementById("current-weather-icon").src = data.current.condition.icon
        document.getElementById("today-name").innerHTML = GetNameOfDay(data.forecast.forecastday[0].date)
        document.getElementById("tommorrow-name").innerHTML = GetNameOfDay(data.forecast.forecastday[1].date)
        document.getElementById("tommorrow-after-that-name").innerHTML = GetNameOfDay(data.forecast.forecastday[2].date)
        document.getElementById("today-temp").innerHTML = data.forecast.forecastday[0].day.avgtemp_c
        document.getElementById("tommorrow-temp").innerHTML = data.forecast.forecastday[1].day.avgtemp_c
        document.getElementById("tommorrow-after-that-temp").innerHTML = data.forecast.forecastday[2].day.avgtemp_c
        document.getElementById("today-icon").src = data.forecast.forecastday[0].day.condition.icon
        document.getElementById("tommorrow-icon").src = data.forecast.forecastday[1].day.condition.icon
        document.getElementById("tommorrow-after-that-icon").src = data.forecast.forecastday[2].day.condition.icon
        document.getElementById("sunrise-time").innerHTML = Convert12Hto24H(data.forecast.forecastday[0].astro.sunrise)
        document.getElementById("sunset-time").innerHTML = Convert12Hto24H(data.forecast.forecastday[0].astro.sunset)
        document.getElementById("sunrise-tommorrow").innerHTML = Convert12Hto24H(data.forecast.forecastday[1].astro.sunrise)
        document.getElementById("sunset-tommorrow").innerHTML = Convert12Hto24H(data.forecast.forecastday[1].astro.sunset)

    })
}




function ShowTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("TimeShower").innerHTML = time
}
var myTimer = setInterval(ShowTime, 1000)


function SwitchThemeDark() {
    document.getElementById("theme-link").href = "css/dark.css";
}

function SwitchThemeLight() {
    document.getElementById("theme-link").href = "css/light.css";
}


function GetNameOfDay(strDate) {
    var days = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
    var d = new Date(strDate);
    var dayName = days[d.getDay()];
    return dayName
}

function Convert12Hto24H(time) {
    str = time.substring(0, time.length - 3);
    return str
}