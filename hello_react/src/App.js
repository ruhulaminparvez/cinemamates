import {useState} from "react";
import './App.css';

const App = () => {
    const [counter, setCounter] = useState(0);

  return (
    <div className="App">
        <div className="btn">
            <button onClick={() => setCounter((prevCounter => prevCounter - 1))}>-</button>
            <h1 className="txt">{counter}</h1>
            <button onClick={() => setCounter((prevCounter => prevCounter + 1))}>+</button>
        </div>

    </div>
  );
}

export default App;
