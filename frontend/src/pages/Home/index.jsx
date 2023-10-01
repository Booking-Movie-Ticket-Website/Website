import MovieSlider from '~/components/commons/MovieSlider';
import NowPlaying from '~/components/commons/NowPlaying';
import Separator from '~/components/commons/Separator';
import TopFeatured from '~/components/commons/TopFeatured';

function Home() {
    return (
        <>
            <MovieSlider />
            <Separator />
            <NowPlaying />
            <TopFeatured />
        </>
    );
}

export default Home;
