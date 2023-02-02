//const clientId = "befOWXko_VO5MAUZByFqicKzazdX8IHU6gsSb6BXadc"; // Nr. 1
const clientId = "8FAQOMjMmHK-HJmM7eLkhcRwyWZVg_TZ5ybi20qw9Dw"; // Nr. 2
//const clientId = "f-pm4kGZgNh2VI_tYGJHAV2pEUazn_deA1KiMjMQUYg"; // Nr. 3
// const clientId = "h_3sisufaSWfhCD0Zsog_yjhnKj-yr1RTyjhuKr3VFY"; // Nr. 4 
// const clientId = "nhHInUCkFEGWWmSpsJt3pJLTYevYEE1oy4pvyWatKiM"; // Nr. 5

let result;
const city = document.querySelector(".city");




function searchPhotos(){
    let searchInput = document.getElementById("search-input").value;
    const url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${searchInput}&per_page=5`;
    let searchSection = document.querySelector('search-section');
    //const gallery = document.querySelector(".search-section");

    fetch(url)
    .then (function (data) {
        //console.log(data)
    return data.json();
    })  .then (function (data) {
        console.log(data) //array/results
       
    //     return data
    // })
    //  .then(function (jsonData) {
    //    console.log(jsonData)

	//.catch(err => console.error(err));

    //result = jsonData.results

    console.log(data.results) //array/0

    const bg = document.querySelector(".bg");
    const img = data.results[Math.floor(Math.random() * 5)].urls.regular;
    bg.style.backgroundImage = `url(${img})`;
    const weatherCard = document.querySelector(".weather-card");

    weatherCard.classList.remove('hide');
    city.innerHTML = searchInput;
    
    
    

   //data.results.forEach ( photo => {

    //     let bgImage = "";
    //     bgImage = document.createElement('img');
    //     bgImage.src = photo.urls.regular;
    //     bgImage.className = "search-section";
    //     //`<img src="${photo.urls.regular}">`
    //    searchSection.appendChild(bgImage);

    // let bgImg = "";
    // bgImg = document.createElement('img');
    // bgImg.src = photo.urls.regular;
    // bgImg.className = "search-section";
    // gallery.appendChild(bgImg);

    // document.body.style.backgroundImage = 'url(${data.results[0].urls.regular})';

   // document.body.style.backgroundImage = 'url(${data.results.urls.regular})';
           //console.log(bgImage)

//    })
})



const apiKey = "37cf947bdeb74b2c9b5184815230102";
const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchInput}&aqi=yes`;
// at the end of the uRL "&aqi=yes" -  fetches also the air quality data
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temp = document.querySelector(".tempreture");


 fetch(weatherUrl)
	.then(response => response.json())
	.then(data => {
        console.log(data)
        icon.src = data.current.condition.icon;
        weather.innerText = data.current.condition.text;
        temp.innerText = data.current.temp_c + "°C";

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time1 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time1;
 
console.log(dateTime)
        let localTime = document.querySelector(".local-time");
        localTime.innerText = dateTime;

        let a;
        let time;
        setInterval(() => {
          a = new Date();
          time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
          document.getElementById('time').innerHTML = "Local time: " + time;
        }, 1000);

        const timeZoneUrl = `http://api.weatherapi.com/v1/timezone.json?key=${apiKey}&q=${searchInput}`;
       fetch(timeZoneUrl)
       .then(response => response.json())
       .then(datatz => {
           console.log(datatz)
           //the same data also fetched from the normal "url"

       })

     } )
	//.catch(err => console.error(err));

}

//searchPhotos()