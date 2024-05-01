import React from "react";
import Cards from "./Cards";
import List from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-xl md:text-3xl">
            We're Delighted to Have You{" "}
            <span className="text-red-500">Here!!</span>
          </h1>
          <p className="mt-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors .
          </p>
          <div className="mt-6">
            <Link to="/">
              <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-green-600 duration-300 cursor-pointer">
                back
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4">
          {List.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
