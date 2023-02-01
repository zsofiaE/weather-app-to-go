const clientId = "befOWXko_VO5MAUZByFqicKzazdX8IHU6gsSb6BXadc"; // Nr. 1
//const clientId = "8FAQOMjMmHK-HJmM7eLkhcRwyWZVg_TZ5ybi20qw9Dw"; // Nr. 2
//const clientId = "f-pm4kGZgNh2VI_tYGJHAV2pEUazn_deA1KiMjMQUYg"; // Nr. 3
// const clientId = "h_3sisufaSWfhCD0Zsog_yjhnKj-yr1RTyjhuKr3VFY"; // Nr. 4 
// const clientId = "nhHInUCkFEGWWmSpsJt3pJLTYevYEE1oy4pvyWatKiM"; // Nr. 5



// fetch('http://example.com/songs')
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));


function searchWeather(){
    let searchInput = document.getElementById("search-input").value;
    const url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${searchInput}&per_page=1`;


    // fetch(url)
    // .then (function (data) {
    //     return data.json();
    // })  .then (function (data) {
    //     return data
    // })
    //  .then(function (jsonData) {
    //    //console.log(jsonData.results)
    //  } )
      
    // }
     
    fetch('url')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));



    const searchSection = document.querySelector(".search-section");
    searchSection.innerHTML="";
    let bgImage = document.createElement('img');
    bgImage.src = 



