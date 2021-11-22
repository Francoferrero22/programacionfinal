
let querystring = location.search 
let querystringobj = new URLSearchParams(querystring); 
let busqueda = querystringobj.get("search"); 



fetch(`https://api.themoviedb.org/3/search/movie?api_key=af93cf6a36d0e3597028097290f9535d&language=en-US&query=${busqueda}&page=1&include_adult=false`) //Cuando llamo a busqueda le agrego a la url del endpoint especifico lo que atrape

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    let contenedor = document.querySelector("#resultado")
    for (let i = 0; i < data.results.length; i++) {
        contenedor.innerHTML +=
    ` <article> 
    <div class= "foto">
    <a href="detalleP.html?id=${data.results[i].id}">
    <img src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="${data.results[i].title}"> 
    <h4> ${data.results[i].title} </h4></a>
    </div>
</article>`
 } 
 })
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=af93cf6a36d0e3597028097290f9535d&language=en-US&query=${busqueda}&page=1&include_adult=false`) //Cuando llamo a busqueda le agrego a la url del endpoint especifico lo que atrape

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let contenedor = document.querySelector("#resultado")
        for (let i = 0; i < data.results.length; i++) {
            contenedor.innerHTML +=
        ` <article> 
        <div class= "foto">
        <a href="detalle.html?id=${data.results[i].id}"> 
        <img src="https://image.tmdb.org/t/p/w342${data.results[i].backdrop_path}" alt="">
        <h4> ${data.results[i].name} </h4> </a>
    </div>
    </article>`
            
        }
   })
