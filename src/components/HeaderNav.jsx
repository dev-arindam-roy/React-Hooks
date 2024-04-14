import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const HeaderNav = () => {

    const activeNav = ({isActive}) => {
        return {
            fontWeight: (isActive) ? 'bold' : 'normal'
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#"><strong>React Hooks</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="about" style={activeNav} className="nav-link active" aria-current="page">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="contact" style={activeNav} className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderNav