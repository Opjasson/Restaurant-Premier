import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DetailStock = () => {
    const { id } = useParams();
    const [namaBarang, setNamaBarang] = useState("");
    const [satuan, setSatuan] = useState("");
    const [stokAwal, setStokAwal] = useState(0);
    const [barangMasuk, setBarangMasuk] = useState(0);
    const [barangKeluar, setBarangKeluar] = useState(0);

    const navigate = useNavigate();

    // cek data login
    useEffect(() => {
        !localStorage.getItem("info")
            ? navigate("/login")
            : navigate(`/Detail-stock/${id}`);
    })
    

    useEffect(() => {
        // fungsi untuk mendapatkan semua data
        const getData = async () => {
            try {
                const stock = await axios.get(
                    `http://localhost:8000/stock/${id}`
                );
                setNamaBarang(stock.data.nama_Barang);
                setSatuan(stock.data.satuan);
                setStokAwal(stock.data.stok_awal);
                setBarangMasuk(stock.data.barang_masuk);
                setBarangKeluar(stock.data.barang_keluar);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [id]);

    // fungsi untuk update data
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:8000/stock/${id}`, {
                nama_Barang: namaBarang,
                satuan: satuan,
                stok_awal: parseInt(stokAwal),
                barang_masuk: parseInt(barangMasuk),
                barang_keluar: parseInt(barangKeluar),
            });
            alert("Data berhasil dirubah");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    // fungsi untuk menghapus data
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8000/stock/${id}`);
            alert("Data berhasil dihapus!");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

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
                onSubmit={handleUpdate}
                className="flex flex-col gap-5 md:w-2/3 mx-auto pb-20">
                {/* formulir menu nama barang */}

                <div className="flex flex-col md:gap-2">
                    <label htmlFor="namaStock" className="md:text-xl text-base">
                        Nama Stock
                    </label>
                    <select
                        onChange={(e) => setNamaBarang(e.target.value)}
                        className="border md:p-2 p-1.5 rounded-xl">
                        <option value={namaBarang}>{namaBarang}</option>
                        <option value="tepung terigu">Tepung Terigu</option>
                        <option value="kecap bango">Kecap Bango</option>
                        <option value="beras">Beras</option>
                        <option value="tepung kanji">Tepung Kanji</option>
                        <option value="tepung beras">Tepung Beras</option>
                        <option value="ayam">Ayam</option>
                        <option value="telor">Telor</option>
                        <option value="tempe">Tempe</option>
                        <option value="tahu">Tahu</option>
                        <option value="galon">galon</option>
                    </select>
                </div>
                {/* ------------ */}

                {/* formulir satuan */}
                <div className="flex flex-col md:gap-2">
                    <label className="md:text-xl text-base" htmlFor="satuan">
                        Satuan
                    </label>
                    <input
                        id="satuan"
                        className="border rounded-xl p-1.5 md:p-2"
                        type="text"
                        value={satuan}
                        required
                        onChange={(e) => setSatuan(e.target.value)}
                    />
                </div>

                {/* ------------ */}

                {/* formulir stok awal */}
                <div className="flex flex-col md:gap-2">
                    <label className="md:text-xl text-base" htmlFor="namaStock">
                        Stok awal
                    </label>
                    <input
                        id="namaStock"
                        className="border rounded-xl p-1.5 md:p-2"
                        type="number"
                        value={stokAwal}
                        required
                        onChange={(e) => setStokAwal(e.target.value)}
                    />
                </div>
                {/* ----------- */}

                {/* formulir barang masuk */}
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
                        required
                        onChange={(e) => setBarangMasuk(e.target.value)}
                    />
                </div>
                {/* ------------ */}

                {/* formulir barang keluar */}
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
                        required
                        onChange={(e) => setBarangKeluar(e.target.value)}
                    />
                </div>
                {/* ------------ */}

                {/* formulir stok akhir */}
                <div className="flex flex-col md:gap-2">
                    <label className="md:text-xl text-base" htmlFor="stokAkhir">
                        Stok akhir{" "}
                        <span className="text-sm text-red-500">
                            *Otomatis terisi
                        </span>
                    </label>
                    <input
                        disabled
                        id="stokAkhir"
                        className="border rounded-xl p-1.5 md:p-2 bg-slate-300"
                        type="number"
                        value={
                            parseInt(stokAwal) +
                            parseInt(barangMasuk) -
                            parseInt(barangKeluar)
                        }
                    />
                </div>
                {/* ------------ */}

                {/* bagian tombol buat dan hapus */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 w-1/4 mx-auto px-3 py-2 hover:cursor-pointer hover:bg-blue-600 rounded-xl text-white font-extrabold">
                        Buat
                    </button>

                    <button
                        type="button"
                        onClick={handleDelete}
                        className="bg-red-500 w-1/4 mx-auto px-3 py-2 hover:cursor-pointer hover:bg-red-600 rounded-xl text-white font-extrabold">
                        Hapus
                    </button>
                </div>
                {/* ----------- */}
            </form>
            {/* Form End */}
        </MainLayout>
    );
};

export default DetailStock;
