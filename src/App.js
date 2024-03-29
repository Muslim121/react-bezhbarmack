import React, { useDebugValue } from "react";
import { Routes, Route } from "react-router-dom";
import CSS from "./CSS/style.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={
            <Home searchValue={searchValue} setSearchValue={setSearchValue} />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
