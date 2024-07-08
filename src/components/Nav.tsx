import * as React from "react";
import { Link } from "react-router-dom";
import { auth, useAuthState } from "../firebase";
import img from '../logo.svg'

export function Nav(): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, _loading] = useAuthState(auth);
  return (
    <nav className="navbar nav-pills navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand" href="/">
                <img src={img} alt="brand" width="30" height="21" />
            </a>
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
            { user ? <li className="nav-item">
              <Link className="nav-link" to="/create-blog" unstable_viewTransition={true}>Create Blog</Link>
            </li> : null}
            {!user ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    auth.signOut()
                }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
