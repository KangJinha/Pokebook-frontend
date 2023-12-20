import React from 'react';
import styles from "../../css/Header.module.css";
import styled from "styled-components";

const StyledFooter = styled.footer` 
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFCB05;
    bottom: 0;
    width: 100%;
    height: 70px;
`;

const Footer = () => {
    if (window.location.pathname === '/login' || window.location.pathname=== '/join') return null;
    return (
        <div>
            <StyledFooter>
			<p>&lt;CopyRight 2023. <strong>pokemon</strong>
			All right Reserved.&gt;</p>
		    </StyledFooter>
        </div>
    );
};

export default Footer;