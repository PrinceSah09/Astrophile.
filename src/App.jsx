import Background from "./componenets/Bacground";
import Foreground from "./componenets/Foreground";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-full bg-zinc-800">
        <Background />
        <Foreground />
      </div>
    </>
  );
}

export default App;
