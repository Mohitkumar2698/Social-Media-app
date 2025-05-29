import React from "react";

const RegisterPage = () => {
  return (
    <div
      className="h-[90vh] flex justify-center flex-col"
      style={{
        boxShadow: "inset 1000px 1000px 1000px 1000px rgba(0, 0, 0,0)",
        backgroundImage: "url('/bg-image.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
        fontFamily:
          '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
      }}
    >
      <form
        className="flex flex-col items-center ml-[4rem] gap-4 border-2 border-red-300/40 w-[40vw] p-8 rounded-md backdrop-blur-xl"
        action="/"
        method="post"
      >
        <h1 className="text-[3.5rem] mb-[1rem]">REGISTER</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter Username :>"
          className="bg-black/40 text-white border-none pl-4 text-xl rounded-md w-full h-14"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password :>"
          className="bg-black/40 text-white border-none pl-4 text-xl rounded-md w-full h-14"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email :>"
          className="bg-black/40 text-white border-none pl-4 text-xl rounded-md w-full h-14"
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age :>"
          className="bg-black/40 text-white border-none pl-4 text-xl rounded-md w-full h-14"
        />

        <div className="flex gap-4 items-center w-full">
          <span>Gender:</span>
          <label className="flex items-center gap-1">
            <input type="radio" name="gender" value="male" className="mr-1" />
            Male
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="gender" value="female" className="mr-1" />
            Female
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="gender" value="other" className="mr-1" />
            Other
          </label>
        </div>

        <input
          type="text"
          name="game"
          placeholder="Enter Favorite Game :>"
          className="bg-black/40 text-white border-none pl-4 text-xl rounded-md w-full h-14"
        />

        <div className="flex gap-4 items-center mt-2">
          <button
            type="submit"
            className="text-white bg-red-600 px-4 py-2 text-xl rounded-md border-none cursor-pointer hover:bg-red-700 transition-colors"
          >
            Register
          </button>
          <p>
            Already in?{" "}
            <a href="/login" className="text-red-400 hover:underline">
              login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
