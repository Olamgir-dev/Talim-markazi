import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top   bg-body-tertiary" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Education Center</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Admin Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/group-show">Show Groups</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/group-add">Group Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/student-add" >Student Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/teacher-add" >Teacher Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/exams" >Show Exams</Link>
                        </li>
                    </ul>

                    <ul className="d-flex mb-2 mb-lg-0  nav  me-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Admin Login</Link>
                        </li>
                        <li className='nav-item'><Link className="nav-link" to="/student-login">Student Login</Link></li>
                        <li className='nav-item'><Link className="nav-link" to="/teacher-login">Teacher Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar