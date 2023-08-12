
import React from 'react';
import './App.css';
import Hello from './Hello';
import SSS from './SSS';
function App() {
  // let myStyle = {background:'red'}
  // let para = React.createElement("h1",null,"HELLO!");
  
  return (
    // React.createElement('div', null, para)
    // <div style={{width:'20%',background:'gray',color:'red',textAlign:'center'}}>
    // <div style={myStyle}>
    <React.Fragment>
    <div className='App'>
      <h1>
        HELLO!!!
      </h1>
      <Hello/>
      <SSS/>
    </div>
    </React.Fragment>
    
  );
}

export default App;
