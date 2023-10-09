import PostMetaBar from "./PostMetaBar"
import postImage from "~/assets/images/blog-4.jpg"

function PostTeaser(){
    return <div className="" style={{width: '52vw'}}>
    <div className="">
      <img src={postImage} alt="post-image" className="mb-4" />
      <div className="fs-2 fw-bold text-black mb-4" >See Meila enjoyable capturing moment</div>
      <PostMetaBar />
      <div className="mb-4 text-nickel">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable.</div>
      <button>Read more</button>
    </div>
  </div>

}
export default PostTeaser