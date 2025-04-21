import React from "react";
import MainLayout from "../Components/Templates/MainLayout";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link, useNavigate  } from "react-router-dom";

const Stock = () => {
    const navigate = useNavigate()
    return (
        <MainLayout>
            <div className="flex justify-between items-center w-full">
                <h1 className="lg:text-2xl text-sm text-blue-500">
                    Barang Masuk
                </h1>

                <div className="flex lg:w-[30rem] w-60 justify-between">
                    <div className="flex items-center bg-slate-300 lg:px-2 px-1 lg:py-1.5 py-0 lg:rounded-xl rounded-sm lg:w-80 w-[55%]">
                        <input
                            type="text"
                            placeholder="Cari nama..."
                            className="outline-none w-full text-sm"
                        />
                        <FaMagnifyingGlass className="lg:text-2xl" />
                    </div>

                    <Link to={"/Add-stock"} className="bg-blue-500 hover:bg-blue-600 lg:px-2 px-3 lg:py-1.5 rounded-xl text-white lg:text-base text-sm">
                        + Tambah
                    </Link>
                </div>
            </div>

            <div className="mt-7">
                <div className="flex justify-between px-5 py-3 bg-blue-500 rounded-xl lg:text-lg text-sm text-white font-bold">
                    <h2>Nama stock</h2>
                    <h2>Jumlah</h2>
                    <h2>Catatan</h2>
                    <h2>Tanggal Masuk</h2>
                </div>

                <div onClick={() => navigate("/Detail-stock")} className="flex justify-between hover:cursor-pointer px-5 py-3 lg:text-lg text-sm font-extralight mt-2">
                    <h2>Nama stock</h2>
                    <h2>Jumlah</h2>
                    <h2>Catatan</h2>
                    <h2>Tanggal Masuk</h2>
                </div>
            </div>
        </MainLayout>
    );
};

export default Stock;
