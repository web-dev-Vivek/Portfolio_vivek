import React from "react";

function Page5() {
  return (
    <div className="bg-[rgb(37,59,57)]">
      <div className="w-screen h-[140vh] flex justify-center text-center font-bold items-top word-wrap pt-20 md:pt-40">
        <h1
          style={{ fontFamily: "Cormorant Garamond, serif" }}
          className="text-white md:text-8xl text-5xl"
        >
          LET'S TALK <br /> ABOUT SOMETHING CREATIVE
        </h1>
        <svg
          className="o-ui-arrow mb-6 w-10 h-10 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.10162 3.10156L62.9999 62.9999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M63 1.00001L63 63L0.999989 63"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Page5;
