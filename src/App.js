import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { News } from "./pages/News";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="News App" about="About" />
        <div className="container px-3 px-lg-4">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<News />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
