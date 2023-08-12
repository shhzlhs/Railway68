import React from 'react';
import './Question3.css'
function Exercise1() {
let a = React.createElement("p",null,"Question 1:");
let question1_1 = React.createElement("h1",null,"Hello World");
let question1_2 = React.createElement("p",null,"My first paragraph")
let click2c = ()=>{
  console.log("Hello!");
}
  return (
    <div >
      <p><b>Exercise 1: JSX</b></p>
      {a}
      {question1_1}
      {question1_2}
      <p>Question 2:</p>
      <p>a:</p>
      <h1>Hello World</h1>
      <p>My first paragraph</p>
      <p>-------------------------------------------------------------------------</p>
      <p>b:</p>
      <h2>DANH SÁCH LỚP HỌC</h2>
      <ol>
        <li>Nguyễn Ngọc Duy</li>
        <li>Tống Quang Anh</li>
        <li>Tống Thị Anh</li>
        <li>Tống Thi Quang Anh</li>
        <li>Tống Quang Thị Anh</li>
        <li>Nguyễn Thị Duy</li>
        <li>Nguyễn Thị Ngọc Duy</li>
      </ol>
      <ol>
        <li>Cơm trưa</li>
        <ul>
          <li>Cơm chiên hải sản</li>
          <li>Cơm sườn non nấu cam</li>
          <li>Cơm canh chua cá lóc</li>
        </ul>
        <li>Tráng miệng trái cây</li>
        <ul>
          <li>Nho tươi</li>
          <li>Chuối</li>
          <li>Mận</li>
        </ul>
      </ol>
      <p>-------------------------------------------------------------------------</p>
      <p>c:</p>
      <button onClick={click2c}>Hello World</button>
    
        <p>Question 3:</p>
        <p>a:</p>
        <div style={{border:'1px solid orange'}}><b>Hello</b></div>
        <div style={{border:'1px solid blue'}}><b>Hello</b></div>
        <div style={{border:'1px solid violet'}}><b>Hello</b></div>
        <div className='Question3_1'><b>Hello</b></div>
        <div className='Question3_2'><b>Hello</b></div>
        <p>----------------------------------------------------------------------------------------------</p>
        <p>b:</p>
        <section className='Question3_3'>
          <h2>Học lập trình có đơn giản không?</h2>
          <img src='./xxx.jpg' alt='xxx' width={'300px'}></img>
        </section>
      
    </div>
  );
}

export default Exercise1;
