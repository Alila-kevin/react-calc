import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult]= useState("");
  const handleClick=(e)=> {
    setResult(result.concat(e.target.name));
  }
  const clear=()=> {
    setResult("");
  }
  const backSpace=()=> {
    try{
      setResult(result.slice(0, -1));
    }
    catch{
      setResult("");
    }
  }
  const calculate=()=> {
    try {
      setResult(eval(result));
      } catch (error) {
        setResult("Error");
      }
    }
  return (
    <div className="App">
      <div className='container'>
        <form>
          <input type='text' value={result} />
        </form>
        <div className='keyboard'>
          <button className='ex' onClick={clear} id='clear'>clear</button>
          <button className='ex' onClick={backSpace} id='backSpace'>c</button>
          <button className='ex' name='/' onClick={handleClick}>&divide;</button>
          <button name='7' onClick={handleClick}>7</button>
          <button name='8' onClick={handleClick}>8</button>
          <button name='9' onClick={handleClick}>9</button>
          <button className='ex' name='*' onClick={handleClick}>&times;</button>
          <button name='4' onClick={handleClick}>4</button>
          <button name='5' onClick={handleClick}>5</button>
          <button name='6' onClick={handleClick}>6</button>
          <button className='ex' name='-' onClick={handleClick}>&ndash;</button>
          <button name='1' onClick={handleClick}>1</button>
          <button name='2' onClick={handleClick}>2</button>
          <button name='3' onClick={handleClick}>3</button>
          <button className='ex' name='+' onClick={handleClick}>+</button>
          <button name='0' onClick={handleClick}>0</button>
          <button className='ex' name='.' onClick={handleClick}>.</button>
          <button className='ex' onClick={calculate} id='calculate'>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
