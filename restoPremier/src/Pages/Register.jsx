import { useNavigate } from "react-router-dom";
import Input from "../components/moleculs/Input";
import Button from "../components/moleculs/Button";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [invalid, setInvalid] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           await axios.post("http://localhost:8000/user", {
                email,
                password,
                confPassword,
            });
            alert('Berhasil membuat akun. anda bisa login')
            navigate("/login")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setInvalid(error.response?.data["msg"]);
            }
        }
    };

    
    return (
        <div className="bg-perpustakaan h-screen bg-cover border ">
            <div className="lg:w-2/4 text-center mx-auto bg-blue-700 text-white mt-24 p-5 rounded-xl">
                <h1 className="text-3xl font-bold">Registrasi</h1>
                <p className="text-lg">
                    Silahkan Registrasi Dahulu Sebelum Login
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

                    <Input
                        htmlFor="confPassword"
                        labelTitle="Confirm Password"
                        id="confPassword"
                        placeholder="Masukan ulang password"
                        type="password"
                        onChange={(e) => setconfPassword(e.target.value)}
                    />

                    <p className="text-red-500 font-semibold">{invalid}</p>

                    <Button
                        style="bg-green-600 hover:bg-green-700 mx-auto w-40"
                        title="Registrasi"
                        type="submit"
                    />
                </form>

                <div className="flex w-2/3 mx-auto ml-auto mt-7 justify-between border-t-2 pt-5 items-center">
                    <p>Sudah mempunyai akun?</p>
                    <Button
                        title="Login"
                        onClick={() => navigate("/login")}
                        style="bg-slate-700 hover:bg-slate-800"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;