import * as React from "react";
import {
    Link,
    redirect
} from 'react-router-dom'
import '../App.css'
import { auth, useAuthState } from '../firebase'

export function Nav(): React.ReactElement {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ user, _loading ] = useAuthState(auth)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/authors">Authors</Link>
                        </li>
                        { !user ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        :
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => {
                                    auth.signOut().then(() => {
                                        redirect("/")
                                    })
                                }}>Logout</button>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
