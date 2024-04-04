import img1 from "../../img/Logo.png";
import { Link } from "react-router-dom";

export default function Navber() {
  return (
      <nav className="navbar navbar-expand-lg fixed  text-light w-100" id="up">
        <div className="container">
          <div className="w-25">
            <Link
              className="navbar-brand text-light d-flex justify-content-center"
              to=""
            >
              <img src={img1} alt="vanilla" className="w-50" />
            </Link>
          </div>
          <div className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fs-5"
                  aria-current="page"
                  to="Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fs-5" to="About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fs-5" to="products">
                  product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fs-5" to="Pajamas">
                  Pajamas
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-light fs-5" to="Service">
                  Service
                </Link>
              </li> */}
              {/* <li className="nav-item">
                    <Link className="nav-link text-light fs-5" to="Product">
                      Product
                    </Link>
                  </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
}
