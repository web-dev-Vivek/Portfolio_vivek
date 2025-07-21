import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HoverImageBox from "../components/image.jsx";

import Img1 from "../assets/img1.jpeg";
import Art from "../assets/art.jpg";
import img3 from "../assets/todoist.jpg";
import img4 from "../assets/current.jpg";

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
              trigger: img.parentElement,
              start: "top 160%",
              end: "bottom bottom",
              scrub: 2,
              markers: false,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="w-screen md:pt-40 bg-[rgb(242,242,242)]" ref={containerRef}>
      {/* Title */}
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
      </div>

      {/* Image Sections */}
      <div className="space-y-20 md:px-4">
        <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center md:items-end gap-6">
          <HoverImageBox
            mainImage={Img1}
            hoverImages={[
              "https://i.ytimg.com/vi/TvngY4unjn4/hqdefault.jpg",
              "https://i.ytimg.com/vi/b4b1cMVZOUU/hqdefault.jpg",
              "https://i.ytimg.com/vi/nJZcbidTutE/hqdefault.jpg",
            ]}
            width="90vw"
            height="50vh"
            mdWidth="40vw"
            mdHeight="100vh"
            link="https://web-dev-vivek.github.io/Netflix_clone/netflix1.html"
          />
          <HoverImageBox
            mainImage={Art}
            hoverImages={[
              "https://i.ytimg.com/vi/TvngY4unjn4/hqdefault.jpg",
              "https://i.ytimg.com/vi/b4b1cMVZOUU/hqdefault.jpg",
              "https://i.ytimg.com/vi/nJZcbidTutE/hqdefault.jpg",
            ]}
            width="90vw"
            height="40vh"
            mdWidth="30vw"
            mdHeight="60vh"
            link="https://theartisticwing.vercel.app/"
          />
        </div>

        <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center md:items-end gap-6">
          <HoverImageBox
            mainImage={img3}
            hoverImages={[
              "https://i.ytimg.com/vi/TvngY4unjn4/hqdefault.jpg",
              "https://i.ytimg.com/vi/b4b1cMVZOUU/hqdefault.jpg",
              "https://i.ytimg.com/vi/nJZcbidTutE/hqdefault.jpg",
            ]}
            width="90vw"
            height="50vh"
            mdWidth="50vw"
            mdHeight="90vh"
            link="https://web-dev-vivek.github.io/Today-Todoist/todist.html"
          />
        </div>

        <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center md:items-end gap-6 pb-[5vh]">
          <HoverImageBox
            mainImage={img4}
            hoverImages={[
              "https://i.ytimg.com/vi/TvngY4unjn4/hqdefault.jpg",
              "https://i.ytimg.com/vi/b4b1cMVZOUU/hqdefault.jpg",
              "https://i.ytimg.com/vi/nJZcbidTutE/hqdefault.jpg",
            ]}
            width="90vw"
            height="40vh"
            mdWidth="40vw"
            mdHeight="60vh"
            link="https://portfolio-vivek-psi.vercel.app/"
          />

          <HoverImageBox
            mainImage={Img1}
            hoverImages={[
              "https://i.ytimg.com/vi/TvngY4unjn4/hqdefault.jpg",
              "https://i.ytimg.com/vi/b4b1cMVZOUU/hqdefault.jpg",
              "https://i.ytimg.com/vi/nJZcbidTutE/hqdefault.jpg",
            ]}
            width="90vw"
            height="35vh"
            mdWidth="30vw"
            mdHeight="50vh"
            link="https://example.com/project4"
          />
        </div>
      </div>
    </div>
  );
}

export default Page4;
