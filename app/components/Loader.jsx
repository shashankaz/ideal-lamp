import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  useGSAP(() => {
    gsap.from("#loader h1", {
      opacity: 0,
      delay: 0.5,
      duration: 1,
    });

    gsap.to("#loader", {
      top: "-100vh",
      delay: 1.5,
      duration: 2,
    });
  });

  return (
    <div
      id="loader"
      className="h-screen flex items-center justify-center bg-gradient-to-b from-[#175fab] to-[#3be06d] fixed top-0 left-0 right-0 bottom-0 z-50 px-4 sm:px-8"
    >
      <h1 className="text-5xl md:text-6xl cinzel w-full md:w-1/2 text-center font-semibold uppercase text-gray-100">
        Holiday Adventure Tour
      </h1>
    </div>
  );
};

export default Loader;
