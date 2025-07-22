import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./page1.css";

function Page1() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("#row1 h1", {
        y: 200,
        opacity: 0,
        duration: 0.5,
        delay: 3,
        ease: "power4.out",
      });

      tl.from("#row2", {
        y: 200,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="w-screen md:h-[90vh] flex flex-col justify-center items-center bg-[rgb(21,21,21)] text-white md:bg-white md:text-black">
        <div
          id="row1"
          className="flex leading-none items-center mt-30 md:flex-row flex-col md:gap-20"
        >
          <h1
            className="text-[30vw] md:text-[16vw] overflow-hidden font-bold"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            It's Vivek
          </h1>
          <div className="flex flex-row justify-center items-center gap-10 pl-10 pr-10 word-wrap">
            <p className="text-[12px] md:w-[10vw] text-gray-400">
              Hey! I'm in for your project Worldwide!
            </p>
            <p className="text-[12px] md:w-[10vw] text-gray-400">
              My local time is 11:04 PM (GMT+5:30 - IST)
            </p>
          </div>
        </div>

        <div
          className="text-[16vw] w-[100vw] font-bold flex flex-col md:flex-row items-center justify-center text-center md:text-left"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          <div className="md:w-auto w-full mt-5 flex justify-center items-center">
            <svg
              style={{ color: "rgb(20, 207, 147)" }}
              viewBox="0 0 600 120"
              className="md:w-[90%] w-[80vw] min-w-md md:pl-0 md:pr-0 pl-30 pr-15"
              fill="rgb(20, 207, 147)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="DM Serif Text, serif"
                fontSize="120"
                fill="none"
                stroke="rgb(20, 207, 147)"
                strokeWidth="2"
                className="path"
              >
                FRONTEND
              </text>
            </svg>
          </div>

          <div id="row2" className="text-[21vw] md:text-[14vw] md:mt-4 md:mt-0">
            Developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
