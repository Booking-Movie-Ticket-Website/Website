import ComingSoon from '~/components/commons/ComingSoon';
import Feedbacks from '~/components/commons/Feedbacks';
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
            <Feedbacks />
            <ComingSoon />
        </>
    );
}

export default Home;
