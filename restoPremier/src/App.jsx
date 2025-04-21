import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Stock from "./Pages/Stock";
import AddStock from "./Pages/AddStock";
import DetailStock from "./Pages/DetailStock";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stock" element={< Stock/>} />
                    <Route path="/Add-stock" element={< AddStock/>} />
                    <Route path="/Detail-stock" element={< DetailStock/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
