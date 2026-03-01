let currentSelectedRating = 0;
const inputStars = document.querySelectorAll('#inputStars span');

inputStars.forEach(star => {
    star.addEventListener('click', (e) => {
        currentSelectedRating = parseInt(e.target.getAttribute('data-value'));

        inputStars.forEach(s => {
            if (parseInt(s.getAttribute('data-value')) <= currentSelectedRating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

document.getElementById('addMovieBtn').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    if (!title || !year || currentSelectedRating === 0) {
        alert("Please fill in all fields and select a rating.");
        return;
    }

    const newMovie = {
        title: title,
        year: year,
        genre: genre,
        rating: currentSelectedRating
    };

    let movies = JSON.parse(localStorage.getItem('movieDatabase')) || [];

    movies.push(newMovie);

    localStorage.setItem('movieDatabase', JSON.stringify(movies));

    document.getElementById('title').value = '';
    document.getElementById('year').value = '';
    document.getElementById('genre').selectedIndex = 0;
    currentSelectedRating = 0;
    inputStars.forEach(s => s.classList.remove('active'));

    loadMovies();
});
function loadMovies() {
    const movieListContainer = document.getElementById('movieList');

    if (!movieListContainer) return; 
    
    movieListContainer.innerHTML = ''; 

    let movies = JSON.parse(localStorage.getItem('movieDatabase')) || [];

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie-item';

        let starsHTML = '<span class="static-stars">';
        for (let i = 1; i <= 5; i++) {
            if (i <= movie.rating) {
                starsHTML += '<span class="active">&#9733;</span>';
            } else {
                starsHTML += '<span>&#9733;</span>';
            }
        }
        starsHTML += '</span>';

        movieDiv.innerHTML = `
            ${movie.title} (${movie.year}) - ${movie.genre}, Rating: ${starsHTML}
        `;

        movieListContainer.appendChild(movieDiv);
    });
}
loadMovies();