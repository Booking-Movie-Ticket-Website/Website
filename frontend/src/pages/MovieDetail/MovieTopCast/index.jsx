function MovieTopCast({ data }) {
    return (
        <div className="movie-cast">
            <h2 className="movie-title-h2 cast-title">Top Cast</h2>
            <div className="mb-movie-cast-list four_column">
                {data.movieParticipants.map((item, index) => (
                    <div className="movie-cast-item" key={index}>
                        <div className="cast-thumbnail">
                            <img src={item.people.profilePicture} alt={item.people.fullName} />
                        </div>
                        <div className="cast-info">
                            <h4 className="cast-name">{item.people.fullName}</h4>
                        </div>
                    </div>
                ))}
            </div>{' '}
        </div>
    );
}
export default MovieTopCast;
