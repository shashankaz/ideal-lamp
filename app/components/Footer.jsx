import { Link } from "@remix-run/react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800">
      <div className="flex items-center justify-between h-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <Link to="/" className="flex flex-col">
          <div className="w-20">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xs md:text-sm cinzel mt-1 text-gray-100 font-semibold">
            A Unit of Club Parkgate Vacation Pvt. Ltd
          </h2>
        </Link>
      </div>

      <div className="h-[1px] bg-gray-400"></div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 josefin text-gray-100 px-4 sm:px-8 py-10 max-w-7xl mx-auto">
        <ul className="space-y-3 text-sm">
          <li>
            <h2 className="text-lg font-semibold mb-4">Popular Destinations</h2>
          </li>
          <li>
            <Link to="/tour/manali">Manali</Link>
          </li>
          <li>
            <Link to="/tour/tirupati">Tirupati</Link>
          </li>
          <li>
            <Link to="/tour/puri">Puri</Link>
          </li>
          <li>
            <Link to="/tour/goa">Goa</Link>
          </li>
        </ul>

        <ul className="space-y-3 text-sm">
          <li>
            <h2 className="text-lg font-semibold mb-4">Best Travel Deals</h2>
          </li>
          <li>
            <Link to="/package/honeymoon-escapes">Honeymoon Escapes</Link>
          </li>
          <li>
            <Link to="/package/adventure-tours">Adventure Tours</Link>
          </li>
          <li>
            <Link to="/package/pilgrimage-tours">Pilgrimage Tours</Link>
          </li>
          <li>
            <Link to="/package/family-vacations">Family Vacations</Link>
          </li>
        </ul>

        <ul className="space-y-3 text-sm">
          <li>
            <h2 className="text-lg font-semibold mb-4">Company Information</h2>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <ul className="space-y-3 text-sm">
          <li>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          </li>
          <li>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              to="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on YouTube"
            >
              YouTube
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              X (formerly Twitter)
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-gray-900 text-gray-100">
        <div className="flex items-center text-sm px-4 sm:px-8 py-4 text-center sm:text-left max-w-7xl mx-auto">
          <p>Copyright © {year} CPV Adventure Holidays. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
