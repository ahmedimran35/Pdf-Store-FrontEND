import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from "react";
import List from "../../public/list.json";
import Cards from "./Cards";

function FreeBook() {
  const filterData = List.filter((item) => item.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="text-xl font-semibold">Free Offered Courses</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old
        </p>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default FreeBook;
