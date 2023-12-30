function NoPage() {
    return (
        <div className="page_404">
            <div className="row_site">
                <div className="container_site">
                    <img src="https://demo.ovatheme.com/aovis/wp-content/themes/aovis/assets/img/404/image-404.png" />

                    <div className="message">
                        <h3 className="title">Sorry we cannot find that page!</h3>

                        <p className="content">The page you are looking for was never existed.</p>
                    </div>

                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input
                                type="search"
                                className="search-field"
                                placeholder="Search …"
                                value=""
                                name="s"
                            />
                        </label>
                        <input type="submit" className="search-submit" value="Search" />
                    </form>

                    <div className="btn-back-home">
                        <a href="/">Back to Home </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoPage;
