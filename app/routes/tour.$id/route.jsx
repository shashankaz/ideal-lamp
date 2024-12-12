import { useState } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { CiCloudMoon, CiSun } from "react-icons/ci";
import data from "../../data/tour.json";

const IndiaTour = () => {
  const params = useLoaderData();

  const [currentImage, setCurrentImage] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const tour = data.find((tour) => tour.slug === params.id);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % tour.src.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + tour.src.length) % tour.src.length);
  };

  if (!tour) {
    return (
      <div className="min-h-screen w-full relative">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <img
            src="/common.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10"></div>
        <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0">
          <h1 className="text-5xl font-semibold cinzel text-gray-100 uppercase">
            Tour not found
          </h1>
          <Link to="/">
            <button className="px-4 py-2 mt-6 capitalize bg-teal-500 hover:bg-teal-600 transition-colors text-gray-100 rounded-md">
              Go back home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <div className="relative h-[50vh] md:h-[80vh] w-full flex items-center justify-center">
        <button
          onClick={prevImage}
          className="absolute z-10 left-4 text-gray-100 text-2xl sm:text-3xl md:text-4xl flex items-center justify-center p-2 bg-black/50 w-12 sm:w-14 md:w-16 rounded-full focus:outline-none"
        >
          <BsArrowLeft />
        </button>

        <div className="relative h-full w-full">
          <img
            src={tour.src[currentImage]}
            alt="tour"
            className="object-cover h-full w-full rounded-lg"
          />
          <div className="h-full w-full bg-black/30 absolute top-0 left-0 right-0 bottom-0"></div>
          <h1 className="absolute text-3xl sm:text-4xl md:text-5xl josefin text-center font-semibold uppercase text-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {tour.city}
          </h1>
        </div>

        <button
          onClick={nextImage}
          className="absolute z-10 right-4 text-gray-100 text-2xl sm:text-3xl md:text-4xl flex items-center justify-center p-2 bg-black/50 w-12 sm:w-14 md:w-16 rounded-full focus:outline-none"
        >
          <BsArrowRight />
        </button>
      </div>
      <div className="px-4 sm:px-8 max-w-7xl mx-auto mt-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-6">
            <p className="text-gray-600 flex gap-1 items-center">
              <IoLocationSharp size={22} /> {tour.country.split("_").join(" ")}
            </p>
            <p className="text-3xl font-semibold">₹ {tour.price}</p>
          </div>
          <div>
            <Link to="/#enquire">
              <button className="px-6 py-2 w-fit uppercase bg-teal-500 text-gray-100 font-semibold rounded-md">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <h1 className="text-3xl font-semibold mt-6">{tour.title}</h1>
        <div className="flex items-center justify-between my-8 py-4 border-t-2 border-b-2">
          <div className="flex items-center gap-1">
            <LiaHotelSolid size={20} />{" "}
            <p>
              {tour.hotel_names.split(",").length}
              {tour.hotel_names.split(",").length > 1 ? " Hotels" : " Hotel"}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <CiSun size={20} /> <p>2 Days</p>
          </div>
          <div className="flex items-center gap-1">
            <CiCloudMoon size={20} /> <p>3 Nights</p>
          </div>
        </div>
        <h1 className="text-3xl font-semibold py-6">Description</h1>
        <p className={`transition-all ${readMore ? "" : "line-clamp-2"}`}>
          {tour.description}
        </p>
        <button
          onClick={() => setReadMore((prev) => !prev)}
          className="mt-4 px-6 py-2 border-2 border-teal-500 font-semibold rounded-md text-sm"
        >
          {readMore ? "Read Less" : "Read More"}
        </button>
        <h1 className="text-2xl font-semibold py-6">Partner Hotels</h1>
        <ul>
          {tour.hotel_names.split(",").map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="px-4 sm:px-8 max-w-7xl mx-auto pt-20 pb-10">
        <h1 className="text-3xl uppercase font-semibold text-center pb-8">
          You might also like...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {data.slice(0, 4).map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndiaTour;

const Card = ({ data }) => {
  return (
    <div className="h-[360px] md:h-[450px] shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden">
      <div className="h-1/2">
        <img
          src={data.src[0]}
          alt="Cover"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-1/2 p-4 flex flex-col justify-between">
        <h1 className="line-clamp-1 text-base sm:text-lg md:text-xl font-semibold uppercase">
          {data.title}
        </h1>
        <p className="line-clamp-3 text-sm sm:text-base">{data.description}</p>
        <div className="flex justify-between gap-10">
          <Link
            to="/#enquire"
            className="py-2 w-1/2 text-sm bg-orange-200 rounded-lg font-semibold text-center"
          >
            Book Now
          </Link>
          <Link
            to={`/tour/${data.slug}`}
            className="py-2 w-1/2 text-sm bg-orange-200 rounded-lg font-semibold text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export const loader = async ({ params }) => {
  return params;
};
