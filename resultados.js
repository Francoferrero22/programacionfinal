let formulario = document.querySelector('form')
let formu = document.getElementById('formu')
console.log(formu);
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formu.value === '') {
        alert('EL CAMPO NO PUEDE ESTAR VACIO')
    } else if (formu.value.length < 3) {
        alert('EL CAMPO REQUIERE DE UN MINIMO DE 3 DIGITOS')
    }else {
        formulario.submit();
    }
})


let querystring = location.search // Atrapo todo lo que esta despues del html
let querystringobj = new URLSearchParams(querystring); // Lo traduzco para poder manipularlo
let busqueda = querystringobj.get("search"); //Atrapo la igualdad de la palabra, atrapando el valor 'search' de la variable querystringobj (solo lo que va despues del =)

let titulo = document.querySelector('.titulo')
console.log(busqueda);

let resultado = document.querySelector('.resultado')
titulo.innerHTML += `Resultado de busqueda`

resultado.innerHTML += `"${busqueda}"`

let listas = document.querySelector('.listas')


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + busqueda) //Cuando llamo a busqueda le agrego a la url del endpoint especifico lo que atrape

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let artista = data.data
        let listaArtistas = document.querySelector('.artistas')
        if (artista.length == 0) {
            titulo.innerHTML = '¡La cancion que quisiste buscar no existe!'
            resultado.innerHTML = ''
            listas.style.height = '80vh'
            listas.style.color = 'rgb(46, 46, 46)'
            listas.style.fontSize = '60px'
            listas.style.display = 'flex'
            listas.style.alignItems = 'center'
            listas.style.justifyContent = 'center'

            listas.innerHTML = '<h1>¡No se encontraron resultados!</h1>'
        }
        for (let i = 0; i < artista.length; i++) {
            listaArtistas.innerHTML += `<nav class="artista"><nav class="carta"><a href="detalleArtista.html?id=${artista[i].id}"><img class="imgl" src="${artista[i].picture_big}" alt="${ artista[i].name }"> </a> </nav><h3><a href="detalleArtista?id=${artista[i].id}">${ artista[i].name }</a></h3></nav></nav>`
        }
    })

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + busqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let cancion = data.data
        let listaCanciones = document.querySelector('.canciones')

        for (let i = 0; i < cancion.length; i++) {

            listaCanciones.innerHTML += `<nav class="cancion"><nav class="carta"><a href="detalleCancion.html?id=${cancion[i].id}"><img class="imgl" src="${ cancion[i].album.cover_big }" alt="${ cancion[i].title }"></a></nav> <h3><a href="detalleCancion.html?id=${cancion[i].id}">${ cancion[i].title} </a></h3><p>Cancion que pertenece al album <a href="detalleAlbum.html?id=${cancion[i].album.id}"> <b>${ cancion[i].album.title }</b></a> de <a href="detalleArtista.html?id=${cancion[i].artist.id}"> <b>${cancion[i].artist.name}</b></a></p></nav>`
        }
    })

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + busqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let album = data.data
        let listaAlbumes = document.querySelector('.albums')
        console.log(album);
        for (let i = 0; i < album.length; i++) {

            listaAlbumes.innerHTML += `<nav class="album"><nav class="carta"><a href="detalleAlbum.html?id=${album[i].id}"><img class="imgl" src=" ${album[i].cover_big}" alt="${album[i].title} by ${album[i].artist.name}"></a></nav><h3><a href="detalleAlbum.html?id=${album[i].id}">${album[i].title}</a></h3><p> Album lanzado por <a href="detalleArtista.html?id=${album[i].artist.id}"><b>${album[i].artist.name}</b></a></p></nav>`
        }
    })