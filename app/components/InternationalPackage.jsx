import { Link } from "@remix-run/react";

const InternationalPackage = () => {
  return (
    <div id="foreign" className="px-4 sm:px-8 py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl cinzel uppercase font-semibold text-center pb-8">
        Your Dream Vacation Abroad!
      </h1>
      <div className="flex flex-col md:flex-row h-[500px] gap-4 md:gap-6">
        <div className="w-full md:w-2/3 h-2/3 md:h-full flex flex-col gap-4 md:gap-6">
          <Link
            to={`/tour/kathmandu`}
            className="h-1/2 shadow-md hover:shadow-lg transition-shadow relative rounded-md overflow-hidden"
          >
            <img
              src="/tour/kathmandu.jpg"
              alt="Kathmandu cityscape with temples and mountains"
              className="w-full h-full object-cover"
            />
            <h1 className="absolute bottom-0 w-full px-3 text-center josefin backdrop-blur-md bg-black/50 text-gray-100 py-1">
              Kathmandu
            </h1>
          </Link>
          <div className="h-1/2 flex gap-4 md:gap-6">
            <Link
              to={`/tour/tokyo`}
              className="w-1/2 shadow-md hover:shadow-lg transition-shadow relative rounded-md overflow-hidden"
            >
              <img
                src="/tour/tokyo.jpg"
                alt="View of Tokyo Tower and city skyline"
                className="w-full h-full object-cover"
              />
              <h1 className="absolute bottom-0 w-full px-3 text-center josefin backdrop-blur-md bg-black/50 text-gray-100 py-1">
                Tokyo
              </h1>
            </Link>
            <Link
              to={`/tour/dubai`}
              className="w-1/2 shadow-md hover:shadow-lg transition-shadow relative rounded-md overflow-hidden"
            >
              <img
                src="/tour/dubai.jpg"
                alt="Dubai city skyline with Burj Khalifa"
                className="w-full h-full object-cover"
              />
              <h1 className="absolute bottom-0 w-full px-3 text-center josefin backdrop-blur-md bg-black/50 text-gray-100 py-1">
                Dubai
              </h1>
            </Link>
          </div>
        </div>
        <Link
          to={`/tour/bangkok`}
          className="md:w-1/3 h-1/3 md:h-full shadow-md hover:shadow-lg transition-shadow relative rounded-md overflow-hidden"
        >
          <img
            src="/tour/bangkok.jpg"
            alt="Scenic view of Kathmandu with mountains in the background"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute bottom-0 w-full px-3 text-center josefin backdrop-blur-md bg-black/50 text-gray-100 py-1">
            Bangkok
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default InternationalPackage;
