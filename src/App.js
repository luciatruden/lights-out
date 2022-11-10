
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <h1 className='App-h1'>LIGHTS <span>OUT</span></h1>
      <Board size={4} />

    </div>
  );
}

export default App;
