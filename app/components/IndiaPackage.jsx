import { Link } from "@remix-run/react";

const IndiaPackage = () => {
  return (
    <section id="india" className="bg-slate-200">
      <div className="px-4 sm:px-8 py-20 max-w-7xl mx-auto">
        <h1 className="text-3xl cinzel uppercase font-semibold text-center pb-8">
          Your Indian Adventure Awaits!
        </h1>

        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="md:w-1/2 flex gap-4 md:gap-6">
              <figure className="w-1/2 h-40 md:h-60 relative shadow-md hover:shadow-lg transition-shadow rounded-md overflow-hidden">
                <Link to={`/india-tour/north-india`}>
                  <img
                    src="/tour/north-india.jpg"
                    alt="North India"
                    className="w-full h-full object-cover"
                  />
                </Link>
                <figcaption className="absolute bottom-0 w-full px-3 text-center josefin backdrop-blur-md bg-black/50 text-gray-100 py-1">
                  North India
                </figcaption>
              </figure>

              <figure className="w-1/2 h-40 md:h-60 relative shadow-md hover:shadow-lg transition-shadow rounded-md overflow-hidden">
                <Link to={`/india-tour/south-india`}>
                  <img
                    src="/tour/south-india.jpg"
                    alt="South India"
                    className="w-full h-full object-cover"
                  />
                </Link>
                <figcaption className="absolute bottom-0 w-full px-3 text-center josefin backdrop-blur-md bg-black/50 text-gray-100 py-1">
                  South India
                </figcaption>
              </figure>
            </div>

            <figure className="md:w-1/2 h-40 md:h-60 relative shadow-md hover:shadow-lg transition-shadow rounded-md overflow-hidden">
              <Link to={`/india-tour/andaman-and-nicobar`}>
                <img
                  src="/tour/andaman-and-nicobar.jpg"
                  alt="Central India"
                  className="w-full h-full object-cover"
                />
              </Link>
              <figcaption className="absolute bottom-0 w-full px-3 text-center josefin backdrop-blur-md bg-black/50 text-gray-100 py-1">
                Andaman and Nicobar
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
            <figure className="md:w-1/2 h-40 md:h-60 relative shadow-md hover:shadow-lg transition-shadow rounded-md overflow-hidden">
              <Link to={`/india-tour/north-east-india`}>
                <img
                  src="/tour/north-east-india.jpg"
                  alt="North East India"
                  className="w-full h-full object-cover"
                />
              </Link>
              <figcaption className="absolute bottom-0 w-full px-3 text-center josefin backdrop-blur-md bg-black/50 text-gray-100 py-1">
                North East India
              </figcaption>
            </figure>

            <div className="md:w-1/2 flex gap-4 md:gap-6">
              <figure className="w-1/2 h-40 md:h-60 relative shadow-md hover:shadow-lg transition-shadow rounded-md overflow-hidden">
                <Link to={`/india-tour/east-india`}>
                  <img
                    src="/tour/east-india.jpg"
                    alt="East India"
                    className="w-full h-full object-cover"
                  />
                </Link>
                <figcaption className="absolute bottom-0 w-full px-3 text-center josefin backdrop-blur-md bg-black/50 text-gray-100 py-1">
                  East India
                </figcaption>
              </figure>

              <figure className="w-1/2 h-40 md:h-60 relative shadow-md hover:shadow-lg transition-shadow rounded-md overflow-hidden">
                <Link to={`/india-tour/west-india`}>
                  <img
                    src="/tour/west-india.jpg"
                    alt="West India"
                    className="w-full h-full object-cover"
                  />
                </Link>
                <figcaption className="absolute bottom-0 w-full px-3 text-center josefin backdrop-blur-md bg-black/50 text-gray-100 py-1">
                  West India
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaPackage;
