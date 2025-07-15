import React from "react";
import "./page1.css";

function page1() {
  return (
    <div>
      <div className="w-screen h-[100vh] text-black flex flex-col justify-center items-center">
        <div
          id="row1"
          className="flex leading-none items-center mt-15 md:flex-row flex-col md:gap-20"
        >
          <h1
            className="text-[30vw] md:text-[16vw] font-bold "
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
          <div className="flex flex-row  md:flex-col md:w-full md:h-full ">
            <svg
              style={{ color: "rgb(20, 207, 147)" }}
              viewBox="0 0 600 200"
              class="w-[90%] min-w-md"
              fill="rgb(20, 207, 147)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="50%"
                y="50%"
                text-anchor="middle"
                dominant-baseline="middle"
                font-family="DM Serif Text, serif"
                font-size="120"
                fill="none"
                stroke="rgb(20, 207, 147)"
                stroke-width="2"
                class="path"
              >
                FRONTEND
              </text>
            </svg>
          </div>
          Developer
        </div>
      </div>
    </div>
  );
}

export default page1;
