import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HoverImageBox from "../components/image.jsx";

import Img1 from "../assets/img1.jpeg";
import Art from "../assets/art.jpg";
import img3 from "../assets/todoist.jpg";
import img4 from "../assets/current.jpg";
import N1 from "../assets/N1.png";
import N2 from "../assets/N2.png";
import N3 from "../assets/N3.png";
import N4 from "../assets/N4.png";
import N5 from "../assets/N5.png";
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import A4 from "../assets/A4.png";
import T1 from "../assets/T1.png";
import T2 from "../assets/T2.png";
import T3 from "../assets/T3.png";
import T4 from "../assets/T4.png";
import P1 from "../assets/P1.png";
import P2 from "../assets/P2.png";
import P3 from "../assets/P3.png";
import P4 from "../assets/P4.png";
import U1 from "../assets/U1.png";
import U2 from "../assets/U2.png";
import U3 from "../assets/U3.png";
import U4 from "../assets/U4.png";
import Burger from "../assets/Burger.jpg";
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
    <div
      className="w-screen md:pt-40 bg-[rgb(242,242,242)] group-hover:bg-red-600"
      ref={containerRef}
    >
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
            className="object-contain"
            mainImage={Img1}
            hoverImages={[N1, N2, N3, N4, N5]}
            width="90vw"
            height="50vh"
            mdWidth="40vw"
            mdHeight="100vh"
            link="https://web-dev-vivek.github.io/Netflix_clone/netflix1.html"
          />
          <HoverImageBox
            mainImage={Art}
            hoverImages={[A1, A2, A3, A4]}
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
            hoverImages={[T1, T2, T3, T4]}
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
            hoverImages={[P1, P2, P3, P4]}
            width="90vw"
            height="40vh"
            mdWidth="40vw"
            mdHeight="60vh"
            link="https://portfolio-vivek-psi.vercel.app/"
          />

          <HoverImageBox
            mainImage={Burger}
            hoverImages={[U1, U2, U3, U4]}
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
