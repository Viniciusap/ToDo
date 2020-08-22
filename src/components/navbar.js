import React from "react"

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor03"
                aria-controls="navbarColor03"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-products">
                            Cadastro
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/BrowseProducts">
                            Consulta Produtos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-todo">
                            Cadastro ToDo
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/BrowseToDo">
                            Consulta ToDo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;