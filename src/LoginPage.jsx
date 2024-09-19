import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import LogoBrand from "./components/LogoBrand";
import { Link } from "react-router-dom";
import bgImageLogin from "../src/assets/background-login.jpeg";
const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: bgImageLogin }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg w-[529px] h-auto">
        <div className="text-center mb-6">
          {/*section logo & brand*/}
          <LogoBrand />
          {/*section subtitle*/}
          <div style={{ fontFamily: "Lato" }}>
            <h2 className="text-white mt-2 text-3xl">Masuk</h2>
            <p className="text-white mt-1 text-sm">Selamat datang kembali!</p>
          </div>
        </div>
        {/*Font Lato*/}
        {/*Username Section*/}
        <div style={{ fontFamily: "Lato" }}>
          <label className="text-white text-lg">Username</label>
          <CustomInput
            type="text"
            className="mb-5"
            placeholder="Masukkan username"
          />
          {/*Kata Sandi Section*/}
          <label className="text-white text-lg">Kata Sandi</label>
          <div className="relative mb-4">
            <CustomInput type="password" placeholder="Masukkan kata sandi" />
            <span className="absolute right-5 top-6 transform -translate-y-1/2 cursor-pointer w-5 h-4">
              <img src="./src/assets/eye.png" alt="" />
            </span>
          </div>

          <div className="flex text-sm mb-4">
            <a href="#register" className="text-[#9D9EA1]">
              Belum punya akun?{" "}
            </a>
            <Link to="/register" className="font-bold text-white ml-1">
              Daftar
            </Link>

            <a href="#forgot-password">Lupa kata sandi?</a>
          </div>
          <CustomButton
            className="bg-opacity-70, text-center, mb-3"
            label="Masuk"
            to="/beranda"
          />
          <p className="text-center text-[#9D9EA1] mb-2">Atau</p>
          <CustomButton
            className="bg-opacity-70, text-center"
            icon="./src/assets/google-logo.png"
            label="Masuk dengan Google"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
