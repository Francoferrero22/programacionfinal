

  console.log(location.search); 

    let queryStringObj = new URLSearchParams(location.search);

    let id = queryStringObj.get("id");

    console.log(id);

 

    const titulo = document.querySelector(".titulo");
    const seccion = document.querySelector("#detallepeli")
    const rating = document.querySelector(".rating");
    const release = document.querySelector(".release");
    const duracion = document.querySelector(".duracion");
    const sinopsis = document.querySelector(".sinopsis");
    const generos = document.querySelector(".generos")

    fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=aba8582172d8a3b18484779580d5c9bf")
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      
      console.log(data);

      for(let i=0; i<= data.genres.length; i++){
       generos.innerHTML += `<a href="./detalleG.html?id=${data.genres[i].id}"> ,${data.genres[i].name}</a>` 
      }

     titulo.innerText += "" + data.title;
     seccion.innerHTML += `
     <div> 
     <img src="https://image.tmdb.org/t/p/w342/"${data.poster_path}>
     </div>
     `
    rating.innerText += "" + data.vote_average

    })
  
    .catch(function(e){
      console.log(e)
      alert("Algo salio mal")
    })

