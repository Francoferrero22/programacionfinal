let queryStringObj = new URLSearchParams(location.search);
let id = queryStringObj.get("id");
let serieurl = ("https://api.themoviedb.org/3/tv/" + id + "?api_key=aba8582172d8a3b18484779580d5c9bf");

    fetch(serieurl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);


        document.querySelector("#detalleSeries").innerHTML += `
      <article class="detalle"> 
      <img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="${data.name}" class="foto-detalle">
    <h3>${data.name} </h3>
      <ul>
          <li>Rating: ${data.vote_average} </li>
          <li>Fecha de estreno: ${data.first_air_date} </li>
          <li>Duración: ${data.episode_run_time} minutos</li>
          <li>Sinopsis: ${data.overview}</li>
          <li>Géneros: </li>
      </ul>   
      <h3><a id="fav"> Agregar a favoritos </a></h3>
     </article> `


        const fav = document.querySelector("#fav");
        let favoritosS = [];
        let recuperoStorage = localStorage.getItem("favoritosS");

        if (recuperoStorage && recuperoStorage != null) {

          favoritosS = JSON.parse(recuperoStorage); //convierto de string a objeto literal para poder trabajar

        }
        console.log(favoritosS);

        if (favoritosS.includes(id)) {
          fav.innerHTML = `
       <h3><a id="fav"> Quitar de favoritos </a></h3>
       `
        }
        fav.addEventListener("click", function (e) {

          e.preventDefault();

          if (favoritosS.includes(id)) {

            let borrar = favoritosS.indexOf(id);
            favoritosS.splice(borrar, 1);
            fav.innerHTML = `
 
          <h3><a id="fav"> Agregar a favoritos </a></h3> `

          } else {

            favoritosS.push(id)
            fav.innerHTML = `
          <h3><a id="fav"> Quitar de
           favoritos </a></h3>
       `

          }

          let favStorageS = JSON.stringify(favoritosS);
          localStorage.setItem("favoritos", favStorageS);


        });


      })


      .catch(function (e) {
        console.log(e)
        alert("Algo salio mal")
      })