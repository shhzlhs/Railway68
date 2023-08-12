import React, { Component } from 'react';

class Hello extends Component {
    render() {
        let handleClick1 = ()=>{
            alert("Á á á...");
          }
        return (
            <div>
                <button onClick={handleClick1}>Hey Click me!</button>
                <input type='text'></input>
            </div>
        );
    }
}

export default Hello;