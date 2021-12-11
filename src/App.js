import './App.css';
import Calculator from "./Calculator";


function App() {
  return (
    <div className="App">
      <h1>Density Calculator</h1>
      <div className="instructions">
        <h3>Instructions:</h3>
        <p>Enter two known values, select the right units, and then click the calculate button
        for the unknown value.</p>
      </div>
      <Calculator/>
    </div>
  );
}

export default App;
