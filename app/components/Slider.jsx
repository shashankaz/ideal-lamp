import { useState, useEffect, useRef } from "react";

const Slider = () => {
  const [isInView, setIsInView] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  return (
    <div className="px-4 sm:px-8 max-w-7xl mx-auto py-10">
      <div
        ref={sliderRef}
        className={`h-[80vh] w-full rounded-3xl overflow-hidden relative transform transition-transform duration-500 ${
          isInView ? "scale-100" : "scale-90"
        }`}
      >
        <video
          src="/slider.mp4"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="h-full w-full p-4 flex items-center justify-center bg-black/30 absolute top-0 left-0 right-0 bottom-0">
          <h1 className="text-3xl sm:text-5xl md:text-7xl josefin font-semibold text-gray-100 w-full sm:w-3/4 text-center">
            <span className="text-5xl sm:text-6xl md:text-7xl">Embark </span>
            on unforgettable journeys with our
            <span className="text-teal-300"> expertly crafted </span>
            travel packages.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
