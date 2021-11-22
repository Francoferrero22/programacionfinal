window.onload = function () {


// dropdown
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=af93cf6a36d0e3597028097290f9535d")
.then(function(respuesta) {
  return respuesta.json();
})
.then(function(respuesta) {
  console.log(respuesta)
  let listadoGeneros = document.querySelector("#listado-de-generos");
  for(let i = 0; i < respuesta.genres.length; i++) {
    listadoGeneros.innerHTML += `
  <li>
    <a href="./detalleGeneros.html?=${respuesta.genres[i].id}"> ${respuesta.genres[i].name} </a>
  </li>`
  }
})




}
