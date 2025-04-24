import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailStock = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    const getData = async () => {
        try {
            const stock = await axios.get(`http://localhost:8000/stock/${id}`);
            setData(stock.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData()
    }, {})
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
                        name=""
                        id="namaStock"
                        className="border md:p-2 p-1.5 rounded-xl">
                        <option value={data.nama_Barang}>
                            {data.nama_Barang}
                        </option>
                        <option value="">Tepung Terigu</option>
                        <option value="">Kecap Bango</option>
                        <option value="">Beras</option>
                        <option value="">Tepung Kanji</option>
                        <option value="">Tepung Beras</option>
                        <option value="">Ayam</option>
                        <option value="">Telor</option>
                        <option value="">Tempe</option>
                        <option value="">Tahu</option>
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
                        value={data.stok_awal}
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
                        value={data.barang_masuk}
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
                        value={data.barang_keluar}
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
                        value={data.stok_akhir}
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
