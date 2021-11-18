window.onload = function () {


// dropdown
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US")
.then(function(response) {
  return response.json();
})
.then(function(respuesta) {
  console.log(respuesta)
  // console.log(respuesta.genres[0].name);
  let listadoGeneros = document.querySelector("#listado-de-generos");
  for(let i = 0; i < respuesta.genres.length; i++) {
    listadoGeneros.innerHTML += "<li><a href='./detalleG.html?genero=" + respuesta.genres[i].id + "'>" + respuesta.genres[i].name + "</a></li>";
  }
})




}
