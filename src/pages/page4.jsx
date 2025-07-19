import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Page4() {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.utils.toArray(".scroll-image").forEach((img) => {
        gsap.fromTo(
          img,
          { y: -100 }, // Start with image shifted up
          {
            y: 0, // Scroll brings it down into view
            ease: "power1.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 160%",
              end: "bottom bottom",
              scrub: 2,
              markers: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="w-screen md:pt-40 bg-[rgb(242,242,242)]">
      {/* Title Section */}
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-20 justify-center items-center h-auto md:h-40">
        <div
          style={{ fontFamily: "Oswald, sans-serif" }}
          className="text-5xl md:text-8xl font-bold text-center md:text-left"
        >
          FEAT WO
          <span
            className="text-7xl md:text-9xl"
            style={{
              fontFamily: "Bubblegum Sans, cursive",
              color: "rgb(20, 207, 147)",
            }}
          >
            r
          </span>
          KS
        </div>

        <div className="mt-4 md:mt-0">
          <svg
            className="o-ui-arrow w-10 h-10 md:w-16 md:h-16 rotate-90"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.10162 3.10156L62.9999 62.9999"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M63 1.00001L63 63L0.999989 63"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Image Section */}
      <div
        ref={containerRef}
        id="container"
        className="w-screen h-[100vh] flex flex-col md:flex-row justify-evenly items-end md:pb-[5vh] gap-6 px-4"
      >
        {/* Image 1 */}
        <div className="w-full md:w-[40vw] h-[90vh] overflow-hidden rounded-[50px] flex justify-center items-start">
          <img
            className="scroll-image w-full min-h-[120%] object-cover object-top"
            src="https://i.pinimg.com/736x/7b/c6/34/7bc6341de1cf45f08e1fec5764ce9814.jpg"
            alt="scroll-animated"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full md:w-[30vw] h-[60vh] overflow-hidden rounded-[50px] flex justify-center items-start">
          <img
            className="scroll-image w-full min-h-[120%] object-cover object-top"
            src="https://i.pinimg.com/736x/89/f4/6f/89f46f58253df7110dc78086d7905759.jpg"
            alt="scroll-animated"
          />
        </div>
      </div>
    </div>
  );
}

export default Page4;
