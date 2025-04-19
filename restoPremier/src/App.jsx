import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Stock from "./Pages/Stock";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stock" element={< Stock/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
