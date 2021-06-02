console.log("Begin...");

document.getElementById("city-select").addEventListener("change",  (e) => { 
    console.log("HI:", e.target.selectedIndex);
    const selectedIndex = e.target.selectedIndex;
    const selectedCity = e.target.options[selectedIndex].textContent;
    console.log(selectedCity);
    showTheWeather(selectedCity)
});

function showTheWeather(selectedCity)
{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&APPID=ac60fdc4ef635134517f3129b52dfb4c`).then((response) => 
    {
        response.json().then((data) => {
            console.log(data);
            document.getElementById("the-weather").textContent = `The weather in ${data.name} is ${data.weather[0].main} -- ${data.weather[0].description}`;
            });
    })
}