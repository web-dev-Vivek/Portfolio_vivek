import React from "react";

function page1() {
  return (
    <div>
      <div className="w-screen h-[100vh] text-black flex flex-col justify-center items-center ">
        <div
          id="row1"
          className="flex items-center mt-15 md:flex-row flex-col md:gap-20"
        >
          <h1
            className="text-[30vw] md:text-[16vw] font-bold"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            It's Me
          </h1>
          <div className="flex flex-row justify-center items-center gap-10 pl-10 pr-10 word-wrap">
            <p className="text-[12px]  md:w-[10vw] text-gray-400">
              Hey! I'm in for your project Worldwide!
            </p>
            <p className="text-[12px] md:w-[10vw] text-gray-400">
              My local time is 11:04 PM (GMT+5:30 - IST)
            </p>
          </div>
        </div>
        <div
          id="row2"
          className="text-[16vw] font-bold flex  items-top"
          style={{
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          <span
            className="text-[5vw] font-bold"
            style={{ color: "rgb(20, 207, 147)" }}
          >
            FRONTEND
          </span>
          Developer
        </div>
      </div>
    </div>
  );
}

export default page1;
