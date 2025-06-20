import React from "react";


const Input= ({
    labelTitle,
    htmlFor,
    id,
    type,
    placeholder,
    onChange,
    className,
    step,
    value,
    autoComplete,
}) => {
    return (
        <div className={`flex flex-col mx-auto items-start ${className}`}>
            <label htmlFor={htmlFor} className="text-xl font-bold">
                {labelTitle}
            </label>
            <input
                className="w-full text-black px-1 py-2 rounded-lg border border-black"
                id={id}
                type={type}
                step={step}
                placeholder={placeholder}
                value={value}
                required
                autoComplete={autoComplete}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
