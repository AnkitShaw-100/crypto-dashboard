import LeftNavbar from "./Components/LeftNavbar";
import Navbar from "./Components/Navbar";
import Body from "./Components/Main_body";
import Support from "./Components/Support";
import Transaction from "./Components/Transaction";
import Wallet from "./Components/Wallet";
import User from "./Components/User";
import Settings from "./Components/Settings";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <LeftNavbar />
        <div className="flex flex-col w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/support" element={<Support />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/user" element={<User />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
