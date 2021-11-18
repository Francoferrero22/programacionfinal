window.onload = function() {
    let queryStringObj = new URLSearchParams(location.search)
    let id = queryStringObj.get("id")
    let peliurl = ("https://api.themoviedb.org/3/tv/" + id + "?api_key=af93cf6a36d0e3597028097290f9535d")
    
    fetch(peliurl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      console.log(data); 
      for (let i=0; i<=4; i++){
        console.log(data.results[i]);
      document.querySelector("#detallepeli").innerHTML +=`
      <article> 
      <img src:"https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].name}"></img>
    <h3>${data.results[i].name} </h3>
      <ul>
          <li>${data.results[i].vote_average} </li>
          <li>${data.results[i].first_air_date} </li>
          <li> ${data.results[i].episode_run_time} </li>
          <li>
              <ul></ul>
         </li>
      </ul>      
     </article> `
    }
    })
  
    .catch(function(e){
      console.log(e)
      alert("Algo salio mal")
    })
  
  
  
//   // empieza boton de hacer favorito
//   //busca las series favoritas localStorage
//   let recuperoStorage = localStorage.getItem("seriesFavoritas");
  
//   // Si todavía no tenía series favoritos
//   if (recuperoStorage == null) {
//     // Creo una lista vacia
//     seriesFavoritas = [];
//   } else {
//     // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
//     seriesFavoritas = JSON.parse(recuperoStorage);
//   }
//   //busca en el url el id
//   let datos = new URLSearchParams(location.search);
//   let idSerie = datos.get("id");
//   //si series favoritas ya tiene ese id cambia el texto del boton
//   if (seriesFavoritas.includes(idSerie)) {
//     document.querySelector(".fav").innerHTML = "QUITAR DE FAVORITOS";
//   }
  
//   // cuando clickeas en el boton se ejecuta lo de abajo
//     document.querySelector(".fav").onclick = function() {
  
  
//       //Paso 2: Modificar la informacion
//       // Si la serie ya era favorita
//       if (seriesFavoritas.includes(idSerie)) {
//         // indexOf Lo busca en el array y splice lo quita
//         let index = seriesFavoritas.indexOf(idSerie);
//       seriesFavoritas.splice(index, 1);
//       // cuando lo saca vuelve el texto para volver a agregarlo a favorito
//         document.querySelector("button.fav").innerHTML = "AGREGAR FAVORITO";
//       } else {
//         //si no esta, lo agrega
//       seriesFavoritas.push(idSerie);
//         document.querySelector("button.fav").innerHTML = "QUITAR DE FAVORITOS";
//       }
  
  
//       //Paso 3: Escribir en storage
//       //lo vuelve a comprimir en json en el localStorage
//       let infoParaStorage = JSON.stringify(seriesFavoritas);
//       // setItem lo guarda en localStorage
//       localStorage.setItem("seriesFavoritas", infoParaStorage);
//       console.log(localStorage); 
}