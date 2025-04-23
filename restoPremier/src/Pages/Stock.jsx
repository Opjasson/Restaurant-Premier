import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Stock = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/stock");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <MainLayout>
            <div className="flex justify-between items-center w-full">
                <h1 className="lg:text-2xl text-sm text-blue-500">
                    Stock barang
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

                    <Link
                        to={"/Add-stock"}
                        className="bg-blue-500 hover:bg-blue-600 lg:px-2 px-3 lg:py-1.5 rounded-xl text-white lg:text-base text-sm">
                        + Tambah
                    </Link>
                </div>
            </div>

            <div className="mt-7">
                <div className="flex justify-between px-5 py-3 bg-blue-500 rounded-xl lg:text-lg text-sm text-white font-bold shadow-slate-500 shadow-md">
                    <h2>No</h2>
                    <h2 className=" w-32">Nama barang</h2>
                    <h2 className=" w-32">Stock awal</h2>
                    <h2 className=" w-32">Barang masuk</h2>
                    <h2 className=" w-32">Barang keluar</h2>
                    <h2 className=" w-32">Stock akhir</h2>
                </div>

                {data.map((item, index) => (
                    <div
                        onClick={() => navigate("/Detail-stock")}
                        className="flex justify-between hover:cursor-pointer px-5 py-3 lg:text-lg text-sm font-extralight mt-2 border-b-2 border-slate-400">
                        <h2 className="">{index + 1}</h2>
                        <h2 className=" w-32 ml-3">{item.nama_Barang}</h2>
                        <h2 className=" w-32">{item.stok_awal}</h2>
                        <h2 className=" w-32">{item.barang_masuk}</h2>
                        <h2 className=" w-32">{item.barang_keluar}</h2>
                        <h2 className=" w-32">{item.stok_akhir}</h2>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
};

export default Stock;
