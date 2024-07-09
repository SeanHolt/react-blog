import * as React from "react";
import { Link } from "react-router-dom";
import { auth, useAuthState } from "../firebase";
import img from "../logo.svg";

export function Nav(): React.ReactElement {
  const [user] = useAuthState(auth);
  return (
    <nav className="navbar nav-pills navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand" to="/">
            <img src={img} alt="brand" width="30" height="21" />
          </Link>
          <ul className="navbar-nav nav-pills me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/authors">
                Authors
              </Link>
            </li>
            {user ? (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/create-blog"
                >
                  Create Blog
                </Link>
              </li>
            ) : null}
            <li className="nav-item">
              {!user ? (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              ) : (
                <button
                  className="nav-link"
                  onClick={() => {
                    auth ? auth.signOut() : console.log('Error logging you out!');
                  }}
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
