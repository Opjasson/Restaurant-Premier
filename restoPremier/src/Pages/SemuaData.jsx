import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const SemuaData = () => {
    const [data, setData] = useState([]);
    const [findLower, setfindLower] = useState("");

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

    var date = new Date();


    // Merubah data tanggal menjadi format tahun-bulan-tanggal
    const dataAsli = data.map((item) => {
        const tanggalBaru = item.createdAt.split("T")[0];
        return { ...item, createdAt: tanggalBaru };
    });

    // Grouping data berdasarkan tanggal data dibuat
    const groupData = _.groupBy(dataAsli, "createdAt");

    // filter data gruping
    const filterGroping = Object.keys(groupData).filter((item) => {
        return Object.values(groupData[item]);
    });

    // filter data berdasarkan search
    const searchFilter = Object.values(filterGroping).filter((item) => {
        const words = findLower.split(" ");
        return words.some((word) =>
            Object.values(groupData[item]).includes(word)
        );
    });

   
    console.log(groupData["2025-04-26"]);
    console.log(findLower);



    return (
        <MainLayout>
            <div className="flex items-center justify-between">
                <div className="mb-10 bg-blue-500 md:w-1/2 p-3 rounded-br-4xl rounded-sm text-white">
                    <h1 className="md:text-4xl text-2xl font-extrabold">
                        Semua stock
                    </h1>
                    <p className="md:text-xl font-light">
                        Menampilkan semua data stock
                    </p>
                </div>

                <div className="flex items-center bg-slate-300 lg:px-2 px-1 lg:py-1.5 py-0 lg:rounded-xl rounded-sm lg:w-80 w-[55%] h-fit">
                    <input
                        type="date"
                        className="outline-none w-full text-sm"
                        onChange={(e) => setfindLower(e.target.value)}
                    />
                </div>
            </div>

            {groupData[findLower] ? (
                <div className="mt-7 border-b-2 border-blue-500 pb-16">
                    <p>{findLower}</p>
                    <div className="flex justify-between px-5 py-3 bg-blue-500 rounded-xl lg:text-lg text-[12px] text-white font-bold shadow-slate-500 shadow-md">
                        <h2>No</h2>
                        <h2 className="lg:ml-0 ml-1.5 lg:w-40">Nama barang</h2>
                        <h2 className=" lg:w-32 w-fit lg:ml-0 mr-1.5">
                            Satuan
                        </h2>
                        <h2 className=" lg:w-32 w-fit">Stock awal</h2>
                        <h2 className=" lg:w-32 w-fit">Barang masuk</h2>
                        <h2 className=" lg:w-32 w-fit">Barang keluar</h2>
                        <h2 className=" lg:w-32 w-fit">Stock akhir</h2>
                    </div>
                    {groupData[findLower]?.map((test, index) => (
                        <div
                            key={test.id}
                            onClick={() => navigate(`Detail-stock/${test.id}`)}
                            className="flex justify-between hover:cursor-pointer hover:bg-slate-300 lg:px-5 px-2 py-3 lg:text-lg text-sm font-extralight mt-2 border-b-2 border-slate-400 border">
                            <h2 key={index + 1} className="">
                                {index + 1}
                            </h2>
                            <h2 className=" w-40 ml-3 capitalize">
                                {test.nama_Barang}
                            </h2>
                            <h2 className="w-32">{test.satuan}</h2>
                            <h2 className="w-32">{test.stok_awal}</h2>
                            <h2 className="w-32">{test.barang_masuk}</h2>
                            <h2 className="w-32">{test.barang_keluar}</h2>
                            <h2 className="w-32">{test.stok_akhir}</h2>
                        </div>
                    ))}
                </div>
            ) : (
                filterGroping.map((key, index) => (
                    <div
                        className="mt-7 border-b-2 border-blue-500 pb-16"
                        key={index}>
                        <p>{key}</p>
                        <div className="flex justify-between px-5 py-3 bg-blue-500 rounded-xl lg:text-lg text-[12px] text-white font-bold shadow-slate-500 shadow-md">
                            <h2>No</h2>
                            <h2 className="lg:ml-0 ml-1.5 lg:w-40">
                                Nama barang
                            </h2>
                            <h2 className=" lg:w-32 w-fit lg:ml-0 mr-1.5">
                                Satuan
                            </h2>
                            <h2 className=" lg:w-32 w-fit">Stock awal</h2>
                            <h2 className=" lg:w-32 w-fit">Barang masuk</h2>
                            <h2 className=" lg:w-32 w-fit">Barang keluar</h2>
                            <h2 className=" lg:w-32 w-fit">Stock akhir</h2>
                        </div>

                        {[
                            Object.values(groupData[key]).map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        navigate(`Detail-stock/${item.id}`)
                                    }
                                    className="flex justify-between hover:cursor-pointer hover:bg-slate-300 lg:px-5 px-2 py-3 lg:text-lg text-sm font-extralight mt-2 border-b-2 border-slate-400 border">
                                    <h2 key={index + 1} className="">
                                        {index + 1}
                                    </h2>
                                    <h2 className=" w-40 ml-3 capitalize">
                                        {item.nama_Barang}
                                    </h2>
                                    <h2 className="w-32">{item.satuan}</h2>
                                    <h2 className="w-32">{item.stok_awal}</h2>
                                    <h2 className="w-32">
                                        {item.barang_masuk}
                                    </h2>
                                    <h2 className="w-32">
                                        {item.barang_keluar}
                                    </h2>
                                    <h2 className="w-32">{item.stok_akhir}</h2>
                                </div>
                            )),
                        ]}
                    </div>
                ))
            )}
        </MainLayout>
    );
};

export default SemuaData;
