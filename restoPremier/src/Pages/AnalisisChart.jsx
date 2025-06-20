import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import axios from "axios";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

const AnalisisChart = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    // mendapatkan data dari backend
    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/stock");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    // --------------

    // cek data login
    useEffect(() => {
        !localStorage.getItem("info")
            ? navigate("/login")
            : navigate(`/Analisis-chart`);
    });

    useEffect(() => {
        getData();
    }, []);

    let tanggal = new Date();
    console.log(tanggal.toISOString().split("T")[0]);

    // Merubah data tanggal menjadi format tahun-bulan-tanggal
    let dataAsli = data.map((item) => {
        const tanggalBaru = item.createdAt.split("T")[0];
        return { ...item, createdAt: tanggalBaru };
    });

    // filter data gruping
    console.log(
        dataAsli.filter(
            (a) => a.createdAt === tanggal.toISOString().split("T")[0]
        )
    );
    var dataNow = dataAsli.filter(
        (a) => a.createdAt === tanggal.toISOString().split("T")[0]
    );

    return (
        // tampilan data ke dalam chart
        <MainLayout>
            <div className="md:w-3/4 mx-auto">
                <Bar
                    data={{
                        labels: dataNow.map((e) => e.nama_Barang),
                        datasets: [
                            {
                                label: "stok awal",
                                data: dataNow.map((e) => e.stok_awal),
                            },
                        ],
                    }}
                />
            </div>
        </MainLayout>
    );
};

export default AnalisisChart;
