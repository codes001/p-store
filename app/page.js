"use client";
import Image from "next/image";
import Slider from "react-slick";

import { HOME_HERO_DATAS } from "./utils/data";
// import y from "../public/y.jpg";
// import z from "../public/z.jpg";
// import block from "../public/block.jpg";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="slider-container h-[2000px]">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
      ;
    </>
  );
}

{
  /* {HOME_HERO_DATAS.map((item, index) => (
          <div key={index}>
          
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
          </div>
        ))} */
}
