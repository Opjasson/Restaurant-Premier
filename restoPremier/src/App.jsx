import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Stock from "./Pages/Stock";
import AddStock from "./Pages/AddStock";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stock" element={< Stock/>} />
                    <Route path="/Add-stock" element={< AddStock/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
