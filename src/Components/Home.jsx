import React from "react";
import img from "../assets/img/hero.png"

const Home = () => {
  return (
    <>
      <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-primaryColor">
        {/* Content Section */}
        <div className=" space-y-4">
          <h1 className=" text-5xl font-semibold leading-tight text-DarkColor w-full lg:w-3/4">Discovering and Defining Your Own Fashion!</h1>
          <p className=" w-full lg:w-3/4 text-DarkColor font-medium">
            Each item is a carefully chosen masterpiece, promising not just
            fashion but a reflection of your unique style.
          </p>
          <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">Shop Now</button>
        </div>
        {/* image Section */}
        <div className=" bg-DarkColor p-5 mt-10 rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl">
          <img className=" -ml-5 -mb-5" width={600} src={img} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Home;
