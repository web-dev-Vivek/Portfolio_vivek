import React from "react";
import Insta from "../assets/instagram.png";
import Link from "../assets/linkedin.png";
import Twit from "../assets/twitter.png";
import Git from "../assets/git.png";

function Page5() {
  return (
    <div className="bg-[rgb(37,59,57)]">
      <div className="w-screen min-h-screen md:h-[150vh] relative flex flex-col items-center text-center pt-20 md:pt-40">
        <h1
          style={{ fontFamily: "Cormorant Garamond, serif" }}
          className="text-white text-5xl md:text-8xl font-bold"
        >
          LET'S TALK <br /> ABOUT SOMETHING CREATIVE
        </h1>

        <div className="absolute top-[28rem] md:top-[370px] left-6 md:left-[50px]">
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

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-10 mt-32 w-full px-4">
          <button className="group relative overflow-hidden w-full md:w-[45vw] h-[20vh] border-2 border-white rounded-full text-white transition-all duration-300">
            <span className="absolute inset-0 bg-white scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Write a Message
            </span>
          </button>

          <button className="group relative overflow-hidden w-full md:w-[45vw] h-[20vh] border-2 border-white rounded-full text-white transition-all duration-300">
            <span className="absolute inset-0 bg-white scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Discuss Project
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-20 w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4">
          {[
            {
              Link: "https://www.instagram.com/vocalist_vivek/",
              title: "INSTAGRAM",
              handle: "@vocalist_vivek",
              icon: Insta,
            },
            {
              Link: "https://github.com/web-dev-Vivek",
              title: "X",
              handle: "@web_dev_vivek",
              icon: Link,
            },
            {
              Link: "https://www.linkedin.com/in/vivek-jha-17ba6a306/",
              title: "LinkedIn",
              handle: "@Vivek Jha",
              icon: Twit,
            },
            {
              Link: "https://github.com/web-dev-Vivek",
              title: "Github",
              handle: "@web-dev-Vivek",
              icon: Git,
            },
          ].map((item, i) => (
            <a
              href={item.Link}
              key={i}
              className="relative overflow-hidden border-t border-white w-full md:w-[20vw] h-[20vh] md:h-[15vh] text-white flex items-center justify-between px-4 group"
            >
              {/* Hoverbox Animation Layer */}
              <div
                style={{
                  backgroundColor: "rgb(20, 207, 147)",
                }}
                className="absolute top-[-100%] left-0 w-full h-full transition-all duration-500 ease-in-out group-hover:top-0 z-0"
              ></div>

              {/* Content Layer (above hoverbox) */}
              <div className="relative z-10 flex flex-col justify-center">
                <h1 className="text-2xl md:text-3xl text-start">
                  {item.title}
                </h1>
                <p className="text-start">{item.handle}</p>
              </div>

              <div className="relative z-10">
                <img className="w-[30px] md:w-[35px]" src={item.icon} alt="" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page5;
