"use client";

export const App = () => {
  return (
    <div className="h-screen overflow-hidden w-full flex items-center">
      <div className="flex flex-col justify-center w-1/2 items-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-col ml-10 gap-10">
            {" "}
            {/*1.div*/}
            <h1 className="w-[333px] h-[122px] font-semibold text-[100px]">
              LOGIN
            </h1>
            <input
              className="w-[527px] h-[62px] border-2 rounded-[10px]"
              type="text"
              placeholder="Username"
            />
            <input
              className="w-[527px] h-[62px] border-2 rounded-[10px]"
              type="password"
              placeholder="Password"
            />
            <button className="bg-[#101A1CD6] text-white w-[222px] h-[64px] rounded-[10px]">
              LOGIN
            </button>
          </div>
          <div className="flex items-center w-full mt-10">
            <div className="flex-grow border-t border-black-300"></div>
            <span className="mx-4 ">OR</span>
            <div className="flex-grow border-t border-black-300"></div>
          </div>
          <div className="flex flex-row mt-10 gap-10">
            <img src="/image 1.png" alt="google" />
            <img src="/image 2.png" alt="facebook" />
          </div>
          <div className="mt-10 w-full flex justify-center ">
            <a href="#">Not yet registered , Click here to sign up </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen">
        <img
          src="/papagan.png"
          alt="papagan"
          className="w-full h-full object-cover rounded-l-[200px]"
        />
      </div>
    </div>
  );
};
