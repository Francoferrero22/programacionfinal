window.onload= function (params) {
    

let url1 = ( "https://api.themoviedb.org/3/tv/popular?api_key=aba8582172d8a3b18484779580d5c9bf")

fetch(url1)

.then(function (respuesta) {
    return respuesta.json();

})

.then(function (datos) {
   console.log(datos);
   for (let i=0; i<=4; i++){
       console.log(datos.results[i]);

       document.querySelector("#seriesP").innerHTML += `
       
    <article>
       <div class="foto"> 
       <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].name}">
        </div>
       <h3>${datos.results[i].name}</h3>
       <p>${datos.results[i].first_air_date}</p>
       <a href="./detalleP.html?id=${datos.results[i].id}"> Detalles </a>
    </article>
       `
       
   }

})

.catch(function (e) {
    alert("Ha ocurrido un error!");
})

let url2 = ("https://api.themoviedb.org/3/movie/popular?api_key=aba8582172d8a3b18484779580d5c9bf")

fetch(url2)

.then(function (respuesta) {
    return respuesta.json();
})

.then(function (datos) {
    console.log(datos);
    for (let i=0; i<=4; i++){
        console.log(datos.results[i]);
 
        document.querySelector("#peliculasD").innerHTML += `
        
     <article>
        <div class="foto"> 
             <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}"></img>
        </div>
        <h3>${datos.results[i].title}</h3>
        <p>${datos.results[i].first_air_date}</p>
     </article>
        `
        
    }    
})
.catch(function (e) {
    alert("Ha ocurrido un error!");
})

let url3 = ("https://api.themoviedb.org/3/movie/top_rated?api_key=aba8582172d8a3b18484779580d5c9bf")

fetch(url3)

.then(function (respuesta) {
    return respuesta.json();
})

.then(function (datos) {
    console.log(datos);
    for (let i=0; i<=4; i++){
        console.log(datos.results[i]);
 
        document.querySelector("#masVisto").innerHTML += `
        
     <article>
        <div class="foto"> 
             <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}"></img>
        </div>
        <h3>${datos.results[i].title}</h3>
        <p>${datos.results[i].first_air_date}</p>
     </article>
        `
        
    }    
})
.catch(function (e) {
    alert("Ha ocurrido un error!");
})


}