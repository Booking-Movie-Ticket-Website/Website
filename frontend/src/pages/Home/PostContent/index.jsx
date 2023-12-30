import { useState, useEffect } from 'react';
import axios from '~/utils/axios';

function PostContent() {
    const [data, setData] = useState('');

    useEffect(() => {
        (async () => {
            await axios
                .get(`/news?page=1&take=10`, {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => console.error(error));
        })();
    }, []);
    return (
        <section
            id="post-content"
            className="elementor-section elementor-top-section elementor-element elementor-element-d6d3eaf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="d6d3eaf"
            data-element_type="section"
        >
            <div className="elementor-container elementor-column-gap-no">
                <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b5ae5da"
                    data-id="b5ae5da"
                    data-element_type="column"
                >
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                            className="elementor-element elementor-element-f938164 elementor-widget elementor-widget-aovis_elementor_blog"
                            data-id="f938164"
                            data-element_type="widget"
                            data-widget_type="aovis_elementor_blog.default"
                        >
                            <div className="elementor-widget-container">
                                <ul className="ova-blog ova-column_3">
                                    {data &&
                                        data.map((item, index) => {
                                            return (
                                                index < 3 && (
                                                    <li className="item" key={index}>
                                                        <div className="media">
                                                            <div className="box-img">
                                                                <a
                                                                    href={`/blogs/${item.id}`}
                                                                    rel="bookmark"
                                                                    title={item.title}
                                                                >
                                                                    <img
                                                                        src={
                                                                            item.newsPictures[0]
                                                                                .link
                                                                        }
                                                                        alt={item.title}
                                                                    />
                                                                </a>

                                                                <div className="overlay"></div>
                                                            </div>

                                                            <div className="post-date">
                                                                <span className="date">
                                                                    {new Date(
                                                                        item.createdAt,
                                                                    ).toLocaleDateString()}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="content">
                                                            <h2 className="post-title">
                                                                <a
                                                                    href={`/blogs/${item.id}`}
                                                                    rel="bookmark"
                                                                    title="See Meila enjoyable capturing moment"
                                                                >
                                                                    {item.title}
                                                                </a>
                                                            </h2>
                                                            <div className="read-more">
                                                                <a href={`/blogs/${item.id}`}>
                                                                    Read More
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PostContent;
