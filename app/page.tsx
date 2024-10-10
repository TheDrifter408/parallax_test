'use client';
import Image from "next/image";
import HistoryImg from "/public/history-image.jpg";
import Container from "./components/Container";
import Header from "./components/Header";
import  HomeSlider from "./components/HomeSlider";
import Parallax from "./components/Parallax";
import ResponsiveSlider from "./components/ResponsiveSlider";

export default function Home() {
  
  return (
    <>
    <Container>
      <>
        <Header />
        <article className="w-[95%] col-span-12 grid grid-cols-12 grid-rows-2 mx-auto overflow-y-visible">
          <h1 className="col-span-6 row-span-1 text-5xl font-extrabold text-white text-pretty">Manufacturing Excellence Across Industries</h1>
          <HomeSlider />
        </article>
      </>
    </Container>
    <section className="bg-background-texture bg-gray-200/50 bg-no-repeat object-cover h-[140vh] grid grid-cols-12 items-start px-4">
      <h2 className="my-6 col-span-6 font-bold text-4xl text-blue-900">
        Surpassing expectations at every step
      </h2>
      <div className="col-span-12 grid grid-cols-subgrid gap-4">
        <h3 className="col-span-12 my-2 text-xl text-gray-600">
          Renowed for delivering high-quality products across diverse industries. Our unwavering commitment to innovation and sustainability drives to set new standards in every venture we undertake.
        </h3>
        <p className="col-span-12 my-2 text-gray-600">For over 30 years, Nasir Group of Industries stands as a beacon of excellence in the manufacturing has been developing solutions that have its identity in the projects it built.
        </p>
        <button className="col-span-5 bg-radial-gradient text-white p-3">Know More About Us</button>
      </div>
      <article className="col-span-12 grid grid-cols-subgrid bg-white text-blue-800 mt-6">
        <div className="p-6 col-span-7 border-r-[1px] border-gray-200">
          <h3 className="text-4xl font-bold">20+</h3>
          <h3 className="text-2xl">years of experience</h3>
        </div>
        <div className="p-6 col-span-5">
          <h3 className="text-4xl font-bold">11</h3>
          <h3 className="text-2xl">sister concerns we have</h3>
        </div>
        <div className="p-6 col-span-12 border-t-[1px] border-gray-200">
          <h3 className="text-4xl font-bold">45,000+</h3>
          <h3 className="text-2xl">employees nationwide</h3>
        </div>
      </article>
      <article className="col-span-12 grid grid-cols-subgrid">
        <Image className="col-span-12" src={HistoryImg} alt="history image" />
        <Parallax yValues={[750,-10,-20,-30]} className="col-span-12">
          <h1 className="text-blue-800/80 text-5xl font-extrabold tracking-widest">History</h1>
        </Parallax>
        <ResponsiveSlider />
      </article>
    </section>
    </>
    
  );
}
