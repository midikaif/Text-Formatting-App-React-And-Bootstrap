import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'info' ? "light" : "dark"} bg-${props.mode}`}>
            <div className='container'>
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-item nav-link active" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">Features</a>
                    </div>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label className={`form-check-label text-${props.mode === 'info' ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: `Don't know the Title`
// }