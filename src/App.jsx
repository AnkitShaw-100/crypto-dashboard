import LeftNavbar from "./Components/LeftNavbar";
import Navbar from "./Components/Navbar";
import Body from "./Components/Main_body";
import Support from "./Components/Support";
import Transaction from "./Components/Transaction";
import Wallet from "./Components/Wallet";
import User from "./Components/User";
import Settings from "./Components/Settings";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <LeftNavbar />
      <div className="flex flex-col w-full">
        <Navbar />
        <Body />
        <Support />
        <Transaction />
        <Wallet />
        <User />
        <Settings />
      </div>
    </div>
  );
}

export default App;
