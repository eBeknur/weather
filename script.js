let temp = document.querySelector("#currentLocation");
let locationName = document.querySelector("#locationName");
let localTime = document.querySelector("#localTime");
let weatherIcon = document.querySelector("#weatherIcon");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
let cloud = document.querySelector("#cloud");
let update = document.querySelector("#update");

function getData(address) {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${address}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "aea71282f3msh9417377ccd74801p16512ejsnb0f4ff6c118c",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((el) => el.json())
    .then((data) => {
        console.log(data);
    locationName.textContent=data.location.name;
    temp.textContent = data.current.temp_c +"°";
    localTime.textContent = data.location.localtime;
    weatherIcon.setAttribute("src",data.current.condition.icon)
    wind.textContent = data.current.wind_kph + "km/s >>";
    humidity.textContent = data.current.humidity + "%";
    cloud.textContent = data.current.cloud + "% |||";
    update.textContent = data.current.last_updated;
     });
}
const input = document.querySelector("#searchInput");

input,
  addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      getData(input.value);
    }
    console.log(event.key);
  });
