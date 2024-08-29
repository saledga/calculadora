import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react'; 
import { evaluate } from 'mathjs'; //To assess the result
  
function App() {

  const [input, setInput] = useState('');
  
  const addInput = value => {
    setInput(input + value);
  };

  const calcuEqual = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Error: No se ha ingresado ningún valor');
    }
  };
  

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton handleClic={addInput}>1</Boton>
          <Boton handleClic={addInput}>2</Boton>
          <Boton handleClic={addInput}>3</Boton>
          <Boton handleClic={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClic={addInput}>4</Boton>
          <Boton handleClic={addInput}>5</Boton>
          <Boton handleClic={addInput}>6</Boton>
          <Boton handleClic={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton handleClic={addInput}>7</Boton>
          <Boton handleClic={addInput}>8</Boton>
          <Boton handleClic={addInput}>9</Boton>
          <Boton handleClic={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClic={calcuEqual}>=</Boton>
          <Boton handleClic={addInput}>0</Boton>
          <Boton handleClic={addInput}>.</Boton>
          <Boton handleClic={addInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear handleClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
