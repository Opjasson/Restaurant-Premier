import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stock from "./Pages/Stock";
import AddStock from "./Pages/AddStock";
import DetailStock from "./Pages/DetailStock";
import SemuaData from "./Pages/SemuaData";
import AnalisisChart from "./Pages/AnalisisChart";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Stock/>} />
                    <Route path="/Add-stock" element={< AddStock/>} />
                    <Route path="/Detail-stock/:id" element={< DetailStock/>} />
                    <Route path="/Semua-data" element={< SemuaData/>} />
                    <Route path="/Analisis-chart" element={< AnalisisChart/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
