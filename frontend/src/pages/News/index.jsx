import Separator from "~/components/commons/Separator";
import PostSideBar from "~/components/commons/PostSideBar";
import PostTeaser from "~/components/commons/PostTeaser";
import Header from "~/components/commons/Header";
function News() {
  return <>
    <Header title='Blog' />
    <Separator />
    <div className="d-flex position-relative justify-content-between font-space-grotesk" style={{padding: '10vw', paddingTop: '8vw'}}>
      <PostTeaser />
      <PostSideBar />
    </div>
  </>
}

export default News;
