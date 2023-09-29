import lineHeader from '~/assets/images/image-lines-header.jpg';

function Separator() {
    return (
        <section id="separator">
            <div className="container">
                <img src={lineHeader} className="w-100 d-inline-block" style={{ height: '10px' }} />
            </div>
        </section>
    );
}

export default Separator;
