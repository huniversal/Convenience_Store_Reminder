import React from "react";
import { Link } from "react-router-dom";
import {
    BiHome, 
    BiMessage, 
    BiSolidReport,
    BiTask
} from "react-icons/bi";
import "../style/header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <p>편의점 알리미</p>
            </div>
            <nav className="header-nav">
                <Link to="/main" className="nav-item">안내</Link>
                <Link to="/main/community" className="nav-item">근무일지</Link>
                <Link to="/main/my" className="nav-item">마이페이지</Link>
            </nav>
            <div class="search-bar">
                <input type="text" placeholder="Search" />
            </div>
        </header>
    );
}

export default Header;
