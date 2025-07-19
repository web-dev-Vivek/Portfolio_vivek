import React from "react";

function Page4() {
  return (
    <div>
      <div className="w-screen h-[100vh] flex justify-center items-center bg-[rgb(242,242,242)]">
        <div className="w-screen flex justify-evenly items-center h-40 ">
          <div
            style={{ fontFamily: "Oswald, sans-serif" }}
            className="md:text-8xl font-bold"
          >
            FEAT WO
            <span
              className="text-9xl"
              style={{
                fontFamily: "Bubblegum Sans, cursive",
                color: "rgb(20, 207, 147)",
              }}
            >
              r
            </span>
            KS
          </div>
          <div>
            <svg
              className="o-ui-arrow mb-6 w-10 h-10 md:w-16 rotate-90 md:h-16"
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
      </div>
    </div>
  );
}

export default Page4;
