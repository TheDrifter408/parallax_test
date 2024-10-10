'use client';
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animate,scroll } from "motion";
import Parallax from "./Parallax";

export default function HomeSlider() {

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(ref.current){
        scroll(
            animate(ref.current,
                { y:[null,-25,-50,-75] },
                { offset:[0,0.5,0.75,1] },
            ),
        )
        }
  },[])

    const settings = {
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        dots:false,
        arrows:false,
    }

    return (
        <Parallax yValues={[null,-25,-50,-75]} className="row-start-2 col-span-12 row-span-1 bg-radial-gradient text-white text-xl overflow-hidden">
            <div className="slider-container p-8">
                <Slider {...settings}>
                    <div className="">
                        <p className="text-white z-10">Exemplefying leadership in manufacturing, this organization delivers high-quality products across various sectors with a commitment to innovation and sustainability.</p>
                    </div>
                    <div className="">
                        <p className="text-white z-10">Exemplefying leadership in manufacturing, this organization delivers high-quality products across various sectors with a commitment to innovation and sustainability.</p>
                    </div>
                    <div className="">
                        <p className="text-white z-10">Exemplefying leadership in manufacturing, this organization delivers high-quality products across various sectors with a commitment to innovation and sustainability.</p>
                    </div>
                </Slider>
              </div>
              <button className="bg-white text-blue-800 p-4 m-8">Our Values</button>
        </Parallax>
    )
}