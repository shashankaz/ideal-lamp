import { Link } from "@remix-run/react";

const tour = [
  "tokyo",
  "pattaya",
  "jakarta",
  "bangkok",
  "kuala-lumpur",
  "langkawi",
  "dubai",
  "katamandu",
];

const InternationalTour = () => {
  return (
    <div className="min-h-screen">
      <div className="h-72 relative">
        <img
          src="/common.jpg"
          alt="Cover"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <h1 className="text-4xl md:text-5xl cinzel font-semibold uppercase text-center text-gray-100">
            International Tour
          </h1>
        </div>
      </div>
      <div className="px-4 sm:px-8 py-10 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {tour.map((city, index) => (
            <Card key={index} data={city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternationalTour;

const Card = ({ data }) => {
  return (
    <Link to={`/tour/${data}`}>
      <figure className="h-40 md:h-48 rounded-lg shadow-lg overflow-hidden relative transition-transform transform hover:scale-105 duration-200">
        <img
          src={`/international/${data}1.jpg`}
          alt="A description of the image's content"
          className="h-3/4 w-full object-cover"
        />
        <h1 className="text-xl cinzel font-semibold capitalize flex items-center justify-center h-1/4">
          {data.split("-").join(" ")}
        </h1>
      </figure>
    </Link>
  );
};
