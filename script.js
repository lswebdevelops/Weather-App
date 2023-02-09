const container = document.querySelector('.container');

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const serchValue = input.value;
    fetchCity(serchValue);
});

const fetchCity = async (city) => {
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfdc971a74e91ce916f69952bc7cc70f`);
    const data = await response.json();
    console.log(data);
    const { name } = data;
    const { feels_like } = data.main;
    const { icon, description } = data.weather[0];
    const { speed } = data.wind;

    const weatherBox = document.createElement('div');
    weatherBox.classList.add('weather');

    const cityName = document.createElement('div');
    cityName.classList.add('city');

    cityName.innerText = `${name},\n${data.sys.country}`;


    const temp = document.createElement('div');
    temp.classList.add('temp');
    temp.innerText = `${Math.round(feels_like - 273)}°C`;

    const weatherIcon = document.createElement('img');
    weatherIcon.classList.add('icon');
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;

    const weatherDescription = document.createElement('div');
    weatherDescription.classList.add('description');
    weatherDescription.innerText = description;

    const wind = document.createElement('div');
    wind.classList.add('wind');
    wind.innerText = `Wind: ${speed} m/s`;

    weatherBox.appendChild(cityName);
    
    weatherBox.appendChild(temp);
    weatherBox.appendChild(weatherIcon);
    weatherBox.appendChild(weatherDescription);
    weatherBox.appendChild(wind);

    container.appendChild(weatherBox);
}
catch(err){
    console.log(err);
}
}
