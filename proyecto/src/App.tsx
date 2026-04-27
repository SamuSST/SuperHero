import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Favoritos from "./Favoritos";
import Original from "./Original";
import Informativa from "./Informativa";
import Usuario from "./Usuarios";

function App() {
  return (
    <BrowserRouter>
      <nav className="c-menu">
        <Link to="/"><img src="https://cdn-icons-png.freepik.com/256/3661/3661280.png"/><p>Home</p></Link>
        <Link to="/favoritos"><img src="https://cdn-icons-png.flaticon.com/512/1721/1721922.png" /><p>Favoritos</p></Link>
        <Link to="/original"><img src="https://cdn-icons-png.flaticon.com/512/3712/3712144.png" /><p>Original</p></Link>
        <Link to="/informativa"><img src="https://cdn-icons-png.flaticon.com/512/4403/4403289.png" /><p>Informativa</p></Link>
        <Link to="/usuario"><img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" /><p>Usuario</p></Link>   
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/original" element={<Original />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;