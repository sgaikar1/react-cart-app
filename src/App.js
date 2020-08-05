import React, { Component } from "react";
import "./css/style.css";
import "./css/reset.css";
import MenuCart from "./containers/MenuCart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { connect } from "react-redux";
import props from "prop-types"
import { render } from "@testing-library/react";

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="containers">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <div>Age:<span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <div id="app-holder">
          <div >
            <MenuCart />
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
  }
};


const mapStateToProps = (state) => {
  return {
    age: state.age
  }
};

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({ type: 'AGE_UP' }),
    onAgeDown: () => dispach({ type: 'AGE_DOWN' })
  }
};

export default connect(mapStateToProps, mapDispachToProps)(App);
