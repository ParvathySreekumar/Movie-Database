import "../css/Favorites.css"
import { useState } from "react"; // Add useState import
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const { favorites } = useMovieContext();
    const [searchQuery, setSearchQuery] = useState(""); // Define the searchQuery state

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase()); // Update searchQuery when input changes
    };

    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No Favorite Movies Yet</h2>
                <p>Start adding movies and they will show here</p>
            </div>
        );
    }

    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            <input
                type="text"
                placeholder="Search Favorites"
                value={searchQuery}
                onChange={handleSearchChange} // Attach the input change handler
            />
            <div className="movies-grid">
                {favorites
                    .filter((movie) =>
                        movie.title.toLowerCase().startsWith(searchQuery) // Filter movies based on search query
                    )
                    .map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    );
}

export default Favorites;
