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
    const title = document.getElementById('title').value.trim();
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    if (!title || !year || currentSelectedRating === 0) {
        alert("Please fill in all fields and select a rating.");
        return;
    }

    let movies = JSON.parse(localStorage.getItem('movieDatabase')) || [];

    const existingMovieIndex = movies.findIndex(m => m.title.toLowerCase() === title.toLowerCase());

    if (existingMovieIndex !== -1) {
        movies[existingMovieIndex].year = year;
        movies[existingMovieIndex].genre = genre;
        
        const oldRating = movies[existingMovieIndex].rating;
        movies[existingMovieIndex].rating = Math.round((oldRating + currentSelectedRating) / 2);
    } else {
        const newMovie = {
            title: title,
            year: year,
            genre: genre,
            rating: currentSelectedRating
        };
        movies.push(newMovie);
    }

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

    movies.forEach((movie, index) => {
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
                <div class="movie-info">${movie.title} (${movie.year}) - ${movie.genre}, Rating:</div>
                <div class="movie-rating-row">
                    ${starsHTML}
                    <button class="delete-btn" onclick="deleteMovie(${index})">Delete</button>
                </div>
            `;
        movieListContainer.appendChild(movieDiv);
    });
}

function deleteMovie(index) {
    if (confirm("Are you sure you want to delete?")) {
        let movies = JSON.parse(localStorage.getItem('movieDatabase')) || [];
        movies.splice(index, 1); 
        localStorage.setItem('movieDatabase', JSON.stringify(movies));
        loadMovies(); 
    }
}
loadMovies();