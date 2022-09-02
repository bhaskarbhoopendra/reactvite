import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { About } from "./pages/About";
import { Address } from "./pages/Address";
import { Backend } from "./pages/Backend";
import { Email } from "./pages/Email";
import { Home } from "./pages/Home";
import { Mobile } from "./pages/Mobile";
import { Signup } from "./pages/Signup";
import { Store } from "./pages/Store";
import { Login } from "./pages/Login";


function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/backend" element={<Backend />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mobile" element={<Mobile />}></Route>
        <Route path="/email" element={<Email/>}></Route>
        <Route path="/address" element={<Address/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
