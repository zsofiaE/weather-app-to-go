/* -------------------show the current time------------------- */
let a;
let time;

// function for adding live time 
setInterval(() => 
  {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    let showTime = document.getElementById(`time`).innerHTML = time;
  }, 1000
);

/*-------------------query the Grid-----------------------------*/
 // cards Array
 const showsArray = [
  {
    cardNumber: '1',
    sunrise: 'assets/sunrise-50.png',
    sunset: 'assets/sunset-50.png',
  },
  {
    cardNumber: '2',
    sunrise: 'assets/sunrise-50.png',
    sunset: 'assets/sunset-50.png',
  },
  {
    cardNumber: '3',
    sunrise: 'assets/sunrise-50.png',
    sunset: 'assets/sunset-50.png',
  }
 ]

// access the grid in which the cards will be placed
const offersGrid = document.querySelector('.gridContainer')

function createCard(Wettervorhersage) 
{
  let content = `
  <div class="weather-card${Wettervorhersage.cardNumber}">
  <div Class="labelNumber${Wettervorhersage.cardNumber}">
  </div>
    <h1 class="city${Wettervorhersage.cardNumber}"></h1>
    <h2 class="country${Wettervorhersage.cardNumber}"></h2>
    <div class="forecast${Wettervorhersage.cardNumber}">
        <image class="icon${Wettervorhersage.cardNumber}" src="">
        <p class="weather${Wettervorhersage.cardNumber}"></p>
        <p class="tempreture${Wettervorhersage.cardNumber}"></p>  
    </div>
    <div class="container">
        <div class="astro">
            <p class="humidity${Wettervorhersage.cardNumber}"></p>
            <p class="uv${Wettervorhersage.cardNumber}"></p>
        </div>
        <div class="extra-data">
            <div class="box">
              <img src=${Wettervorhersage.sunrise} width="24" height="24">
              <p class="sunrise${Wettervorhersage.cardNumber}"></p>
            </div> 
            <div class="box">
              <img src=${Wettervorhersage.sunset} width="24" height="24">
              <p class="sunset${Wettervorhersage.cardNumber}"></p>
            </div> 
        </div>
    </div>
    <div class="box">
        <p class="time-date${Wettervorhersage.cardNumber}"></p>
    </div>
  </div>
  `;
  // create div
  let card = document.createElement('div');

  // create the class "weather-card" to access the style in css
  card.classList.add('weather-card')

  // write the content of the card and create grid 
  card.innerHTML = content;
  return card;
}

// loop over the array and create cards
for (let index = 0; index < showsArray.length; index++) {
const card = createCard(showsArray[index])
offersGrid.appendChild(card);
}

/* -------------------Look for a random background Picture (Sofia's favourite) ------------------- */

//const clientId = "befOWXko_VO5MAUZByFqicKzazdX8IHU6gsSb6BXadc"; // Nr. 1
//const clientId = "8FAQOMjMmHK-HJmM7eLkhcRwyWZVg_TZ5ybi20qw9Dw"; // Nr. 2
//const clientId = "f-pm4kGZgNh2VI_tYGJHAV2pEUazn_deA1KiMjMQUYg"; // Nr. 3
// const clientId = "h_3sisufaSWfhCD0Zsog_yjhnKj-yr1RTyjhuKr3VFY"; // Nr. 4 
 const clientId = "nhHInUCkFEGWWmSpsJt3pJLTYevYEE1oy4pvyWatKiM"; // Nr. 5

let result;
function searchPhotos(theCityName)
{
  const url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${theCityName}&per_page=1//`;
  fetch(url)
  .then (function (data) 
    {
      return data.json();
    }
  )  
  .then (function (data) 
    {
      console.log(data.results) //array/0

      const bg = document.querySelector(".bg");
      const img = data.results[Math.floor(Math.random() * 2)].urls.regular;
      bg.style.backgroundImage = `url(${img})`;
    }
  )
}

/* -------------------FUNCTION API WEATHER FORECAST -------------------*/
function apiCall (cityName, dayNumber)
{
  const apiKey = "37cf947bdeb74b2c9b5184815230102";
  const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`;  // at the end of the uRL "&aqi=yes" -  fetches also the air quality data
  const icon = document.querySelector(`.icon${dayNumber}`);
  const weather = document.querySelector(`.weather${dayNumber}`);
  const temp = document.querySelector(`.tempreture${dayNumber}`);
  const timeDate = document.querySelector(`.time-date${dayNumber}`);
  const city = document.querySelector(`.city${dayNumber}`);
  const country = document.querySelector(`.country${dayNumber}`);

 // fechting data for the chosen Destination
 fetch(weatherUrl)
	.then(response => response.json())
	.then(data => 
    {
      console.log(data)
      city.innerHTML = data.location.name;
      country.innerHTML = data.location.country;
      icon.src = data.current.condition.icon;
      weather.innerText = data.current.condition.text;
      temp.innerText = data.current.temp_c + "°C";
      timeDate.innerText = `DT in ${cityName}: ${data.location.localtime}`;
      
      // humidity 
      const humidity = document.querySelector(`.humidity${dayNumber}`);
      humidity.innerText = "Humidity: " + data.current.humidity +"%";
      
      // UV 
      const uv = document.querySelector(`.uv${dayNumber}`);
      uv.innerText = "UV Index: " + data.current.uv;
    
      const timeZoneUrl = `http://api.weatherapi.com/v1/timezone.json?key=${apiKey}&q=${cityName}`;
      fetch(timeZoneUrl)
      .then(response => response.json())
      .then(datatz => 
        {
          console.log(datatz)
          //the same data also fetched from the normal "url"
        }
      )

      var today = new Date();     
      const astronomyUrl = `http://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${cityName}&dt=${today}`; //here you need a date of today
      fetch(astronomyUrl)
      .then(response => response.json())
      .then(data => 
        {
          console.log(data)
          const sunrise = document.querySelector(`.sunrise${dayNumber}`);
          sunrise.innerText = data.astronomy.astro.sunrise;
          const sunset = document.querySelector(`.sunset${dayNumber}`);
          sunset.innerText = data.astronomy.astro.sunset;
        }
      )
      
 
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=3&dt=${today}`)
        .then(response => response.json())
        .then(data => 
        {
          console.log(data.forecast.forecastday[1]);
          console.log(data.forecast.forecastday[2]);
       
          //--> show the Label of the day 1
          const theDay1 = document.querySelector(`.labelNumber1`);
          const label1 = document.createElement("label");
          label1.textContent = "Today";
          label1.classList.add('labelNumber');
          theDay1.appendChild(label1);

          // show forecast for the second day
          const timeDate2 = document.querySelector(`.time-date2`);
          const temp2 = document.querySelector(`.tempreture2`);
          const icon2 = document.querySelector(`.icon2`);
          const weather2 = document.querySelector(`.weather2`);
          const sunrise2 = document.querySelector(`.sunrise2`);
          const sunset2 = document.querySelector(`.sunset2`);
          const humidity2 = document.querySelector(`.humidity2`);
          const uv2 = document.querySelector(`.uv2`);        
         
          timeDate2.innerText = data.forecast.forecastday[1].date;
          temp2.innerText = data.forecast.forecastday[1].day.avgtemp_c;
          icon2.innerText = data.forecast.forecastday[1].day.condition.icon;
          weather2.innerText = data.forecast.forecastday[1].day.condition.text;
          sunrise2.innerText = data.forecast.forecastday[1].astro.sunrise;
          sunset2.innerText = data.forecast.forecastday[1].astro.sunset;
          humidity2.innerText = "Humidity: " + data.forecast.forecastday[1].day.avghumidity + "%";
          uv2.innerText = "UV Index: " + data.forecast.forecastday[1].day.uv;
          //--> show the Label of the day 2
          const theDay2 = document.querySelector(`.labelNumber2`);
          const label2 = document.createElement("label");
          label2.textContent = "Tomorrow";
          label2.classList.add('labelNumber');
          theDay2.appendChild(label2);

          // show forecast for the third day
          const timeDate3 = document.querySelector(`.time-date3`);
          const temp3 = document.querySelector(`.tempreture3`);
          const icon3 = document.querySelector(`.icon3`);
          const weather3 = document.querySelector(`.weather3`);
          const sunrise3 = document.querySelector(`.sunrise3`);
          const sunset3 = document.querySelector(`.sunset3`);
          const humidity3 = document.querySelector(`.humidity3`);
          const uv3 = document.querySelector(`.uv3`);

          timeDate3.innerText = data.forecast.forecastday[2].date;
          temp3.innerText = data.forecast.forecastday[2].day.avgtemp_c;
          icon3.innerText = data.forecast.forecastday[2].day.condition.icon;
          weather3.innerText = data.forecast.forecastday[2].day.condition.text;
          sunrise3.innerText = data.forecast.forecastday[2].astro.sunrise;
          sunset3.innerText = data.forecast.forecastday[2].astro.sunset;
          humidity3.innerText = "Humidity: " + data.forecast.forecastday[2].day.avghumidity + "% ";
          uv3.innerText = "UV Index: " + data.forecast.forecastday[2].day.uv;   
          //--> show the Label of the day 3
          const theDay3 = document.querySelector(`.labelNumber3`);
          const label3 = document.createElement("label");
          label3.textContent = "Day after tomorrow";
          label3.classList.add('labelNumber');
          theDay3.appendChild(label3);
        }
      )
    }
  )
}

/*--------------------call the API function--------------------*/
// if the city name was entered and enter pressed, call the JSON database
document.querySelector('#search-input').addEventListener('change', function() {
  var city = document.getElementById('search-input').value;
  apiCall(city, 1);
  const weatherCard = document.querySelector(".gridContainer");
  weatherCard.classList.remove('hide'); 

  searchPhotos(city);
  
});


