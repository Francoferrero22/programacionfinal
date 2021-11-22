
let querystring = location.search // Atrapo todo lo que esta despues del html
let querystringobj = new URLSearchParams(querystring); // Lo traduzco para poder manipularlo
let busqueda = querystringobj.get("search"); //Atrapo la igualdad de la palabra, atrapando el valor 'search' de la variable querystringobj (solo lo que va despues del =)



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

// fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + busqueda)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         let cancion = data.data
//         let listaCanciones = document.querySelector('.canciones')

//         for (let i = 0; i < cancion.length; i++) {

//             listaCanciones.innerHTML += `<nav class="cancion"><nav class="carta"><a href="detalleCancion.html?id=${cancion[i].id}"><img class="imgl" src="${ cancion[i].album.cover_big }" alt="${ cancion[i].title }"></a></nav> <h3><a href="detalleCancion.html?id=${cancion[i].id}">${ cancion[i].title} </a></h3><p>Cancion que pertenece al album <a href="detalleAlbum.html?id=${cancion[i].album.id}"> <b>${ cancion[i].album.title }</b></a> de <a href="detalleArtista.html?id=${cancion[i].artist.id}"> <b>${cancion[i].artist.name}</b></a></p></nav>`
//         }
//     })

// fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + busqueda)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         let album = data.data
//         let listaAlbumes = document.querySelector('.albums')
//         console.log(album);
//         for (let i = 0; i < album.length; i++) {

//             listaAlbumes.innerHTML += `<nav class="album"><nav class="carta"><a href="detalleAlbum.html?id=${album[i].id}"><img class="imgl" src=" ${album[i].cover_big}" alt="${album[i].title} by ${album[i].artist.name}"></a></nav><h3><a href="detalleAlbum.html?id=${album[i].id}">${album[i].title}</a></h3><p> Album lanzado por <a href="detalleArtista.html?id=${album[i].artist.id}"><b>${album[i].artist.name}</b></a></p></nav>`
//         }
//     })