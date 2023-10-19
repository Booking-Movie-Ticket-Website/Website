function Breadcrumb() {
    return (
        <>
            <div className="wrap_breadcrumbs">
                <div className="row_site">
                    <div className="container_site">
                        <div id="breadcrumbs">
                            <ul className="breadcrumb">
                                <li>
                                    <a href="https://demo.ovatheme.com/aovis/" title="Home">
                                        Home
                                    </a>
                                </li>{' '}
                                <li className="li_separator">
                                    <span className="separator">
                                        <i className="ovaicon-next"></i>
                                    </span>
                                </li>
                                <li>
                                    <a href="https://demo.ovatheme.com/aovis/category/fantasy/">
                                        Fantasy
                                    </a>
                                </li>
                                <li className="li_separator">
                                    <span className="separator">
                                        <i className="ovaicon-next"></i>
                                    </span>
                                </li>
                                <li>See Meila enjoyable capturing moment</li>
                            </ul>
                        </div>{' '}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Breadcrumb;
