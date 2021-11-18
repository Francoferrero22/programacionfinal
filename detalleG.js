window.onload = function(){
    let generosObj = new URLSearchParams(location.search);
  let idGenero = generosObj.get('genero');
    fetch("https://api.themoviedb.org/3/discover/tv?api_key=64473b4750029f7eee1095d5f01e52e7&language=en-US&with_genres="+ idGenero)
    .then(function(r){
      return r.json()
    })
      .then(function(data){
        console.log(data)
        let series = data.results
        let prepath = 'https://image.tmdb.org/t/p/original/'
        console.log(series);
        let ul = document.querySelector(".slide-series")
        for (let i = 0; i < series.length; i++) {
          let a = '<a href="detalle.html?id='+ series[i].id + '">'
          a += '<li>'
          a += '<img src="'+prepath+series[i].poster_path +'" alt="">'
          a += '<h1>'+series[i].name.toUpperCase()+'</h1>'
          a += '</li>'
          a += '</a>'
          ul.innerHTML += a;
        }
      })
    
    }

























