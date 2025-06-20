import { useNavigate } from "react-router-dom";
import Button from "../Components/Moleculs/Button";
import Input from "../Components/Moleculs/Input";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('info')) {
            navigate("/")
        }
    },[navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const response = await axios.post("http://localhost:8000/login", {
                email,
                password,
            });
            navigate("/");
            localStorage.setItem("info", response.data["response"].email);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setInvalid(error.response?.data["message"]);
            }
        }
    };

    return (
        <div className="bg-perpustakaan h-screen bg-cover border ">
            <div className="lg:w-2/4 text-center mx-auto bg-blue-700 text-white mt-36 p-5 rounded-xl">
                <h1 className="text-3xl font-bold">Login Stock Bahan Baku</h1>
                <p className="text-lg">
                    Silahkan Login Menggunakan Akun Yang Sudah Terdaftar
                </p>
                <form
                    className="flex flex-col gap-4 mt-5"
                    id="loginForm"
                    onSubmit={handleSubmit}>
                    <Input
                        htmlFor="email"
                        labelTitle="Email"
                        id="email"
                        placeholder="Masukan email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        htmlFor="password"
                        labelTitle="Password"
                        id="password"
                        placeholder="Masukan password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="text-red-500 font-semibold">{invalid}</p>
                </form>

                <div className="flex w-2/3 mx-auto ml-auto mt-7 justify-between border-t-2 pt-5 items-center">
                    <Button
                        style="bg-green-600 hover:bg-green-700"
                        title="Login"
                        type="submit"
                    />
                    <Button
                        title="Registrasi"
                        onClick={() => navigate("/registrasi")}
                        style="bg-slate-700 hover:bg-slate-800"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;