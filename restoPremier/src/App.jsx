import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stock from "./Pages/Stock";
import AddStock from "./Pages/AddStock";
import DetailStock from "./Pages/DetailStock";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Stock/>} />
                    <Route path="/Add-stock" element={< AddStock/>} />
                    <Route path="/Detail-stock" element={< DetailStock/>} />
                    <Route path="/Barang-keluar" element={< DetailStock/>} />
                    <Route path="/Stock-akhir" element={< DetailStock/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
