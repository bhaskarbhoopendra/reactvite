import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { About } from "./pages/About";
import { Backend } from "./pages/Backend";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Store } from "./pages/Store";


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
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
