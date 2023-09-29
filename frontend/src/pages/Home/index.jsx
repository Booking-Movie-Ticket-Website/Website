import MovieSlider from '~/components/commons/MovieSlider';
import NowPlaying from '~/components/commons/NowPlaying';
import Separator from '~/components/commons/Separator';

function Home() {
    return (
        <>
            <MovieSlider />
            <Separator />
            <NowPlaying />
        </>
    );
}

export default Home;
