import React, { useCallback, useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailStock = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const [namaBarang, setNamaBarang] = useState("");
    const [stokAwal, setStokAwal] = useState(0);
    const [barangMasuk, setBarangMasuk] = useState(0);
    const [barangKeluar, setBarangKeluar] = useState(0);
    const [stokAkhir, setStokAkhir] = useState(0);

    const getData = useCallback(async () => {
        try {
            const stock = await axios.get(`http://localhost:8000/stock/${id}`);
            setData(stock.data);
        } catch (error) {
            console.log(error);
        }
    }, [id, setData]);

    const handleUpdate = async () => {
        await axios.post("")
    };

    useEffect(() => {
        getData();
    }, [getData]);
    // console.log(data);

    return (
        <MainLayout>
            <div className="mb-10 bg-blue-500 md:w-1/2 p-3 rounded-br-4xl rounded-sm text-white">
                <h1 className="md:text-4xl text-2xl font-extrabold">
                    Detail stock
                </h1>
                <p className="md:text-xl font-light">Informasi lengkap stock</p>
            </div>

            {/* Form Start */}
            <form
                action=""
                className="flex flex-col gap-5 md:w-2/3 mx-auto pb-20">
                <div className="flex flex-col md:gap-2">
                    <label htmlFor="namaStock" className="md:text-xl text-base">
                        Nama Stock
                    </label>
                    <select
                        onChange={(e) => setNamaBarang(e.target.value)}

                        className="border md:p-2 p-1.5 rounded-xl">
                        <option value={data.nama_Barang}>
                            {data.nama_Barang}
                        </option>
                        <option value="Tepung Terigu">Tepung Terigu</option>
                        <option value="Kecap Bango">Kecap Bango</option>
                        <option value="Beras">Beras</option>
                        <option value="Tepung Kanji">Tepung Kanji</option>
                        <option value="Tepung Beras">Tepung Beras</option>
                        <option value="Ayam">Ayam</option>
                        <option value="Telor">Telor</option>
                        <option value="Tempe">Tempe</option>
                        <option value="Tahu">Tahu</option>
                    </select>
                </div>

                <div className="flex flex-col md:gap-2">
                    <label className="md:text-xl text-base" htmlFor="namaStock">
                        Stok awal
                    </label>
                    <input
                        id="namaStock"
                        className="border rounded-xl p-1.5 md:p-2"
                        type="number"
                        value={stokAwal}
                        onChange={(e) => setStokAwal(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:gap-2">
                    <label
                        className="md:text-xl text-base"
                        htmlFor="barangMasuk">
                        Barang masuk
                    </label>
                    <input
                        id="barangMasuk"
                        className="border rounded-xl p-1.5 md:p-2"
                        type="number"
                        value={barangMasuk}
                        onChange={(e) => setBarangMasuk(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:gap-2">
                    <label
                        className="md:text-xl text-base"
                        htmlFor="barangKeluar">
                        Barang keluar
                    </label>
                    <input
                        id="barangKeluar"
                        className="border rounded-xl p-1.5 md:p-2"
                        type="number"
                        value={barangKeluar}
                        onChange={(e) => setBarangKeluar(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:gap-2">
                    <label className="md:text-xl text-base" htmlFor="stokAkhir">
                        Stok akhir
                    </label>
                    <input
                        id="stokAkhir"
                        className="border rounded-xl p-1.5 md:p-2"
                        type="number"
                        value={stokAkhir}
                        onChange={(e) => setStokAkhir(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 w-1/4 mx-auto px-3 py-2 hover:cursor-pointer hover:bg-blue-600 rounded-xl text-white font-extrabold">
                    Buat
                </button>
            </form>
            {/* Form End */}
        </MainLayout>
    );
};

export default DetailStock;
