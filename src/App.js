
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <h1 className='App-h1'>LIGHTS <span>OUT</span></h1>
      <Board size={5} chanceLightStartsOn={0.25} />

    </div>
  );
}

export default App;
