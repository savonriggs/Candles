import React from "react";
import { BrowserRouter as Router} from "react-router-dom"
import { GlobalStyle } from "./globalStyles";
import Hero from "./Components/Navbar/Hero";
import { productData } from "./Components/Products/Data";
import Products from "./Components/Products";

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
    </Router>
    </>
  );
}

export default App;
