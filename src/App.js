import './styles/style.scss'
import Borad from "./components/Board"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>tictoctoe game</h1>
        <Borad />
      </div>
    </div >
  );
}

export default App;
