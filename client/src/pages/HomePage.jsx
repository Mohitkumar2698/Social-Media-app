import React from "react";
import { Link } from "react-router-dom";

const GameCoreHome = () => {
  return (
    <div
      className="h-[90vh] bg-cover bg-no-repeat flex items-center font-Orbitron"
      style={{
        boxShadow: "inset 1000px 1000px 1000px 1000px rgba(0, 0, 0,0)",
        backgroundImage: "url('/bg-image.png')",
      }}
    >
      <div className="contain flex flex-col justify-between  ml-[1rem] px-[2rem] py-[8.4rem] w-[43vw] border-2 border-red-300/40 rounded-md backdrop-blur-xl">
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-5xl font-bold">Welcome to GameCore</h1>
          <p className="p-0 font-sans">
            Step into the core of gaming excellence—a platform designed for
            those who live and breathe interactive worlds. Here, competition
            ignites, friendships form, and every victory is celebrated. From
            hardcore esports warriors to laid-back explorers, this is your home.
          </p>
        </div>
        <div className="buttons">
          <div className="flex gap-8 pt-15">
            <Link
              to="/register"
              className="text-white bg-red-600 w-40 py-2 text-xl rounded-md border-none cursor-pointer text-center"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-white bg-red-600 w-40 py-2 text-xl rounded-md border-none cursor-pointer text-center"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCoreHome;
