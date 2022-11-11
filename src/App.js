
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <h1 className='App-h1'><span className='App-orange'>LIGHTS</span>  <span className="App-blue">OUT</span></h1>
      <Board size={5} chanceLightStartsOn={0.25} />

    </div>
  );
}

export default App;
