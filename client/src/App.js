import React from 'react';

function App() {
  return (
    <div>
      <div className="card">
        <h1>Water Jug Challenge</h1>
        <div>
          <label htmlFor="input1">Capacity Bucket X:</label>
          <input type="text" id="input1" />
        </div>
        <div>
          <label htmlFor="input2">Capacity Bucket Y:</label>
          <input type="text" id="input2" />
        </div>
        <div>
          <label htmlFor="input3">Amount wanted Z:</label>
          <input type="text" id="input3" />
        </div>
      </div>
      <div className="card">
        <h2>Resultado</h2>
        <input type="text" id="resultado" />
      </div>
    </div>
  );
}

export default App;