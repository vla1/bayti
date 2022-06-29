import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavbarHeader from "./components/Navbar";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Eventos from "./pages/eventos/Eventos";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavbarHeader/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/eventos" element={<Eventos/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
