
import React from 'react';
import './App.css';
function App() {
  let myName = "LHS";
  // let myStyle = {background:'red'}
  // let para = React.createElement("h1",null,"HELLO!");
  let handleClick = ()=>{
    alert("Á á á...")
  }
  return (
    // React.createElement('div', null, para)
    // <div style={{width:'20%',background:'gray',color:'red',textAlign:'center'}}>
    // <div style={myStyle}>
    <div className='App'>
      <h1>
        HELLO!!!
      </h1>
      <button onClick={handleClick}>Hey Click me!</button>
      </div>
  );
}

export default App;
