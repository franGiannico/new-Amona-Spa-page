import React from "react"

const Logo = ({value}) => {
    return (
        <nav className="navbar bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={value}alt="Logo de Amona Spa" width="120" height="120"/>
                </a>
            </div>
        </nav>
    )
}
export default Logo