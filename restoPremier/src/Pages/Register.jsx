import { useNavigate } from "react-router-dom";
import Button from "../Components/Moleculs/Button";
import Input from "../Components/Moleculs/Input";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [invalid, setInvalid] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/user", {
                email,
                role,
                password,
                confPassword,
            });
            alert("Berhasil membuat akun. anda bisa login");
            navigate("/login");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setInvalid(error.response?.data["msg"]);
            }
        }
    };

    return (
        <div className="bg-perpustakaan h-screen bg-cover border ">
            <div className="lg:w-2/4 text-center mx-auto bg-blue-700 text-white mt-5 p-5 rounded-xl">
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

                    <div className="flex flex-col mx-auto items-start">
                        <label
                            htmlFor="namaStock"
                            className="md:text-xl text-base">
                            Role
                        </label>
                        <select
                            onChange={(e) => setRole(e.target.value)}
                            id="namaStock"
                            className="border border-black md:p-2 p-1.5 rounded-xl w-56 text-black">
                            <option value="pilih" className="text-black">
                                Pilih jenis role
                            </option>
                            <option
                                value="leader kitchen"
                                className="text-black">
                                Leader kitchen
                            </option>
                            <option value="f&b division" className="text-black">
                                F&B division
                            </option>
                        </select>
                    </div>

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

                    <div className="flex w-2/3 mx-auto ml-auto mt-7 justify-between border-t-2 pt-5 items-center">
                        <Button
                            style="bg-green-600 hover:bg-green-700"
                            title="Registrasi"
                            type="submit"
                        />
                        <Button
                            style="bg-slate-600 hover:bg-slate-700"
                            title="Login"
                            onClick={() => navigate("/login")}
                            type="button"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
