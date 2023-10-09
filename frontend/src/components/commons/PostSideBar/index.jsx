import postSmallImage from "~/assets/images/blog-4-150x150.jpg"

function PostSideBar() {
    return <div className="" style={{width: '23vw'}}>
    <div className="d-flex justify-content-between px-4 py-4 align-items-center bg-primary search-input">
      <input type="text" name="" id="" className="border-0 bg-primary text-white" placeholder="Search ..." />
      <i className="icon ovaicon-search text-white mr-2"></i>
    </div>
    <div className="my-4 p-4 bg-anti-flash-white">
      <div className="text-black fw-bold fs-5 mb-5">Latest Posts</div>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <img src={postSmallImage} className="w-25 h-25" alt="" />
        <div className="ms-3">
          <div className="d-flex">
            <i className="icon ovaicon-comment text-primary me-1 pt-1"></i>
            <div>0 Comments</div>
          </div>
          <div className="text-black fw-bold lh-sm fs-5">See Meila enjoyable capturing moment</div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <img src={postSmallImage} className="w-25 h-25" alt="" />
        <div className="ms-3">
          <div className="d-flex">
            <i className="icon ovaicon-comment text-primary me-1 pt-1"></i>
            <div>0 Comments</div>
          </div>
          <div className="text-black fw-bold lh-sm fs-5">See Meila enjoyable capturing moment</div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <img src={postSmallImage} className="w-25 h-25" alt="" />
        <div className="ms-3">
          <div className="d-flex">
            <i className="icon ovaicon-comment text-primary me-1 pt-1"></i>
            <div>0 Comments</div>
          </div>
          <div className="text-black fw-bold lh-sm fs-5">See Meila enjoyable capturing moment</div>
        </div>
      </div>
    </div>
    <div className="my-4 p-4 bg-anti-flash-white">
      <div className="text-black fw-bold fs-5 mb-4">Categories</div>
      <div>
        <div className="d-flex align-items-center mb-3">
          <i className="icon ovaicon-folder me-2 pt-1"></i>
          <div className="fw-medium text-nickel">Fantasy</div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <i className="icon ovaicon-folder me-2 pt-1"></i>
          <div className="fw-medium text-nickel">Fantasy</div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <i className="icon ovaicon-folder me-2 pt-1"></i>
          <div className="fw-medium text-nickel">Fantasy</div>
        </div>
      </div>
    </div>
    <div className="my-4 p-4 bg-anti-flash-white">
      <div className="text-black fw-bold fs-5 mb-4">Tags</div>
      <div className="d-flex flex-wrap">
        <div className="px-3 py-2 me-2 mb-3 bg-white text-nickel w-fit">Adventure</div>
        <div className="px-3 py-2 me-2 mb-3 bg-white text-nickel w-fit">Film</div>
        <div className="px-3 py-2 me-2 mb-3 bg-white text-nickel w-fit">Movie</div>
        <div className="px-3 py-2 me-2 mb-3 bg-white text-nickel w-fit">TV Shows</div>
      </div>
    </div>
  </div>
}
 export default PostSideBar;