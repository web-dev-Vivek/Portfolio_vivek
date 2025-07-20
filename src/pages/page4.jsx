import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HoverImageBox from "../components/image.jsx";

gsap.registerPlugin(ScrollTrigger);

function Page4() {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.utils.toArray(".scroll-image").forEach((img) => {
        gsap.fromTo(
          img,
          { y: -100 },
          {
            y: 0,
            ease: "power1.out",
            scrollTrigger: {
              trigger: img.parentElement.parentElement,
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
    <div className="w-screen md:pt-40 bg-[rgb(242,242,242)]" ref={containerRef}>
      {/* Title Section */}
      <div className="w-full flex mb-20 flex-row gap-6 md:gap-20 justify-center items-center h-auto md:h-40">
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

      {/* Image Sections Individually */}
      <div className="space-y-20 group-hover:bg-black md:px-4 ">
        {/* Section 1 */}
        <div className="w-screen flex flex-col md:flex-row md:justify-evenly justify-center items-center md:items-end md:pb-[5vh] gap-6">
          <HoverImageBox
            className="group"
            mainImage="https://i.pinimg.com/736x/89/f4/6f/89f46f58253df7110dc78086d7905759.jpg"
            hoverImages={[
              "https://i.ytimg.com/vi/TvngY4unjn4/hqdefault.jpg",
              "https://i.ytimg.com/vi/b4b1cMVZOUU/hqdefault.jpg",
              "https://i.ytimg.com/vi/nJZcbidTutE/hqdefault.jpg",
            ]}
            width="40vw"
            height="90vh"
          />
          <HoverImageBox
            mainImage="https://i.pinimg.com/736x/89/f4/6f/89f46f58253df7110dc78086d7905759.jpg"
            hoverImages={[
              "https://i.ytimg.com/vi/TvngY4unjn4/hqdefault.jpg",
              "https://i.ytimg.com/vi/b4b1cMVZOUU/hqdefault.jpg",
              "https://i.ytimg.com/vi/nJZcbidTutE/hqdefault.jpg",
            ]}
            width="30vw"
            height="50vh"
          />
        </div>

        {/* Section 2 */}
        <div className="w-screen flex flex-col md:flex-row md:justify-evenly justify-center items-center md:items-end md:pb-[5vh] gap-6">
          <HoverImageBox
            mainImage="https://source.unsplash.com/random/300x200"
            hoverImages={[
              "https://i.ytimg.com/vi/TvngY4unjn4/hqdefault.jpg",
              "https://i.ytimg.com/vi/b4b1cMVZOUU/hqdefault.jpg",
              "https://i.ytimg.com/vi/nJZcbidTutE/hqdefault.jpg",
            ]}
            width="50vw"
            height="200px"
          />
        </div>

        {/* Section 3 */}
        <div className="w-screen flex flex-col md:flex-row md:justify-evenly justify-center items-center md:items-end md:p-[5vh] gap-6">
          <HoverImageBox
            mainImage="https://source.unsplash.com/random/300x200"
            hoverImages={[
              "https://i.ytimg.com/vi/TvngY4unjn4/hqdefault.jpg",
              "https://i.ytimg.com/vi/b4b1cMVZOUU/hqdefault.jpg",
              "https://i.ytimg.com/vi/nJZcbidTutE/hqdefault.jpg",
            ]}
            width="40vw"
            height="200px"
          />
          <HoverImageBox
            mainImage="https://source.unsplash.com/random/300x200"
            hoverImages={[
              "https://i.ytimg.com/vi/TvngY4unjn4/hqdefault.jpg",
              "https://i.ytimg.com/vi/b4b1cMVZOUU/hqdefault.jpg",
              "https://i.ytimg.com/vi/nJZcbidTutE/hqdefault.jpg",
            ]}
            width="40vw"
            height="200px"
          />
        </div>
      </div>
    </div>
  );
}

export default Page4;
