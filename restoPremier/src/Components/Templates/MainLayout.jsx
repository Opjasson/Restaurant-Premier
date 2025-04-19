import React from "react";
import Navbar from "../Organism/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="bg-[#FDFAF6] h-screen lg:px-10 px-5 pt-10">{children}</div>
        </div>
    );
};

export default MainLayout;
