import "./App.css";
import HEADER from "./pages/Header.jsx";
import PAGE1 from "./pages/page1.jsx";
import PAGE2 from "./pages/page2.jsx";
import PAGE3 from "./pages/page3.jsx";
import PAGE4 from "./pages/page4.jsx";
import PAGE5 from "./pages/page5.jsx";
import Intro from "./pages/Intro.jsx";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Intro />
      <HEADER />
      <PAGE1 />
      <PAGE2 />
      <PAGE3 />
      <PAGE4 />
      <PAGE5 />
    </div>
  );
}

export default App;
