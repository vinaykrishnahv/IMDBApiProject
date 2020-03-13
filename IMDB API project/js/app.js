var search= document.getElementById("search");
search.addEventListener("keyup", e=>{
    // console.log(e.target.value);
    var searchtext=e.target.value;
    getmovies(searchtext);
});

function getmovies(searchtext){
    const imdbapi=`http://www.omdbapi.com/?s=${searchtext}&apikey=d3a61210`;
    window.fetch(imdbapi)
    .then(movies=>{
        movies
        .json()
        .then(data=>{
            const moviesdata=data.Search
            var output=[];
            for(let movie of moviesdata){
                output+=`
         <div class="container">
    <section id="movies">
    <h1>${movie.Title}</h1>
    <span class="badge badge-success">${movie.Year}</span>
    <p>
    <img src="${movie.Poster}" class="img-poster"/>
    <p><button class="btn btn-dark btn-block">
    go to movie</button></p>
    </p>
    </section>
    </div>`;
    document.getElementById("template").innerHTML=output;
            }

        })
        .catch(err=>console.log(err));
    })
    .catch(err=>console.log(err));
}
