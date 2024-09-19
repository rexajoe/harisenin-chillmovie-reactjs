import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import LogoBrand from "./components/LogoBrand";
import { Link } from "react-router-dom";
import bgImageDaftar from "../src/assets/background-daftar.jpeg";
const RegisterPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageDaftar})` }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg w-[529px] h-auto">
        <LogoBrand />
        {/*Font Lato*/}
        <div style={{ fontFamily: "Lato" }}>
          <div className="text-center mb-6">
            <h2 className="text-white mt-2 text-3xl">Daftar</h2>
            <p className="text-white text-sm mt-1">Selamat Datang!</p>
          </div>
          <label className="text-white text-lg">Username</label>
          <CustomInput className="mb-5" placeholder="Masukkan username" />

          <label className="text-white text-lg">Kata Sandi</label>
          <div className="relative mb-4">
            <CustomInput className="mb-2" placeholder="Masukkan kata sandi" />
            <span className="absolute right-5 top-6 transform -translate-y-1/2 cursor-pointer w-5 h-4">
              <img src="./src/assets/eye.png" alt="" />
            </span>
          </div>

          <label className="text-white text-lg">Konfirmasi Kata Sandi</label>
          <div className="relative mb-4">
            <CustomInput placeholder="Masukkan kata sandi" />
            <span className="absolute right-5 top-6 transform -translate-y-1/2 cursor-pointer w-5 h-4">
              <img src="./src/assets/eye.png" alt="" />
            </span>
          </div>

          <div className="text-sm mb-4">
            <a href="#login" className="text-[#9D9EA1]">
              Sudah punya akun?{" "}
            </a>
            <Link to="/" className="font-bold text-white ml-1">
              Masuk
            </Link>
          </div>
          {/*button bawah*/}

          <CustomButton
            className="bg-opacity-70, text-center mb-3"
            label="Masuk"
            to="/beranda"
          />
          <p className="text-center text-[#9D9EA1] mb-2">Atau</p>
          <CustomButton
            className="bg-opacity-70, text-center"
            icon="./src/assets/google-logo.png"
            label="Daftar dengan Google"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
