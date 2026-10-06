//React-Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
//Components
import Nav from "./components/Nav.jsx";
// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Wolrd!</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
