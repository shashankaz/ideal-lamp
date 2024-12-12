import { FaGlobe, FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const meta = () => {
  return [{ title: "Contact Us" }];
};

const Contact = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 max-w-7xl mx-auto pt-24 flex flex-col md:items-center justify-center">
      <div className="h-3/4 w-full flex flex-col md:flex-row gap-6 mb-6">
        <div className="hidden md:flex w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1334.28107825991!2d85.39269577966603!3d23.385708625448814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1733822623892!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            className="h-full w-full object-cover"
          ></iframe>
        </div>
        <div className="h-full w-full md:w-1/2 bg-gray-200 p-6 md:p-10">
          <h1 className="text-3xl cinzel">Contact Us</h1>
          <form action="" className="space-y-4 mt-8 cinzel">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="py-1 px-2 outline-none"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-xs font-semibold uppercase"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="py-1 px-2 outline-none"
                placeholder="Phone"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-xs font-semibold uppercase"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="py-1 px-2 outline-none resize-none"
                placeholder="Message"
                rows={4}
              ></textarea>
            </div>
            <button className="px-4 py-2 text-xs bg-blue-600 hover:bg-blue-700 transition-colors text-gray-100 rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
        <div className="w-full h-24 flex items-center gap-4 md:gap-2 text-sm">
          <div className="p-3 bg-blue-600 text-gray-100 rounded-full">
            <FaLocationArrow size={16} />
          </div>
          123 Main Street, New York, NY 10001
        </div>
        <div className="w-full h-24 flex items-center gap-4 md:gap-2 text-sm">
          <div className="p-3 bg-blue-600 text-gray-100 rounded-full">
            <FaPhone size={16} />
          </div>
          +91 9878976789
        </div>
        <div className="w-full h-24 flex items-center gap-4 md:gap-2 text-sm">
          <div className="p-3 bg-blue-600 text-gray-100 rounded-full">
            <MdEmail size={16} />
          </div>
          help@cpvadventureholidays.com
        </div>
        <div className="w-full h-24 flex items-center gap-4 md:gap-2 text-sm">
          <div className="p-3 bg-blue-600 text-gray-100 rounded-full">
            <FaGlobe size={16} />
          </div>
          cpvadventureholidays.com
        </div>
      </div>
    </div>
  );
};

export default Contact;
