import React from "react";
import {  BrowserRouter as Router, Routes , Route } from "react-router-dom"
import CartPage from "./pages/cartPage/cartPage";
import HomePage from "./pages/homePage/homePage";
import ErrorPage from "./pages/errorPage/errorPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cartPage" element={<CartPage></CartPage>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
