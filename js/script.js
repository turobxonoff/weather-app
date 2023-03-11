var API ="https://api.openweathermap.org/data/2.5/weather?q=fergana&units=metric&appid=da710af1f495128b0659c831bfdee015";

const form = document.querySelector('.search'),
input = document.querySelector('.searchInput'),
cityName = document.querySelector('.city'),
temp = document.querySelector('.temp'),
icon = document.querySelector('.icon'),
description = document.querySelector('.description'),
humidity = document.querySelector('#humidity'),
wind = document.querySelector('#wind');

const getData = async (api) => {
    const req = await fetch(api);
    const data = await req.json();
    updateUi(data);
}

getData(API);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cityName = input.value.toLowerCase().trim();
    API =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=da710af1f495128b0659c831bfdee015`;

    console.log(cityName);

    getData(API);
    input.value = "";
})

const updateUi = (data) => {
    console.log();
    temp.innerHTML = data.main.temp;
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    cityName.innerHTML = data.name;
    description.innerHTML = data.weather[0].main;
    humidity.innerHTML = data.main.humidity;
    wind.innerHTML = data.wind.speed;
}