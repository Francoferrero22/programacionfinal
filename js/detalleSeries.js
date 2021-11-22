
    let queryStringObj = new URLSearchParams(location.search);

    let id = queryStringObj.get("id");

    let peliurl = ("https://api.themoviedb.org/3/tv/" +id + "?api_key=aba8582172d8a3b18484779580d5c9bf");
    
    fetch(peliurl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      console.log(data);

      
      document.querySelector("#detalleSeries").innerHTML +=`
      <article class=""detalle> 
      <img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="${data.name}">
    <h3>${data.name} </h3>
      <ul>
          <li>Rating: ${data.vote_average} </li>
          <li>Fecha de estreno: ${data.first_air_date} </li>
          <li>Duración: ${data.episode_run_time} minutos</li>
          <li>Sinopsis: ${data.overview}</li>
          <li>Géneros: </li>
      </ul>     
      <button type="submit" class="fav">Agregar a favoritos</button> 
     </article> `

     const fav = document.querySelector(".fav");

     let favoritos = [];

     let recuperoStorage = localStorage.getItem("favoritos");

     if(recuperoStorage && recuperoStorage != null){ 
       
      favoritos = JSON.parse(recuperoStorage);

     }

     if(favoritos.includes(id)){
       fav.innerHTML = `
       Quitar de favoritos
       `

      fav.addEventListener("click",function(e){

        e.preventDefault();

        if(favoritos.includes(id)){

          let aBorrar = favoritos.indexOf(id);

          favoritos.splice(aBorrar, 1);

          fav.innerHTML = `
       Agregar a favoritos
       `
          
        }
        else{

          favoritos.push(id);

          fav.innerHTML = `
       Quitar de favoritos
       `

        }

        let favStorage = JSON.stringify(favoritos);

        localStorage.setItem("favoritos", favStorage);


      });

     }

    })

  
    .catch(function(e){
      console.log(e)
      alert("Algo salio mal")
    })


  
/*
//empieza boton de hacer favorito
  // busca las series favoritas localStorage
   let recuperoStorage = localStorage.getItem("seriesFavoritas");
  
    //Si todavía no tenía series favoritos
   if (recuperoStorage == null) {
  //    Creo una lista vacia
     seriesFavoritas = [];
   } else {
      //Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
     seriesFavoritas = JSON.parse(recuperoStorage);
   }
   //busca en el url el id
   let datos = new URLSearchParams(location.search);
   let idSerie = datos.get("id");
   //si series favoritas ya tiene ese id cambia el texto del boton
   if (seriesFavoritas.includes(idSerie)) {
     document.querySelector(".fav").innerHTML = "QUITAR DE FAVORITOS";
   }
  
   // cuando clickeas en el boton se ejecuta lo de abajo
     document.querySelector(".fav").onclick = function() {
  
  
    //   Paso 2: Modificar la informacion
    //    Si la serie ya era favorita
       if (seriesFavoritas.includes(idSerie)) {
    //      indexOf Lo busca en el array y splice lo quita
         let index = seriesFavoritas.indexOf(idSerie);
       seriesFavoritas.splice(index, 1);
    //    cuando lo saca vuelve el texto para volver a agregarlo a favorito
         document.querySelector("button.fav").innerHTML = "AGREGAR FAVORITO";
       } else {
    //     si no esta, lo agrega
       seriesFavoritas.push(idSerie);
         document.querySelector("button.fav").innerHTML = "QUITAR DE FAVORITOS";
       }
  
  
     //  Paso 3: Escribir en storage
     //  lo vuelve a comprimir en json en el localStorage
       let infoParaStorage = JSON.stringify(seriesFavoritas);
     //   setItem lo guarda en localStorage
       localStorage.setItem("seriesFavoritas", infoParaStorage);
       console.log(localStorage); 
      }
    */
