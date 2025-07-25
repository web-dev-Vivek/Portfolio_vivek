import React from "react";

function Page5() {
  return (
    <div className="bg-[rgb(37,59,57)]">
      <div className="w-screen h-[170vh] relative flex justify-center text-center font-bold items-top word-wrap pt-20 md:pt-40">
        <h1
          style={{ fontFamily: "Cormorant Garamond, serif" }}
          className="text-white md:text-8xl text-5xl"
        >
          LET'S TALK <br /> ABOUT SOMETHING CREATIVE
        </h1>
        <div className="absolute md:top-[370px] left-[50px]">
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
          <div className="flex flex-col mt-[20vh] md:flex-row justify-evenly items-center gap-4 md:gap-10">
            <button className="group relative overflow-hidden w-[90vw] md:w-[45vw] h-[20vh] border-2 border-white rounded-full text-white transition-all duration-20">
              <span className="absolute inset-0 bg-white scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 ease-out z-0"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-20">
                Write a Message
              </span>
            </button>

            <button className="group relative overflow-hidden w-[90vw] md:w-[45vw] h-[20vh] border-2 border-white rounded-full text-white transition-all duration-20">
              <span className="absolute inset-0 bg-white scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 ease-out z-0"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-20">
                Discuss Project
              </span>
            </button>
          </div>
          <div className="mt-40 w-full h-full bg-green-600 flex flex-wrap justify-center items-center gap-4 p-4">
            <div className="w-[90vw] h-[30vh] md:w-[20vw] md:h-[20vh] bg-red-600">
              <h1>hello</h1>
              <p></p>
            </div>
            <div className="w-[90vw] h-[30vh] md:w-[20vw] md:h-[20vh] bg-red-600">
              <h1>hello</h1>
              <p></p>
            </div>
            <div className="w-[90vw] h-[30vh] md:w-[20vw] md:h-[20vh] bg-red-600">
              <h1>hello</h1>
              <p></p>
            </div>
            <div className="w-[90vw] h-[30vh] md:w-[20vw] md:h-[20vh] bg-red-600">
              <h1>hello</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5;
