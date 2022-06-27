import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Boton from './components/Boton';
import Display from './components/Display';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import * as math from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const resultCalculate = () => {
    if (input) {
      setInput(math.evaluate(input));
    } else {
      alert('Please enter a valid input');
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Display input={input} />
        <div className='fila'>
          <Boton handlerClick={addInput}>1</Boton>
          <Boton handlerClick={addInput}>2</Boton>
          <Boton handlerClick={addInput}>3</Boton>
          <Boton handlerClick={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton handlerClick={addInput}>4</Boton>
          <Boton handlerClick={addInput}>5</Boton>
          <Boton handlerClick={addInput}>6</Boton>
          <Boton handlerClick={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton handlerClick={addInput}>7</Boton>
          <Boton handlerClick={addInput}>8</Boton>
          <Boton handlerClick={addInput}>9</Boton>
          <Boton handlerClick={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton handlerClick={resultCalculate}>=</Boton>
          <Boton handlerClick={addInput}>0</Boton>
          <Boton handlerClick={addInput}>.</Boton>
          <Boton handlerClick={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear handlerClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
