let cities = {
  tehran: {
    city: "Tehran",
    temp: 21,
    weather: "sunny",
    humidity: 12,
    windSpeed: 22,
  },
  shiraz: {
    city: "Shiraz",
    temp: 31,
    weather: "sunny",
    humidity: 11,
    windSpeed: 33,
  },
  mashhad: {
    city: "Mashhad",
    temp: 19,
    weather: "sunny",
    humidity: 6,
    windSpeed: 9,
  },
  isfahan: {
    city: "Isfahan",
    temp: 23,
    weather: "sunny / cloudy",
    humidity: 3,
    windSpeed: 19,
  },
  tabriz: {
    city: "Tabriz",
    temp: 10,
    weather: "rainy",
    humidity: 23,
    windSpeed: 7,
  },
};

let $ = document;
let searchBtn = $.getElementById("search");
let searchBar = $.querySelector(".search-bar");
searchBtn.addEventListener("click", function () {
  let searchBarValue = searchBar.value;
  let mainCityData = cities[searchBarValue.toLowerCase()];
  if (mainCityData) {
    $.querySelector(".loading").classList.remove("loading");
    $.querySelector(".city").innerHTML = "City: " + mainCityData.city;
    $.querySelector(".temp").innerHTML = "Temp: " + mainCityData.temp;
    $.querySelector(".description").innerHTML =
      "Descripption: " + mainCityData.weather;
    $.querySelector(".humidity").innerHTML =
      "Humidity: " + mainCityData.humidity;
    $.querySelector(".wind").innerHTML =
      "Wind Speed: " + mainCityData.windSpeed;
  } else {
    console.log("insert valid data");
  }
});
