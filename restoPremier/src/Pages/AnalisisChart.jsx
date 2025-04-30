import React from "react";
import MainLayout from "../Components/Templates/MainLayout";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const AnalisisChart = () => {
    return (
        <MainLayout>
            <div className="md:w-3/4 mx-auto">
                <Bar 
                    data={{ 
                        labels: ["A", "B", "C"],
                        datasets: [
                            {
                                label: "Revenue",
                                data: [200, 300, 400]
                            }
                        ]
                     }}
                />
            </div>
        </MainLayout>
    );
};

export default AnalisisChart;
