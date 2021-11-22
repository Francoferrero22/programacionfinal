console.log(location.search); 

let queryStringObj = new URLSearchParams(location.search);

let id = queryStringObj.get("id");

console.log(id); 

    let url1 = ( "https://api.themoviedb.org/3/tv" + id + "?api_key=aba8582172d8a3b18484779580d5c9bf" )

    fetch(url1)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {
            console.log(data)
            let series = data.results
            let prepath = "https://image.tmdb.org/t/p/original/"
            console.log(series);
            
            let seccion = document.querySelector(".slide-series")

            
            seccion.innerHTML += `
            
        <article> <a href="detalle.html?id= ${respuesta.series[i].id}"> 
        <img src="https://image.tmdb.org/t/p/original/?=${respuesta.series[i].poster_path}">
        <h3> ${respuesta.series[i].name}</h3>
        </article>
               
                `
            }
    .catch(function (e) {
      console.log(e);
      alert("Algo salio mal!");
        
    })
        )
