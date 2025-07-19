import React from "react";

function Page3() {
  return (
    <div>
      <div className="w-screen h-[100vh] flex bg-[rgb(86,84,84)] text-white md:bg-white md:text-black">
        <div className="w-full h-fit flex flex-col items-start justify-start px-10 py-20">
          <svg
            className="o-ui-arrow mb-6 w-10 h-10 md:w-16 md:h-16"
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

          <div className="text-2xl md:text-3xl pl-10 w-full md:w-[30vw]">
            Web & mobile / UI&Ux / Branding / Front-end Development
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
