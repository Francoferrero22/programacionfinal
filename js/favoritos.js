//local storage pelis

let favoritosP = []; //array de pelis favoritas
let favoritosS = []; //array de series favoritas

if (localStorage.getItem("favoritos")) {

    let recuperoStorage = localStorage.getItem("favoritos");
    favoritosP = JSON.parse(recuperoStorage);

}

console.log(favoritosP);

const seccionP = document.querySelector("#seccionFavP");

if (favoritosP.length == 0) {
    seccionP.innerHTML += `
        <h2> ¡Lo sentimos! Aún no has añadido ninguna película a Favoritos. </h2>
    `
} else {
    for (let i = 0; i < favoritosP.length; i++) {
        const id = favoritosP[i];

        let urlP = ("https://api.themoviedb.org/3/movie/" + id + "?api_key=aba8582172d8a3b18484779580d5c9bf")

        fetch(urlP)

            .then(function (respuesta) {

                return respuesta.json();

            })

            .then(function (datos) {
                console.log(datos);

                seccionP.innerHTML += `
    
            <article>
                <div class="fotos">
                    <a href="./detalleP.html?id=${data.id}">
                    <img src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" alt="${datos.title}"></img> 
                    </a>
                </div>
    
                <h3>${datos.title.id}</h3>
    
                <p>${datos.release_date.id}</p>
            
                <a href="./detalleP.html?id=${datos.id}"> Detalles </a>

                <h3><a id="fav"> Quitar de
           favoritos </a></h3>
    
            </article>
            
            `
            })

            .catch(function (error) {
                console.log(error);
                alert("Algo salió mal.");
            })
    }

}





//local storage series

if (localStorage.getItem("favoritos")) {

    let recuperoStorage = localStorage.getItem("favoritos");
    favoritosS = JSON.parse(recuperoStorage);

}

console.log(favoritosS);

const seccionS = document.querySelector("#seccionFavS");

if (favoritosS.length == 0) {
    seccionS.innerHTML += `
        <h2> ¡Lo sentimos! Aún no has añadido ninguna película a Favoritos. </h2>
    `
} else {
    for (let i = 0; i < favoritosS.length; i++) {
        const id = favoritosS[i];

        let urlS = ("https://api.themoviedb.org/3/tv/" + id + "?api_key=aba8582172d8a3b18484779580d5c9bf")

        fetch(urlS)

            .then(function (respuesta) {

                return respuesta.json();

            })

            .then(function (datos) {
                console.log(datos);

                seccionS.innerHTML += `
    
            <article>
                <div class="fotos">
                    <img src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" alt="${datos.title}"></img>
                </div>
    
                <h3>${datos.title}</h3>
    
                <p>${datos.release_date}</p>
            
                <a href="./detalleP.html?id=${datos.id}"> Detalles </a>
    
            </article>
            
            `
            })

            .catch(function (error) {
                console.log(error);
                alert("Algo salió mal.");
            })
    }

}