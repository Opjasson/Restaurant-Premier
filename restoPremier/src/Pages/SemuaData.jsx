import React from "react";
import MainLayout from "../Components/Templates/MainLayout";

const SemuaData = () => {
    return (
        <MainLayout>
            <div className="mb-10 bg-blue-500 md:w-1/2 p-3 rounded-br-4xl rounded-sm text-white">
                <h1 className="md:text-4xl text-2xl font-extrabold">
                    Semua stock
                </h1>
                <p className="md:text-xl font-light">
                    Menampilkan semua data stock
                </p>
            </div>

            <div className="mt-7">
                <div className="flex justify-between px-5 py-3 bg-blue-500 rounded-xl lg:text-lg text-[12px] text-white font-bold shadow-slate-500 shadow-md">
                    <h2>No</h2>
                    <h2 className="lg:ml-0 ml-1.5 lg:w-40">Nama barang</h2>
                    <h2 className=" lg:w-32 w-fit lg:ml-0 mr-1.5">Satuan</h2>
                    <h2 className=" lg:w-32 w-fit">Stock awal</h2>
                    <h2 className=" lg:w-32 w-fit">Barang masuk</h2>
                    <h2 className=" lg:w-32 w-fit">Barang keluar</h2>
                    <h2 className=" lg:w-32 w-fit">Stock akhir</h2>
                </div>

                {lengthData.length > 0 ? (
                    filterNama
                        .filter(
                            (a) => a.createdAt.split("T")[0] === dataTerkini
                        )
                        .map((item, index) => (
                            <div
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
                                <h2 className="w-32">{item.barang_masuk}</h2>
                                <h2 className="w-32">{item.barang_keluar}</h2>
                                <h2 className="w-32">{item.stok_akhir}</h2>
                            </div>
                        ))
                ) : (
                    <div>belum ada data</div>
                )}
            </div>
        </MainLayout>
    );
};

export default SemuaData;
