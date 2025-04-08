function MovieClip({ movie }) {

    function onFavouriteClick() {
        alert("Favourite clicked");
    }

    return <div className="movie-clip">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onFavouriteClick}>
                    ♥︎
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
        </div>
    </div>
}

export default MovieClip;