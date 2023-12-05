import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchUser() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate(`/search/${query}`);
    };
    return (
        <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3e65c79 elementor-hidden-tablet elementor-hidden-mobile"
            data-id="3e65c79"
            data-element_type="column"
        >
            <div className="elementor-widget-wrap elementor-element-populated">
                <div
                    className="elementor-element elementor-element-947ac0b elementor-widget__width-auto elementor-widget elementor-widget-aovis_elementor_search_popup"
                    data-id="947ac0b"
                    data-element_type="widget"
                    data-widget_type="aovis_elementor_search_popup.default"
                >
                    <div className="elementor-widget-container">
                        <div
                            className="ova_wrap_search_popup"
                            onClick={(e) => {
                                e.target.parentElement.classList.toggle('show');
                            }}
                        >
                            <i className="ovaicon ovaicon-search"></i>
                            <div className="ova_search_popup">
                                <div
                                    className="search-popup__overlay"
                                    onClick={(e) =>
                                        e.target.parentElement.parentElement.classList.remove(
                                            'show',
                                        )
                                    }
                                ></div>
                                <div className="container">
                                    <form
                                        role="search"
                                        method="get"
                                        className="search-form"
                                        onSubmit={handleSubmit}
                                    >
                                        <input
                                            type="text"
                                            className="search-field"
                                            placeholder="Search …"
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                        />
                                        <button type="submit" className="search-submit">
                                            <i className="ovaicon ovaicon-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-417694b elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                    data-id="417694b"
                    data-element_type="widget"
                    data-widget_type="icon.default"
                >
                    <div className="elementor-widget-container">
                        <div className="elementor-icon-wrapper">
                            <a className="elementor-icon" href="/my-account">
                                <i aria-hidden="true" className="ovaicon ovaicon-user-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchUser;
