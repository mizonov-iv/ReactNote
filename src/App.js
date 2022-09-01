import React from "react";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {

  return (
          <BrowserRouter>
              <Navbar/>
              <div className="container">
                  <Routes>
                      <Route path={'/'} element={<Home/>}/>}/>
                      <Route path={'/about'} element={<About/>}/>
                  </Routes>
              </div>
          </BrowserRouter>
  );
}

export default App;
