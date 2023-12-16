import { useSelector } from 'react-redux';

function Breadcrumb() {
    const blogTitle = useSelector((state) => state.blogs.blogTitle);
    return (
        <div className="wrap_breadcrumbs">
            <div className="row_site">
                <div className="container_site">
                    <div id="breadcrumbs">
                        <ul className="breadcrumb">
                            <li>
                                <a href="/" title="Home">
                                    Home
                                </a>
                            </li>
                            <li className="li_separator">
                                <span className="separator">
                                    <i className="ovaicon-next"></i>
                                </span>
                            </li>
                            <li>
                                <a href="/news">News</a>
                            </li>
                            <li className="li_separator">
                                <span className="separator">
                                    <i className="ovaicon-next"></i>
                                </span>
                            </li>
                            <li>{blogTitle}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Breadcrumb;
