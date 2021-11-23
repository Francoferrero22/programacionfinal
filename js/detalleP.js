let queryStringObj = new URLSearchParams(location.search);

let id = queryStringObj.get("id");

let peliurl = ("https://api.themoviedb.org/3/movie/" + id + "?api_key=aba8582172d8a3b18484779580d5c9bf");

fetch(peliurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);


    document.querySelector("#detallepeli").innerHTML += `
  <article class="detalle"> 
  <img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="${data.name}" class="foto-detalle">
<h3>${data.title} </h3>
  <ul>
      <li>Rating: ${data.vote_average} </li>
      <li>Fecha de estreno: ${data.first_air_date} </li>
      <li>Duración: ${data.runtime} minutos</li>
      <li>Sinopsis: ${data.overview}</li>
      <li>Géneros: </li>
  </ul>     
  <h3><a id="fav"> Agregar a favoritos </a> </h3> 
 </article> `

    const fav = document.querySelector("#fav");
    let favoritosP = [];
    let recuperoStorage = localStorage.getItem("favoritosP");

    if (recuperoStorage && recuperoStorage != null) {

      favoritosP = JSON.parse(recuperoStorage);

    }
    console.log(favoritosP);


    if (favoritosP.includes(id)) {
      fav.innerHTML = `
   <h3><a id="fav"> Quitar de favoritos </a></h3>   `

      fav.addEventListener("click", function (e) {

        e.preventDefault();

        if (favoritosP.includes(id)) {

          let aBorrar = favoritosP.indexOf(id);
          favoritosP.splice(aBorrar, 1);
          fav.innerHTML = `
          
      <h3><a id="fav"> Agregar a favoritos </a></h3>   `

        } else {

          favoritosP.push(id);
          fav.innerHTML = `
      <h3><a id="fav"> Quitar de favoritos </a></h3>   `

        }

        let favStorageP = JSON.stringify(favoritosP);
        localStorage.setItem("favoritos", favStorageP);


      });

    }

  })


  .catch(function (e) {
    console.log(e)
    alert("Algo salio mal")
  })