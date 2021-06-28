import './styles/style.scss'
import Borad from "./components/Board"
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="header">Tictactoe Game</h1>
        <Borad />
      </div>
    </div >
  );
}

export default App;
