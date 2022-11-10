
import './App.css';
import Cell from './Cell';

function App() {
  return (
    <div className="App">
      <Cell cellIndez="00" isOn={true} />
      <Cell cellIndez="01" isOn={true} />
      <Cell cellIndez="02" isOn={true} />
      <Cell cellIndez="03" isOn={true} />
      <Cell cellIndez="04" isOn={true} />

    </div>
  );
}

export default App;
