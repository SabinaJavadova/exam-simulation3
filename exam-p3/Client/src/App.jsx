import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home"
import Add from "./pages/Add";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/Home";
import Clothes from "./pages/Clothes";
import Details from "./pages/Detail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/clothes" element={<Clothes/>}/>
          <Route path="/clothes/:id" element={<Details/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
