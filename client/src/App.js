import React, { useState } from 'react';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [resultado, setResultado] = useState('');

  const handleCalculate = async () => {
    const response = await fetch('http://localhost:5000/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input1: parseInt(input1, 10),
        input2: parseInt(input2, 10),
        input3: parseInt(input3, 10),
      }),
    });
    const data = await response.json();
    setResultado(data.resultado);
  };

  return (
    
    <div className="container">
      <div className="card" id="card-1">
        <div>
          <label htmlFor="input1">Capacity Bucket X:</label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input2">Capacity Bucket Y:</label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input3">Amount wanted Z:</label>
          <input
            type="text"
            id="input3"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
          />
        </div>
        <button onClick={handleCalculate}>Calcular</button>
      </div>
      <div className="card">
        <h2>Resultado</h2>
        <input type="text" id="resultado" value={resultado} readOnly />
      </div>
    </div>
  );
}

export default App;