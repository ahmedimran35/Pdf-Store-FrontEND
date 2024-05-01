import React from "react";
import banner from "../../public/book1.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-8">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold ">
              Hello, Welcome here to learn somethings{" "}
              <span className="text-red-500"> new everyday !!</span>
            </h1>
            <p className="text-xl">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
            </div>{" "}
            {/* email input */}
            <button className="btn bg-red-500 text-white hover:bg-green-600">
              Subscribe
            </button>
          </div>
        </div>
        <div className=" order-1 w-full md:w-1/2">
          <img src={banner} className="w-92 h-92 mt-10" alt="" />
        </div>
      </div>{" "}
      {/* parent container */}
    </>
  );
}

export default Banner;
