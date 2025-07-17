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
        rotate: 5,
        duration: 3,
        scrollTrigger: {
          trigger: "#img1",
          start: "top 200%", // 🟢 early start
          end: "bottom bottom", // 🔴 end at full scroll
          scrub: 3,
          markers: true,
        },
        ease: "power1.out",
      });

      gsap.to("#img2", {
        rotate: 5,
        duration: 3,
        scrollTrigger: {
          trigger: "#img2",
          start: "top 200%",
          end: "bottom bottom",
          scrub: 3,
          markers: true,
        },
        ease: "power1.out",
      });

      gsap.to("#img3", {
        rotate: 5,
        duration: 3,
        scrollTrigger: {
          trigger: "#img3",
          start: "top 200%",
          end: "bottom bottom",
          scrub: 3,
          markers: true,
        },
        ease: "power1.out",
      });
    },
    { scope: container1 }
  );

  return (
    <div>
      <div
        ref={container1}
        className="w-screen md:flex-row  flex justify-center items-center"
      >
        <div className="md:w-[20vw] md:text-4xl">
          I am Vivek Jha, I create unconventional yet functional & visually
          pleasing interfaces for the mobile and web.
        </div>

        <div className="md:w-[70vw] md:h-full flex relative flex-row justify-center items-center gap-5 mt-10 mr-20">
          <div
            id="img1"
            className="md:w-[33vw] absolute -rotate-15 rounded-[50px] top-0 md:h-[90vh] object-cover overflow-hidden"
          >
            <img
              className="grayscale hover:grayscale-0 transition-all duration-1000"
              src={img3}
              alt=""
            />
          </div>

          <div
            id="img2"
            className="md:w-[33vw] absolute -rotate-10 rounded-[50px] top-10 right-30 md:h-[90vh] object-cover z-5 overflow-hidden"
          >
            <img
              className="grayscale hover:grayscale-0 transition-all duration-1000"
              src={img2}
              alt=""
            />
          </div>

          <div
            id="img3"
            className="md:w-[33vw] absolute -rotate-5 rounded-[50px] top-20 right-10 md:h-[90vh] z-10 object-cover overflow-hidden"
          >
            <img
              className="grayscale hover:grayscale-0 transition-all duration-1000"
              src={img1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
