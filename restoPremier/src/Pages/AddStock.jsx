import React, { useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";

const AddStock = () => {
    const [namaStock, setNamaStock] = useState("")


    return (
        <MainLayout>
            <div className="mb-10 bg-blue-500 md:w-1/2 p-3 rounded-br-4xl rounded-sm text-white">
                <h1 className="md:text-4xl text-2xl font-extrabold">
                    Tambah Stock
                </h1>
                <p className="md:text-xl font-light">
                    Menambahkan Stock Bahan Baku
                </p>
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
                        // onChange={(e) => setStokAwal(e.target.value)}
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

export default AddStock;
