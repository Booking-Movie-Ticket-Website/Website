import Banner from '~/components/commons/Banner';
import ComingSoon from '~/components/commons/ComingSoon';
import Feedbacks from '~/components/commons/Feedbacks';
import MovieSlider from '~/components/commons/MovieSlider';
import NowPlaying from '~/components/commons/NowPlaying';
import PostHeading from '~/components/commons/PostHeading';
import Posts from '~/components/commons/Posts';
import Promotion from '~/components/commons/Promotion';
import Separator from '~/components/commons/Separator';
import TopFeatured from '~/components/commons/TopFeatured';

function Home() {
    return (
        <div id="home-page">
            <MovieSlider />
            <Separator />
            <NowPlaying />
            <TopFeatured />
            <Feedbacks />
            <ComingSoon />
            <Banner />
            <PostHeading />
            <Posts />
            <Promotion />
        </div>
    );
}

export default Home;
