import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HoverImageBox = ({
  mainImage,
  hoverImages = [],
  width = "100vw",
  height = "50vh",
  mdWidth = "40vw",
  mdHeight = "90vh",
  link = "#",
}) => {
  const boxRef = useRef(null);
  const hoverBoxRef = useRef(null);
  const hoverImgRef = useRef(null);
  const intervalRef = useRef(null);
  const indexRef = useRef(0);
  const mainImgRef = useRef(null);

  // ✅ responsive width and height state
  const [boxStyle, setBoxStyle] = useState({ width, height });

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 768) {
        setBoxStyle({ width: mdWidth, height: mdHeight });
      } else {
        setBoxStyle({ width, height });
      }
    };

    updateSize(); // set on mount
    window.addEventListener("resize", updateSize); // update on resize

    return () => window.removeEventListener("resize", updateSize);
  }, [width, height, mdWidth, mdHeight]);

  // Scroll animation
  useGSAP(() => {
    if (!mainImgRef.current) return;

    gsap.to(mainImgRef.current, {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 150%",
        end: "bottom top",
        scrub: 3,
      },
    });
  }, []);

  // Hover animation
  useGSAP(() => {
    const box = boxRef.current;
    const hoverBox = hoverBoxRef.current;
    const hoverImg = hoverImgRef.current;

    const showHover = () => {
      if (!hoverBox || !hoverImg || hoverImages.length === 0) return;

      indexRef.current = 0;
      hoverImg.src = hoverImages[indexRef.current];

      gsap.to(hoverBox, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      intervalRef.current = setInterval(() => {
        indexRef.current = (indexRef.current + 1) % hoverImages.length;
        hoverImg.style.opacity = 0;
        setTimeout(() => {
          hoverImg.src = hoverImages[indexRef.current];
          hoverImg.style.opacity = 1;
        }, 300);
      }, 1000);
    };

    const hideHover = () => {
      gsap.to(hoverBox, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.inOut",
      });
      clearInterval(intervalRef.current);
    };

    const moveHover = (e) => {
      gsap.to(hoverBox, {
        x: e.clientX + 20,
        y: e.clientY + 20,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    box.addEventListener("mouseenter", showHover);
    box.addEventListener("mouseleave", hideHover);
    box.addEventListener("mousemove", moveHover);

    return () => {
      box.removeEventListener("mouseenter", showHover);
      box.removeEventListener("mouseleave", hideHover);
      box.removeEventListener("mousemove", moveHover);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        ref={boxRef}
        className="image-container group"
        style={{
          ...boxStyle,
          overflow: "hidden",
          borderRadius: "10px",
          cursor: "pointer",
          position: "relative",
          zIndex: 1,
          boxShadow: "0 5px 15px rgba(0,0,0,0.4)",
        }}
      >
        <img
          ref={mainImgRef}
          src={mainImage}
          alt="main"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </a>

      <div
        ref={hoverBoxRef}
        className="hover-box"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "30vw",
          height: "40vh",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          padding: "12px",
          pointerEvents: "none",
          opacity: 0,
          transform: "scale(0.9)",
          zIndex: 999,
        }}
      >
        <img
          ref={hoverImgRef}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            objectFit: "cover",
            transition: "opacity 0.5s ease",
          }}
          src=""
          alt="hover"
        />
      </div>
    </>
  );
};

export default HoverImageBox;
