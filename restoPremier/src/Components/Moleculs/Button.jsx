import React from "react";


const Button= ({
    title,
    style,
    onClick,
    type,
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`${style} w-fit sm:px-7 md:px-9 lg:px-9 px-5 sm:py-0 md:py-2 rounded-xl hover:cursor-pointer hover:bg-green-600 h-fit`}>
            <p>{title}</p>
        </button>
    );
};

export default Button;
