import { Form, useNavigation } from "@remix-run/react";
import { useRef, useEffect } from "react";

const Enquiry = () => {
  const navigation = useNavigation();
  const formRef = useRef(null);

  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (navigation.state === "idle" && formRef.current) {
      formRef.current.reset();
    }
  }, [navigation.state]);

  return (
    <div id="enquire" className="px-4 sm:px-8 py-10 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-[#1d9cb27b] to-[#ffffff] p-6 sm:p-8 md:p-10 rounded-2xl">
        <h1 className="text-3xl cinzel uppercase font-semibold text-center pb-8">
          Enquiry
        </h1>
        <Form method="post" className="flex flex-col" ref={formRef}>
          <fieldset className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 border bg-gray-50 rounded focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone">
                Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="p-2 border bg-gray-50 rounded focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 border bg-gray-50 rounded focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="package">
                Package <span className="text-red-500">*</span>
              </label>
              <select
                name="package"
                id="package"
                className="p-2 border bg-gray-50 rounded focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select Package
                </option>
                <option value="indian">Indian</option>
                <option value="international">International</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="traveldate">
                Travel Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="traveldate"
                id="traveldate"
                className="p-2 border bg-gray-50 rounded focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 border rounded mt-6 md:mt-8 md:w-40 bg-sky-500 text-gray-100 font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </fieldset>
        </Form>
      </div>
    </div>
  );
};

export default Enquiry;
