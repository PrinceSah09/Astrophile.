import Background from "./componenets/Bacground";
import Foreground from "./componenets/Foreground";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-zinc-800">
        <Background />
        <Foreground />
        <Footer />
      </div>
    </>
  );
}

export default App;
