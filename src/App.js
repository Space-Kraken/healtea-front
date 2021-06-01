import "./App.css";
import Button from "./components/UI/atoms/Button";

function App() {
  const greet = () => {
    alert("Hi");
  };
  return (
    <div className="App">
      <h2>Main</h2>
      <Button method={greet} text="boton perron" />
    </div>
  );
}

export default App;
