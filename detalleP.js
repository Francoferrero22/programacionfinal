window.onload = function() {
    let queryStringObj = new URLSearchParams(location.search)
    let id = queryStringObj.get("id")
    let peliurl = ("https://api.themoviedb.org/3/movie/" + id + "?api_key=af93cf6a36d0e3597028097290f9535d")
    
    fetch(peliurl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      console.log(data);
      document.querySelector("#detallepeli").innerHTML +=`
      <article> 
      <img src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="${data.name}"><g>
    <h3>${data.title} </h3>
      <ul>
          <li>${data.vote_average} </li>
          <li>${data.release_date} </li>
          <li>
              <ul>Genres:
                  <li> ${data.genres[0].name} </li>
                 <li> ${data.genres[1].name} </li>
                  </ul>
         </li>
      </ul>      
     </article> `
    })
  
    .catch(function(e){
      console.log(e)
      alert("Algo salio mal")
    })

}