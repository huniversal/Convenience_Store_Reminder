import React from "react";
import { Link } from "react-router-dom";
import {
    BiHome, 
    BiMessage, 
    BiSolidReport,
    BiTask
} from "react-icons/bi";
import "./Layout_Style/sidebar.css";

const Sidebar = () => {
    return (
        <div className="menu">
            <div className="logo">
                <BiHome className="logo-icon"/>
                <p>편의점 알리미</p>
            </div>
            <div className="menu--list">
                <Link to="/main" className="item">
                    <BiTask className="icon"/>
                    안내
                </Link>
                <Link to="/main/community" className="item">
                    <BiMessage className="icon"/>
                    커뮤니티
                </Link>
                <Link to="/main/my" className="item"> 
                    <BiSolidReport className="icon"/> 
                    마이페이지
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
