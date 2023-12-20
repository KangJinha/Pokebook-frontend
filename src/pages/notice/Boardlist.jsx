import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Boardlist = () => {
    const url = "http://localhost:8080/boards";
    const [book, setBooks] = useState([]);

    // 함수 실행 시 최초 한번 실행되는 것
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setBooks(data);
        }); // 비동기 함수
    },[])

    return (
    <>
        <StyledBoardlist>
        <section id="board-container">
            <h2>공지사항</h2>
            {/* react는 thead tbody가 필수 */}
            <table id="tbl-board">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>내용</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
                </thead>
                <tbody>
                   {book.map((item, index)=>
                        <tr key={index}>
                            <td>{item.boardNo}</td>
                            <td>{item.boardTitle}</td>
                            <td>{item.boardWriter}</td>
                            <td>{item.boardContent}</td>
                            <td>{item.boardDate}</td>
                            <th>{item.boardReadcount}</th>
                        </tr>
                        )}
                </tbody>                
            </table>
        </section>
        </StyledBoardlist>
    </>
    );
};

export default Boardlist;

const StyledBoardlist = styled.div`
    section#board-container{width:600px; margin:20px auto; text-align:center;}
    section#board-container h2{margin:10px 0;}
    table#tbl-board{width:100%; margin:0 auto; border:1px solid black; border-collapse:collapse;}
    table#tbl-board th, table#tbl-board td {border:1px solid; padding: 5px 0; text-align:center;}
    table#tbl-board .title{
    	cursor:pointer;
    }
    table#tbl-board .title:hover{
    	background-color:lime;
    }
    button {
		background-color: yellow;
	}  

`;