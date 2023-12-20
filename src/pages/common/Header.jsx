import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/Header.module.css";
import styled from "styled-components";

const Header = () =>{
    if (window.location.pathname === '/login' || window.location.pathname=== '/join') return null;
    return(
        <StyledHeader>
        <>
        <div className="navbar">
                <div className="menubar">
                    <nav>
                        <ul className="menubar_ul">
                            <li>
                            <Link to="/">Pokemon</Link>
                            </li>
                            <li>
                                <Link to="/boards">
                                    Board
                                </Link>
                            </li>
                            <li>
                                <a href="">
                                    Generation
                                </a>
                            </li>
                            <li>
                            <Link to="/login">Login</Link> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.header`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
}
.navbar {
    height: 50px;
}
.menubar {
    width: 100%;
    padding: 1rem;
    position: fixed;
    background-color: #FFCB05;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    z-index: 5;
}
.menubar_ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
}
.menubar_ul > li {
    /*position: relative;*/
    display: inline-block;
}
.menubar_ul > li a {
    text-align: center;
    padding: 0 2rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: rgb(255, 255, 255);
}
.menubar_ul > li a:hover {
    /*color: #597812;*/
    color: #3564AD;
    font-weight: normal;
}
`