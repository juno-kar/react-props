import Main from "./components/Main/Main";
import { cardsData } from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Photo Album - Lab12</h1>
      <Main cards={cardsData} />
    </div>
  );
}

export default App;