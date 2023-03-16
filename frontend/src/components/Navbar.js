import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: `rgba(12,12,12,0.4)` }}>
            <div className="container">
                <Link className="navbar-brand" to="/">Education Center</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/group-show">Show Groups</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/group-add">Group Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " href="/student-add" >Student Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " href="/teacher-add" >Teacher Add</Link>
                        </li>
                    </ul>
                    <ul className=" me-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/student-login">Student Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/teacher-login">Teacher Login</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar