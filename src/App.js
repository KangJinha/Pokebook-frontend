import React from 'react';
import { Route, Routes,Link } from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/member/Login"
import Header from "./pages/common/Header";
import Footer from './pages/common/Footer';
import Boardlist from './pages/notice/Boardlist';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Main/>}/>
        <Route path="/login" exact={true} element={<Login/>}/>
        <Route path="/boards" exact={true} element={<Boardlist/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
