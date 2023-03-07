import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#e3f2fd"}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" href="/">About</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

Header.propTypes={
    title : PropTypes.string
}

Header.defaultProps={
    title : "MyTitle"
}