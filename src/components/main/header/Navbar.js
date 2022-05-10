import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./header.css";
import Search from "../../../assets/images/icons/search.png";

export const Navbar = () => {
    const location = useLocation()

    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <div className="logo">LOGO</div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar_collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item nav_link">
                            <Link className={`nav-link ${location.pathname === '/about-us' && 'active'}`} to={'/about-us'}>About Us</Link>
                        </li>
                        <li className="nav-item nav_link">
                            <Link className={`nav-link ${location.pathname === '/how-it-works' && 'active'}`} to={'/how-it-works'}>How it works</Link>
                        </li>
                        <li className="nav-item nav_link">
                            <Link className={`nav-link ${location.pathname === '/projects' && 'active'}`} to={'/projects'}>Projects</Link>
                        </li>
                        <li className="nav-item nav_link">
                            <Link className={`nav-link ${location.pathname === '/production' && 'active'}`} to={'/production'}>إنتاج</Link>
                        </li>
                        <li className="nav-item nav_link">
                            <Link className={`nav-link ${location.pathname === '/create-book' && 'active'}`} to={'/create-book'}>Start project</Link>
                        </li>
                        <li className="nav-item nav_link">
                            <Link className={`nav-link ${location.pathname === '/library' && 'active'}`} to={'/library'}>Library</Link>
                        </li>
                        <li className="nav-item nav_link">
                            <Link className={`nav-link ${location.pathname === '/contact-us' && 'active'}`} to={'/contact-us'}>contact Us</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 mr-sm-3">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-prepend">
                                <button className="btn input-group-text">
                                    <img src={Search} alt="" />
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="dropdown show mr-sm-3">
                        <a className="btn btn-outline-light earth dropdown-toggle" href="/" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-globe mr-1"></i>
                            <span className={"f-14"}>En</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item earth" href="/">
                                <i className="fas fa-globe mr-1"></i>
                                <span className={"f-14"}>En</span>
                            </a>
                            <a className="dropdown-item earth" href="/">
                                <i className="fas fa-globe mr-1"></i>
                                <span className={"f-14"}>Ar</span>
                            </a>
                        </div>
                    </div>
                    <Link className="btn sign_up_text m-1" to={"sign-up"}>Sign up</Link>
                    <Link className="btn btn_sign_in m-1" to={"sign-in"}>Sign in</Link>
                </div>
            </div>
        </nav>
    )
}
