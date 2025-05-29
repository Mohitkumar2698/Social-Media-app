import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      className="h-[90vh] flex justify-center flex-col"
      style={{
        boxShadow: "inset 1000px 1000px 1000px 1000px rgba(0, 0, 0, 0)",
        backgroundImage: "url('/bg-image.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
        fontFamily:
          '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
      }}
    >
      <form
        className="flex flex-col ml-[3.3rem] mt-[2rem] items-center gap-3 border-2 border-red-300/40 w-[40vw] px-[2rem] py-[4rem] rounded-md backdrop-blur-xl"
        action="/"
        method="post"
      >
        <h1 className="text-[3.5rem] mb-[2rem]">LOGIN</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter Username :>"
          className="bg-black/40 text-white border-none pl-4 text-xl rounded-md w-full h-[7vh]"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password :>"
          className="bg-black/40 text-white border-none pl-4 text-xl rounded-md w-full h-[7vh]"
        />
        <div className="flex gap-4 items-center mt-[2rem]">
          <button
            type="submit"
            className="text-white bg-red-600 px-4 py-2 text-xl rounded-md border-none cursor-pointer"
          >
            Login
          </button>
          <p>
            New to community?{" "}
            <Link to="/register" className="text-red-400 hover:underline">
              register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
