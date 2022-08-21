import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import Address from "./pages/Address";
import Email from "./pages/Email";
import { Home } from "./pages/Home";
import Mobile from "./pages/Mobile";
import { Store } from "./pages/Store";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/mobile" element={<Mobile />}></Route>
        <Route path="/email" element={<Email/>}></Route>
        <Route path="/address" element={<Address/>}></Route>
      </Routes>
    </>
  );
}

export default App;
