import React from "react";
import logo from "./img/logo.png";
import "./header.css";
function Header() {
    return(
        <div className="header">
            <img src={logo} alt="#" className="logo"/>
        </div>
    )
}
export default Header;