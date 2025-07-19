import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Intro() {
  const containerRef = useRef(null);
  const introRef = useRef(null); // Green bg container
  const intro1Ref = useRef(null); // Black inner box

  useGSAP(
    () => {
      // Step 1: Black box goes up
      gsap.to(intro1Ref.current, {
        y: "-100%",
        duration: 1.2,
        delay: 0.5,
        ease: "power4.inOut",
        onComplete: () => {
          intro1Ref.current.style.display = "none";
        },
      });

      // Step 2: Green bg goes up after black box
      gsap.to(introRef.current, {
        y: "-100%",
        duration: 1.8,
        delay: 1.2, // earlier than black box ends, you can adjust for better sync
        ease: "power4.inOut",
        onComplete: () => {
          introRef.current.style.display = "none";
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div
        ref={introRef}
        className="h-[130vh] flex items-center justify-center"
        style={{ backgroundColor: "rgb(20, 207, 147)" }}
      >
        <div
          ref={intro1Ref}
          className="h-[100vh] bg-black flex flex-col justify-center items-center text-white text-4xl font-bold fixed top-0 left-0 right-0 m-auto z-50"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 mb-40 md:text-9xl  text-5xl tracking-wide text-center md:text-left">
            {/* Vivek - DM Serif Text Italic */}
            <span
              className="mr-5  md:text-9xl text-5xl"
              style={{
                fontFamily: "'DM Serif Text', serif",
              }}
            >
              Vivek
            </span>

            {/* JHA - Bebas Neue */}
            <span
              className="mr-5  md:text-9xl  text-5xl"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
                color: "rgb(20, 207, 147)",
              }}
            >
              JHA
            </span>

            {/* is A - Dancing Script */}
            <span
              className="mr-5  md:text-9xl  text-5xl"
              style={{
                fontFamily: "'DM Serif Text', serif",
                fontWeight: 600,
              }}
            >
              is A
            </span>
          </div>

          {/* Spinning SVG Loader */}
          <svg
            className="md:w-20 md:h-20 w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <radialGradient
              id="a12"
              cx=".66"
              fx=".66"
              cy=".3125"
              fy=".3125"
              gradientTransform="scale(1.5)"
            >
              <stop offset="0" stopColor="#FFFFFF"></stop>
              <stop offset=".3" stopColor="#FFFFFF" stopOpacity=".9"></stop>
              <stop offset=".6" stopColor="#FFFFFF" stopOpacity=".6"></stop>
              <stop offset=".8" stopColor="#FFFFFF" stopOpacity=".3"></stop>
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"></stop>
            </radialGradient>
            <circle
              transformOrigin="center"
              fill="none"
              stroke="url(#a12)"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="200 1000"
              strokeDashoffset="0"
              cx="100"
              cy="100"
              r="70"
            >
              <animateTransform
                type="rotate"
                attributeName="transform"
                calcMode="spline"
                dur="2"
                values="360;0"
                keyTimes="0;1"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
            <circle
              transformOrigin="center"
              fill="none"
              opacity=".2"
              stroke="#FFFFFF"
              strokeWidth="15"
              strokeLinecap="round"
              cx="100"
              cy="100"
              r="70"
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Intro;
