import Slider from "react-slick";
import { SliderItemProps } from "../types";
import { ChangeEvent,useRef, useState } from "react";

const sliderItems = [
    {
        id:1,
        year:"2024",
        imagePath:"public/2024.webp",
        title:"Expansion Into Renewable Energy",
        desc:"Nasir Group launches its renewable energy division, focusing on solar and wind power projects across the country."
    },
    {
        id:2,
        year:"2022",
        imagePath:"public/2022.webp",
        title:"Digital Transformation Initiative",
        desc:"Implementation of group-wide digital transformation strategy, enhancing operational efficiency and customer experience."
    },
    {
        id:3,
        year:"2019",
        imagePath:"public/2019.webp",
        title:"Expansion Into Renewable Energy",
        desc:"Nasir Group launches its renewable energy division, focusing on solar and wind power projects across the country."
    },
    {
        id:4,
        year:"2017",
        imagePath:"public/2017.webp",
        title:"Expansion Into Renewable Energy",
        desc:"Nasir Group launches its renewable energy division, focusing on solar and wind power projects across the country."
    },
    {
        id:5,
        year:"2014",
        imagePath:"public/2014.webp",
        title:"Expansion Into Renewable Energy",
        desc:"Nasir Group launches its renewable energy division, focusing on solar and wind power projects across the country."
    },
    {
        id:6,
        year:"2012",
        imagePath:"public/2012.webp",
        title:"Expansion Into Renewable Energy",
        desc:"Nasir Group launches its renewable energy division, focusing on solar and wind power projects across the country."
    },
]

function SliderItem({id,title,year,imagePath,desc}:SliderItemProps){
    return(
        <div>
            <div className="flex">
                <div>
                    <h1>{year}</h1>
                </div>
                <div className="grid">
                    <div>
                        <p>{imagePath}</p>
                    </div>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default function ResponsiveSlider(){
  let sliderRef = useRef<Slider>(null);
  let [sliderIndex, setIndex] = useState(0);  
  const [updateCount,setCount] = useState(0);
  let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        afterChange:() => setCount((prev) => prev + 1),
        beforeChange:(current:number,next:number) => setIndex(next),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots:false,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false
            }
          },
        ]
    };
    
    function sliderFunction(e:ChangeEvent<HTMLInputElement>){
      if(sliderRef){
        sliderRef.current?.slickGoTo(Number(e.target.value));
      }
    }
    return(
        <div className="slider-container border border-black col-span-10 col-start-2">  
            <input onChange={ e => sliderFunction(e) } type="range" min={1} max={6} value={sliderIndex} />
            <Slider ref={sliderRef} {...settings}>
              {
                sliderItems.map((item) => (
                  <SliderItem key={item.id} {...item} />
                ))
              }
            </Slider>
        </div>
    )
}