import React from 'react';
import { Link } from 'react-router-dom';
import usericon from '../assets/img/user-icon-svgrepo-com.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">Blood Bank</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Admin</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle d-flex align-items-center"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                
                                <img
                                    src={usericon}
                                    className="rounded-circle"
                                    height="22"
                                    alt="Avatar"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        My Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
