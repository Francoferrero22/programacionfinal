
// dropdown
let urlS = ("https://api.themoviedb.org/3/genre/tv/list?api_key=af93cf6a36d0e3597028097290f9535d")
fetch(urlS)
.then(function(respuesta) {
  return respuesta.json();
})
.then(function(datos) {
  console.log(datos)
  let listadoGeneros = document.querySelector("#listado-de-generosS")

  for(let i = 0; i < datos.genres.length; i++) {
    listadoGeneros.innerHTML += `
  <li>
    <a href="./detalleGeneros.html?=${datos.genres[i].id}"> ${datos.genres[i].name} </a>
  </li>`
  }
})

.catch(function(error){
  console.log(error);
})

let urlP = ("https://api.themoviedb.org/3/genre/movie/list?api_key=af93cf6a36d0e3597028097290f9535d")

fetch(urlP)

.then(function(response){
  return response.json();
})

.then(function(datos){
  console.log(datos);

  let listadoGeneros = document.querySelector("#listado-de-generosP")

  for(let i = 0; i < datos.genres.length; i++) {
    listadoGeneros.innerHTML += `
  <li>
    <a href="./detalleGeneros.html?=${datos.genres[i].id}"> ${datos.genres[i].name} </a>
  </li>`
  }  
})

