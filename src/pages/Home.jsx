import MovieTile from "../components/MovieTile";
function Home() {

    const movies = [
        { id: 1, title: "John Wick", releaseDate: "2023-01-01" },
        { id: 2, title: "Terminator", releaseDate: "2023-11-03" },
        { id: 3, title: "The Matrix", releaseDate: "2023-09-12" }
    ]

    const handleSearch = () =>{

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for a movie..." className="search input" />
        <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movie-grid">
            {movies.map((movie) => (<MovieTile key={movie.id} movie={movie} />))}

        </div>
    </div>
}
export default Home;