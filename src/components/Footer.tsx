import { Link } from "react-router-dom";

export function Footer() {
    return (
      <div className="container mt-5 mb-5 bg-secondary text-white-50">
        <div className="row">
          <div className="col">
            <div className="vstack">
              <div className="">Static</div>
              <div className=""><Link to="/about" className="text-white">About</Link></div>
              <div className=""><Link to="/" className="text-white">Sitemap</Link></div>
              <div className=""><Link to="/" className="text-white">Contact</Link></div>
              <div className=""><Link to="/" className="text-white">FAQ</Link></div>
            </div>
          </div>
          <div className="col">
            <div className="vstack">
              <div className="">Content</div>
              <div className=""><Link to="/" className="text-white">Blog</Link></div>
              <div className=""><Link to="/authors" className="text-white">Authors</Link></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  