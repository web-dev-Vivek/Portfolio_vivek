import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Intro() {
  const introRef = useRef(null); // Green bg container
  const intro1Ref = useRef(null); // Black inner box
  const nameRef = useRef(null);

  useEffect(() => {
    // Step 1: Black box goes up first
    gsap.to(intro1Ref.current, {
      y: "-100%",
      duration: 1.2,
      delay: 1.5,
      ease: "power4.inOut",
      onComplete: () => {
        intro1Ref.current.style.display = "none";
      },
    });

    // Step 2: Green background goes up AFTER black box
    gsap.to(introRef.current, {
      y: "-100%",
      duration: 1.8,
      delay: 1.2, // after black animation ends
      ease: "power4.inOut",
      onComplete: () => {
        introRef.current.style.display = "none";
      },
    });
  }, []);

  return (
    <div
      ref={introRef}
      className="h-[130vh] flex items-center justify-center"
      style={{ backgroundColor: "rgb(20, 207, 147)" }}
    >
      <div
        ref={intro1Ref}
        className="h-[100vh] bg-black flex flex-col justify-center items-center text-white text-4xl font-bold fixed top-0 left-0 right-0 m-auto z-50"
      >
        <div
          ref={nameRef}
          style={{
            fontFamily: "Playfair Display, serif",
          }}
          className="flex flex-col md:flex-row items-center gap-2 lg:text-9xl mb-40 sm:text-2xl tracking-wide text-center md:text-left"
        >
          VIVEK{" "}
          <span
            style={{
              fontFamily: "Playfair Display, serif",
              color: "rgb(20, 207, 147)",
            }}
          >
            JHA
          </span>{" "}
          IS A
        </div>
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
            <stop offset="0" stop-color="#FFFFFF"></stop>
            <stop offset=".3" stop-color="#FFFFFF" stop-opacity=".9"></stop>
            <stop offset=".6" stop-color="#FFFFFF" stop-opacity=".6"></stop>
            <stop offset=".8" stop-color="#FFFFFF" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"></stop>
          </radialGradient>
          <circle
            transform-origin="center"
            fill="none"
            stroke="url(#a12)"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="200 1000"
            stroke-dashoffset="0"
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
            transform-origin="center"
            fill="none"
            opacity=".2"
            stroke="#FFFFFF"
            stroke-width="15"
            stroke-linecap="round"
            cx="100"
            cy="100"
            r="70"
          ></circle>
        </svg>
      </div>
    </div>
  );
}

export default Intro;
