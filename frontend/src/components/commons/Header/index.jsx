import newsImage from '~/assets/images/background-header-2.jpg';

// eslint-disable-next-line react/prop-types
function Header({title}){
    return <section className="w-100 position-relative font-space-grotesk" style={{height: '570px', backgroundImage: `url(${newsImage})`}}>
    <div className="position-absolute bg-black opacity-50 w-100 h-100">
    </div>
    <div className="position-absolute d-flex flex-column w-100 h-100 align-items-center justify-content-center text-white">
        <div className="mb-1">Home {'>'} {title}</div>
        <div className="fs-0 fw-bold">{title}</div>
      </div>
  </section>
}
export default Header