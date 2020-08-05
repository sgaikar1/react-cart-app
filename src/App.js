import React from "react";
import "./css/style.css";
import "./css/reset.css";
import MenuCart from "./containers/MenuCart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="containers">
        <Navbar />
        <Route exact path="/" component={ Home } />
        <Route path="/About" component={ About } />
        <Route path="/Contact" component={ Contact } />
        <div id="app-holder">
          <div >
            <MenuCart />
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
