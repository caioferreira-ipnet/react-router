//React-Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
//Error pages
import NotFoundPage from "./pages/errorPages/NotFoundPage.jsx";
//Components
import Nav from "./components/Nav.jsx";
import SearchForm from "./components/SearchForm.jsx";
// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Wolrd!</h1>
      <BrowserRouter>
        <Nav />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/products/:id" element={<Products />}>
            <Route path="details" element={<ProductDetails />}></Route>
          </Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
