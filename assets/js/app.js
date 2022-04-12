// VARIABLE PART
var main = document.getElementById('main');
var apiKey = "";
var page = 1;
var popularList = "https://api.themoviedb.org/3/movie/popular";

// EVENTLISTENER PART

// FUNCTION PART
function createCard(movie, container){

    var card = document.createElement('div');
        card.classList.add('card')
        card.style.width = "18rem";

    var img = document.createElement('img');
        img.src = "https://image.tmdb.org/t/p/w92"+movie.backdrop_path;
        img.classList.add('card-img-top');

    card.appendChild(img);

    var body = document.createElement('div');
        body.classList.add('card-body');

    card.appendChild(body);

    var title = document.createElement('h5');
        title.classList.add('card-title');
        title.innerHTML = movie.title;

    var text = document.createElement('p');
        text.classList.add('card-text');
        text.innerHTML = movie.overview;

    var link = document.createElement('a');
        link.href = "#";
        link.innerHTML = "Bande annonce";

    body.appendChild(title);
    body.appendChild(text);
    body.appendChild(link);

    container.appendChild(card);

}
function callData(api, page){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', api+'?api_key='+apiKey+'&language=fr-FR&page='+page);
    xhr.onload = () => {

        if (xhr.status === 200) {
            var res = JSON.parse(xhr.response).results;
            console.log(res);
            res.forEach(movie => {
                createCard(movie, main);
            });
        }

    }
    xhr.send();

}
// WINDOW ONLOAD
window.onload = () => {

    callData(popularList, page);
    
    // for (let index = 1; index < 101; index++) {
    //     callData(popularList, index);
    // }

}