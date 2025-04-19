import React from "react";
import Navbar from "../Organism/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="bg-[#FDFAF6] h-screen">{children}</div>
        </div>
    );
};

export default MainLayout;
