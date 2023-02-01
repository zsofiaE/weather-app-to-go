//const clientId = "befOWXko_VO5MAUZByFqicKzazdX8IHU6gsSb6BXadc"; // Nr. 1
const clientId = "8FAQOMjMmHK-HJmM7eLkhcRwyWZVg_TZ5ybi20qw9Dw"; // Nr. 2
//const clientId = "f-pm4kGZgNh2VI_tYGJHAV2pEUazn_deA1KiMjMQUYg"; // Nr. 3
// const clientId = "h_3sisufaSWfhCD0Zsog_yjhnKj-yr1RTyjhuKr3VFY"; // Nr. 4 
// const clientId = "nhHInUCkFEGWWmSpsJt3pJLTYevYEE1oy4pvyWatKiM"; // Nr. 5

let result;


function searchPhotos(){
    let searchInput = document.getElementById("search-input").value;
    const url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${searchInput}&per_page=5`;
    let searchSection = document.querySelector('search-section');
    const gallery = document.querySelector(".search-section");

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


}

//searchPhotos()
