import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
