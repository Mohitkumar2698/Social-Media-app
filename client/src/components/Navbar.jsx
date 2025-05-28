import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-[10vh] bg-gray-500 flex justify-between items-center pl-[5rem] pr-[7rem]">
      <div className="page-links-div flex items-center gap-[1.2rem] font-bold text-[1.2rem]">
        <p className="page-link">GAME</p>
        <p className="page-link">NEWS</p>
        <p className="page-link">STORE</p>
        <p className="page-link">SUPPORT</p>
        <p className="page-link">ESPORTS</p>
        <p className="page-link">GAMING ZONE</p>
      </div>
      <div className="login-download-div flex items-center gap-[1.8rem] font-bold text-[1.2rem] text-white">
        <button>LOGIN</button>
        <button className="p-[1rem] pt-[0.3rem] pb-[0.3rem] bg-red-600 rounded font-normal text-[1rem]">DOWNLOAD NOW</button>
      </div>
    </div>
  );
};

export default Navbar;
