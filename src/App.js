import logo from "./logo.svg";
import mine from "./1111.jpeg";
import "./App.css";
import TestComponents from "./componets/TestComponent";
import Menu from "./componets/Menu";
import Inscription from "./componets/Inscription";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Inscription />
        <Menu />
      </div>
    </div>
  );
}

export default App;
