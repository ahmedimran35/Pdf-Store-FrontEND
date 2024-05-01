import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="p-3">
        <div className="card w-86 bg-base-100 shadow-xl mt-6 mb-6 hover:scale-105 duration-200 dark:bg-gray-900 dark:text-gray-100 dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body  ">
            <h2 className={"card-title text-base"}>
              {item.name}
              <div className="badge badge-secondary bg-red-500 border-none  font-thin text-xs ">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">$ {item.price}</div>
              <div className="px-2 py-1 rounded-lg border-[2px] hover:bg-red-500 hover:text-white  cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
