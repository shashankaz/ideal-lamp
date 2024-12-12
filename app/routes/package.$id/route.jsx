import { Link, useLoaderData } from "@remix-run/react";

const IndiaTourDestination = () => {
  const params = useLoaderData();

  let city = [];

  if (params.id === "honeymoon-escapes") {
    city = [
      "agra",
      "bangkok",
      "dalhousie",
      "darjeeling",
      "gangtok",
      "goa",
      "jaipur",
      "kanyakumari",
      "kufri",
      "manali",
      "munnar",
      "mussooire",
      "shimla",
      "silvassa",
      "srinagar",
      "udaipur",
    ];
  } else if (params.id === "adventure-tours") {
    city = [
      "alibaug",
      "dalhousie",
      "darjeeling",
      "gangtok",
      "goa",
      "kanyakumari",
      "manali",
      "kufri",
      "munnar",
      "mussooire",
      "rishikesh",
      "shimla",
      "silvassa",
      "srinagar",
      "thekkady",
      "udaipur",
    ];
  } else if (params.id === "pilgrimage-tours") {
    city = [
      "amritsar",
      "haridwar",
      "mahabaleshwar",
      "puri",
      "rishikesh",
      "shirdi",
      "tirupati",
      "tirvandrum",
      "vaishno-devi",
    ];
  } else if (params.id === "family-vacations") {
    city = [
      "agra",
      "dalhousie",
      "darjeeling",
      "gangtok",
      "goa",
      "kanyakumari",
      "kufri",
      "manali",
      "munnar",
      "mussooire",
      "rishikesh",
      "shimla",
      "silvassa",
      "srinagar",
      "tirvandrum",
      "udaipur",
    ];
  }

  return (
    <div className="min-h-screen">
      <div className="h-72 relative">
        <img
          src={`/popular/${params.id.split("-")[0]}.jpg`}
          alt="Cover"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <h1 className="text-4xl md:text-5xl cinzel font-semibold uppercase text-center text-gray-100">
            {params.id.split("-").join(" ")}
          </h1>
        </div>
      </div>
      <div className="px-4 sm:px-8 py-10 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {city.map((city, index) => (
            <Card key={index} data={city} loc={params.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndiaTourDestination;

const Card = ({ data, loc }) => {
  return (
    <Link to={`/tour/${data}`}>
      <figure className="h-40 md:h-48 rounded-lg shadow-lg overflow-hidden relative transition-transform transform hover:scale-105 duration-200">
        <img
          src={`/${loc.split("-")[0]}/${data}.jpg`}
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

export const loader = async ({ params }) => {
  return params;
};
