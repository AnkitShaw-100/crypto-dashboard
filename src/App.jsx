import LeftNavbar from "./Components/LeftNavbar";
import Navbar from "./Components/Navbar";
import Body from "./Components/Main_body";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <LeftNavbar />
      <div className="flex flex-col w-full">
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
