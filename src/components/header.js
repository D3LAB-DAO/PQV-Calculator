/* eslint-disable jsx-a11y/anchor-is-valid */
import { collapseNavbar } from "../utils/voting";

const Header = () => {
  return (
      <nav id="navbar" className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#top" onClick={() => { collapseNavbar() }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#simulator" onClick={() => { collapseNavbar() }}>Simulator</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sponsors" onClick={() => { collapseNavbar() }}>Sponsors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#members" onClick={() => { collapseNavbar() }}>Members</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
