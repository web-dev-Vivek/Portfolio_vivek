import React, { useRef } from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Page2() {
  const container1 = useRef();

  useGSAP(
    () => {
      gsap.to("#img1", {
        rotate: 10,
        duration: 5,
        scrollTrigger: {
          trigger: "#img1",
          start: "top 170%",
          end: "bottom bottom",
          scrub: 3,
        },
        ease: "power1.out",
      });

      gsap.to("#img2", {
        rotate: 14,
        duration: 5,
        scrollTrigger: {
          trigger: "#img2",
          start: "top 170%",
          end: "bottom bottom",
          scrub: 3,
        },
        ease: "power1.out",
      });

      gsap.to("#img3", {
        rotate: 18,
        duration: 5,
        scrollTrigger: {
          trigger: "#img3",
          start: "top 170%",
          end: "bottom bottom",
          scrub: 3,
        },
        ease: "power1.out",
      });
    },
    { scope: container1 }
  );

  return (
    <div className="w-screen flex flex-col md:flex-col px-4 md:px-0">
      {/* Main Section (Text + Image) */}
      <div
        ref={container1}
        className="w-full md:h-[100vh] flex flex-col md:flex-row md:mt-16 justify-center"
      >
        <div className="w-full md:w-[60%] flex md:flex-row items-center justify-center relative order-1 md:order-2">
          <div className="h-[80vh] pt-[70px]">
            {/* Image 1 */}
            <a
              href="https://the-uncle-cafe.vercel.app/"
              id="img1"
              className="w-[50vw] h-[350px] absolute md:w-[33vw] left-50 z-[-10] rounded-[30px] h-[80vh] md:h-[90vh] object-center overflow-hidden z-10 md:absolute md:top-0 left-20 md:left-40 -rotate-10 md:-rotate-25"
            >
              <img
                src={img3}
                alt="Project 1"
                className="w-full md:h-auto grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </a>

            {/* Image 2 */}
            <a
              href="https://theartisticwing.vercel.app/"
              id="img2"
              className="w-[50vw] h-[350px] block h-[80vh] md:w-[33vw] rounded-[30px] h-[80vh] md:h-[90vh] object-center overflow-hidden z-20 md:absolute md:top-10 -rotate-10 md:-rotate-10"
            >
              <img
                src={img2}
                alt="Project 2"
                className="w-full md:h-auto grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </a>

            {/* Image 3 */}
            <a
              href="https://web-dev-vivek.github.io/Netflix_clone/netflix1.html"
              id="img3"
              className="w-[50vw] h-[350px] absolute md:pt-1 mt-[70px] top-0 right-50  md:w-[33vw] rounded-[30px] h-[80vh] md:h-[90vh] object-center overflow-hidden z-30 md:absolute md:top-20 md:right-10 -rotate-10 md:-rotate-5"
            >
              <img
                src={img1}
                alt="Project 3"
                className="w-full md:h-auto grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </a>
          </div>
        </div>

        {/* Text Section (goes below images on mobile, left in desktop) */}
        <div className="w-full md:w-[30%] text-center md:text-left px-4 md:px-10 order-2 md:order-1">
          <p
            className="text-2xl md:text-4xl pt-10 md:pt-30"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            I am Vivek Jha, I create{" "}
            <span style={{ color: "rgb(20, 207, 147)" }}>unconventional</span>{" "}
            <br />
            yet functional & visually pleasing interfaces for the mobile and
            web.
          </p>
        </div>
      </div>

      {/* Arrow + Branding Text (always below everything) */}
      <div className="w-full h-fit flex flex-col items-start justify-start px-10 py-10 bg-white order-3">
        <svg
          className="o-ui-arrow mb-6"
          width="64"
          height="64"
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

        <div className="text-2xl md:text-3xl w-full md:w-[30vw]">
          Web & mobile / UI&Ux / Branding / Front-end Development
        </div>
      </div>
    </div>
  );
}

export default Page2;
