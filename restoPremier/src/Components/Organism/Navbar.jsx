import React from "react";
import { premier } from "../../assets";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const handleDropDown = () => {
        const getElement = document.querySelector("#dropDown");
        switch (getElement.hasAttribute('hidden')) {
            case true:
                getElement.removeAttribute("hidden");
                break;
            case false:
                getElement.setAttribute("hidden","");
                break;
            default:
                break;
        }
        
        
    };

    return (
        <nav className="flex items-center justify-between px-8 w-full">
            <div className="flex items-center">
                <img src={premier} alt="" className="lg:h-24 h-16" />
                <h1 className="lg:text-xl text-base italic">Stock Resto</h1>
            </div>
            <div className="w-1/2 lg:flex hidden justify-between">
                <Link
                    className="lg:text-lg text-sm hover:text-slate-500 hover:underline"
                    to={"/"}>
                    STOCK BARANG
                </Link>
                <Link
                    className="lg:text-lg text-sm hover:text-slate-500 hover:underline"
                    to={"/Analisis-chart"}>
                    ANALISIS CHART
                </Link>
                <Link
                    className="lg:text-lg text-sm hover:text-slate-500 hover:underline"
                    to={"/Semua-data"}>
                    SEMUA DATA
                </Link>
            </div>

            <IoMenu onClick={() => handleDropDown()} className="lg:hidden block text-xl hover:cursor-pointer" />

            {/* Start DropDown */}
            <div
                hidden
                id="dropDown"
                className="bg-slate-600 p-5 rounded-bl-lg rounded-tl-lg absolute top-16 right-0 h-2/3 w-60 list-none lg:hidden">
                <li className="mb-10">
                    <Link
                        className="text-lg hover:text-slate-500 hover:underline text-white"
                        to={"/"}>
                        STOCK BARANG
                    </Link>
                </li>
                <li className="mb-10">
                    <Link
                        className="text-lg hover:text-slate-500 hover:underline text-white"
                        to={"/Analisis-chart"}>
                        ANALISIS CHART
                    </Link>
                </li>
                <li className="mb-10">
                    <Link
                        className="text-lg hover:text-slate-500 hover:underline text-white"
                        to={"/Semua-data"}>
                        SEMUA DATA
                    </Link>
                </li>
            </div>
            {/* End Drop Down */}
        </nav>
    );
};

export default Navbar;
