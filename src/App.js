import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null);
  const [result, setResult] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  
  
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputValue)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputValue));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputValue)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputValue));
  };
 
  function resetInput(e) {
    e.preventDefault(); 
    setInputValue(null);
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult(null);
    
  }; 
 
  return ( 
    <div className="App">
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          total : {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>plus</button> 
        <button onClick={minus}>minus</button>
        <button onClick={times}>times</button>
        <button onClick={divide}>divide</button><br/>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
        
      </form> 
    </div> 
  ); 
} 
 
export default App; 
