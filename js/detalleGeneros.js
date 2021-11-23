let queryStringObj = new URLSearchParams(location.search);

let id = queryStringObj.get("id");

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=af93cf6a36d0e3597028097290f9535d")
    .then(function (response) {
        return response.json();

    })
    .then(function (data) {
            let contenedor = document.querySelector("main")
            for (let i = 0; i < data.genres.length; i++) {
                if (data.genres[i].id == id) {
                    contenedor.innerHTML = `
                <h1>${data.genres[i].name}</h1>
            
                `
                }
            };


            fetch("https://api.themoviedb.org/3/discover/movie?api_key=aba8582172d8a3b18484779580d5c9bf&with_genres=" + id)

                .then(function (respuesta) {
                    return respuesta.json();
                })

                .then(function (data) {
                    console.log(data)
                    let detalleGpeli = document.querySelector(".detalleP")
                    for (let i = 0; i < data.results.length; i++) {
                        detalleGpeli.innerHTML += `
                    <article> <a href="detalle.html?id= ${data.results.id}"> 
            <img src="https://image.tmdb.org/t/p/w342/${data.results.poster_path}">
            <h3> ${data.results.name}</h3>
            </article>
                    `

                    }



                })

                .catch(function (error) {
                    alert("Ha ocurrido un error.");
                })



            fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=af93cf6a36d0e3597028097290f9535d")

                .then(function (respuesta) {
                    return respuesta.json();
                })

                .then(function (data) {
                    let contenedor = document.querySelector("main")
                    for (let i = 0; i < data.genres.length; i++) {
                        if (data.genres[i].id == id) {
                            contenedor.innerHTML = `
            <h1>${data.genres[i].name}</h1>
            `
                        }
                    }

                    fetch("https://api.themoviedb.org/3/discover/tv?api_key=aba8582172d8a3b18484779580d5c9bf&with_genres=" + id)

                        .then(function (respuesta) {
                            return respuesta.json();
                        })

                        .then(function (data) {
                            console.log(data)
                            let detalleGseries = document.querySelector(".detalleS")
                            for (let i = 0; i < data.results.length; i++) {
                                detalleGseries.innerHTML += `
                <article> <a href="detalle.html?id= ${data.results.id}"> 
        <img src="https://image.tmdb.org/t/p/w342/${data.results.poster_path}">
        <h3> ${data.results.name}</h3>
        </article>
                `

                            }

                        })
                })

                .catch(function (error) {
                    console.log(error);
                    alert("Ocurrió un error.")
                })