

    let queryStringObj = new URLSearchParams(location.search);
    
    let id = queryStringObj.get("id");
    
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=af93cf6a36d0e3597028097290f9535d")
        .then (function (response) {
            return response .json();
            
        })
        .then (function (data) {
            
        let url1 = ("https://api.themoviedb.org/3/discover/movie?api_key=7a176cc95147be6e695be2faf0e8ff9c&with_genres=${idGp")
    
        fetch(url1)
            .then(function (respuesta) {
                return respuesta.json();
            })
            
            .then(function (data) {
                console.log(data)
            //let series = data.results
                console.log(data.results);
                
                let seccion = document.querySelector(".slide-series")
    
                 seccion.innerHTML += `
                
            <article> <a href="detalle.html?id= ${data.results.id}"> 
            <img src="https://image.tmdb.org/t/p/w342/${data.results.poster_path}">
            <h3> ${data.results.name}</h3>
            </article>` }
            )}
        
            )

            .catch( function(error){
                alert("Ha ocurrido un error.");
            })

let url2 = ("https://api.themoviedb.org/3/discover/tv?api_key=aba8582172d8a3b18484779580d5c9bf&with_genres=${idGp")

fetch(url2)
.then(function (respuesta) {
    return respuesta.json();
})

.then(function (data) {
    console.log(data)
//let series = data.results
    console.log(data.results);
    
    let seccion = document.querySelector(".slide-series")

     seccion.innerHTML += `
    
<article> <a href="detalle.html?id= ${data.results.id}"> 
<img src="https://image.tmdb.org/t/p/w342/${data.results.poster_path}">
<h3> ${data.results.name}</h3>
</article>`
    }

)

.catch( function(error){
    alert("Ha ocurrido un error.");
})

 
