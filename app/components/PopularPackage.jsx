import { Link } from "@remix-run/react";

const packageList = [
  {
    title: "Honeymoon Escapes",
    slug: "honeymoon-escapes",
    imgSrc: "/popular/honeymoon.jpg",
    alt: "Romantic couple enjoying a sunset on a beach",
  },
  {
    title: "Adventure Tours",
    slug: "adventure-tours",
    imgSrc: "/popular/adventure.jpg",
    alt: "Person hiking through rugged mountains",
  },
  {
    title: "Pilgrimage Tours",
    slug: "pilgrimage-tours",
    imgSrc: "/popular/pilgrimage.jpg",
    alt: "Pilgrims walking to a sacred temple",
  },
  {
    title: "Family Vacations",
    slug: "family-vacations",
    imgSrc: "/popular/family.jpg",
    alt: "Family enjoying a thrilling outdoor adventure together",
  },
];

const PopularPackage = () => {
  return (
    <div id="popular" className="px-4 sm:px-8 max-w-7xl mx-auto py-20">
      <h1 className="text-3xl cinzel uppercase font-bold text-center pb-8">
        Top Destinations, Top Packages!
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {packageList.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularPackage;

const Card = ({ data }) => {
  return (
    <Link
      to={`/package/${data.slug}`}
      className="w-full h-52 md:h-72 relative shadow-md hover:shadow-lg transition-shadow rounded-md overflow-hidden"
    >
      <img
        src={data.imgSrc}
        alt={data.alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40"></div>
      <h1 className="absolute top-1/4 md:top-1/2 -translate-y-1/2 left-0 right-0 text-center w-2/3 md:w-full mx-auto text-gray-100">
        <p className="text-xl text-center josefin font-bold">
          {data.title}
        </p>
      </h1>
    </Link>
  );
};
