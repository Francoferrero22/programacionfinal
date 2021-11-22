window.onload= function () {


    let queryStringObj = new URLSearchParams(location.search);
    
    let id = queryStringObj.get("id");
    
    
        let url1 = ( "https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&with_genres="+ id)
    
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
            </article>`
                }
        
            )

 }
