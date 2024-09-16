import LogoBrand from "./LogoBrand";
const Navbar = () => {
  return (
    <nav className="bg-[#181A1C] p-4 flex justify-between items-center">
      <ul
        className="flex justify-around gap-[5vw] items-center"
        style={{ fontFamily: "Lato" }}
      >
        <LogoBrand className="ml-[5vw]" />
        <li className="text-white">Series</li>
        <li className="text-white">Film</li>
        <li className="text-white">Daftar Saya</li>
      </ul>
      <ul className="flex justify-around gap-3 items-center mr-[5vw]">
        <li className="w-10 h-10">
          <img
            src="./src/assets/avatar.png"
            alt="avatar"
            className="rounded-full"
          />
        </li>
        <li className="w-7 h-7">
          <img src="./src/assets/arrowdown.png" alt="arrow-down" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
