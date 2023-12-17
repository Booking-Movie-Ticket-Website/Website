import LoadingSkeleton from '~/components/loading/LoadingSkeleton';

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
const Loading = () => {
    return (
        <div className="movie-cast">
            <h2 className="movie-title-h2 cast-title">
                <LoadingSkeleton styles={{ height: '36px', width: '140px' }} />
            </h2>
            <div className="mb-movie-cast-list four_column" style={{ height: '230px' }}>
                {Array(8)
                    .fill(0)
                    .map((item, index) => {
                        return (
                            <div className="movie-cast-item" key={index}>
                                <div className="cast-thumbnail">
                                    <LoadingSkeleton
                                        styles={{
                                            height: '100px',
                                            width: '100px',
                                            borderRadius: '50%',
                                        }}
                                    />
                                </div>
                                <div className="cast-info">
                                    <h4 className="cast-name">
                                        <LoadingSkeleton
                                            styles={{ height: '24px', width: '105px' }}
                                        />
                                    </h4>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
MovieTopCast.Loading = Loading;
export default MovieTopCast;
