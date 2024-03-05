import React from "react";

export default function Bacground() {
  return (
    <>
      <div className=" z-[2] w-full h-screen">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <h1 className="underline flex text-[13vw] leading-none tracking-tight font-semibold text-zinc-900 ">
            Astroph<span className="text-[#7eda2d]">i</span>le
          </h1>
          <span className="font-semibold tracking-tight text-zinc-900">
            person who loves astronomy
          </span>
        </h1>
      </div>
    </>
  );
}
