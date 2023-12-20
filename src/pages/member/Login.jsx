import React from "react";
import styled from "styled-components";

const Login = () => {
    return (
        <StyledLogin>
        <div>
            <header class="welcome_header">
            <h1 class="welcome_header-title">환영합니다</h1>
            <p class="welcome_header-text">
                아이디가 있다면,<br />
                이메일이나 휴대폰번호를 입력해주세요
            </p>
        </header>

        <form action="" method="post" id="login_form">
            <input
                name="userId"
                type="text"
                placeholder="ID"
                maxlength="20"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='Email or phone number'"
            />
            <input
                name="userPw"
                type="password"
                placeholder="PASSWORD"
                maxlength="13"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='password'"
            />
            <input type="submit" value="Log in" />
            <a href="#">Find POKE Account or Password</a>
        </form>
        </div>
        </StyledLogin>
    )
}

export default Login;

const StyledLogin = styled.div`
--green: rgba(125, 195, 55, 0.8);
* {
    box-sizing: border-box;
}
body {
    margin: auto;
    width: 40vw;
    background-image: url(../../imges/4pokemon_02.jpg);
    background-size: cover;
}
.welcome_header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    color: white;
}
.welcome_header-title {
    margin-bottom: 30px;
    font-size: 7rem;
}
.welcome_header-text {
    font-size: 1.8rem;
    width: 60%;
}

#login_form {
    display: flex;
    flex-direction: column;
    margin: 0px 30px;
}

#login_form input {
    border: none;
    padding: 18px 0px;
    margin-bottom: 25px;
    font-size: 1.4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
}
#login_form input:hover{
	background-color: rgba(255, 255, 255, 1);
}

/* #login_form input:not([type="submit"]) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
} */

#login_form input::placeholder {
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
}

#login_form input[type="submit"] {
    background-color: var(--green);
    color: white;
    cursor: pointer;
    padding: 15px 0px;
    border-radius: 5px;
}
#login_form input[type="submit"]:hover {
    scale: 1.005;
}

#login_form a {
    text-align: center;
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.2);
}

`;