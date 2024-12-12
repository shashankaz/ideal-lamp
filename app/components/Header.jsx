import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaSearch } from "react-icons/fa";
import data from "../data/tour.json";

const images = [
  { id: 1, src: "/header/cover_1.jpg" },
  { id: 2, src: "/header/cover_2.jpg" },
  { id: 3, src: "/header/cover_3.jpg" },
];

const message = ["Special !", "Memorable !", "Unforgettable !"];

const Header = () => {
  const [image, setImage] = useState(images[0].src);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setImage(images[currentIndex].src);
  }, [currentIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedSearch = search.trim().split(" ").join("-").toLowerCase();
    const tour = data.find((tour) =>
      tour.slug.toLowerCase().includes(formattedSearch)
    );
    navigate(`/tour/${tour.slug}`);
  };

  return (
    <div className="h-[80vh] md:h-[90vh] w-full relative">
      <div className="h-full w-full relative">
        <img src={image} alt="cover" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40"></div>
      </div>
      <div className="absolute top-0 left-0 right-0 text-gray-100 h-full px-4 sm:px-8 py-32 max-w-7xl mx-auto flex flex-col items-center justify-evenly md:justify-center">
        <h1 className="text-5xl md:text-6xl josefin font-bold text-center">
          Your Adventure Begins Here
        </h1>
        <p className="text-3xl md:text-4xl h-20 md:h-auto md:my-6 josefin font-medium w-2/3 text-center">
          Let's Make it <br className="flex md:hidden" />{" "}
          <Typewriter words={message} typeSpeed={100} loop={0} />
        </p>
        <form
          onSubmit={handleSubmit}
          className="rounded-full bg-black/30 backdrop-blur-md p-2 flex items-center"
        >
          <div className="flex items-center">
            <div className="px-3">
              <FaSearch />
            </div>
            <input
              id="destination"
              name="destination"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Destination"
              className="p-2 bg-transparent rounded-full outline-none w-44 md:w-96 josefin"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-2 ml-2 text-sm sm:text-base josefin font-semibold rounded-full bg-white text-black"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
