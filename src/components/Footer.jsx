const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white py-4 mt-auto footer_total">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <p className="text-muted">Some representative placeholder content for the footer.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-muted">Link 1</a></li>
              <li><a href="#" className="text-muted">Link 2</a></li>
              <li><a href="#" className="text-muted">Link 3</a></li>
              <li><a href="#" className="text-muted">Link 4</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-muted">Address</a></li>
              <li><a href="#" className="text-muted">Phone</a></li>
              <li><a href="#" className="text-muted">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Your Website Name
      </div>
    </footer>
  )
}
export default Footer