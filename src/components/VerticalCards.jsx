import { useRef } from "react";
import suzume from "../assets/suzume.png";
import jurassicWorld from "../assets/jurassic-world.png";
import sonic from "../assets/sonic.png";
import allOfUs from "../assets/all-of-us.png";
import bigHero from "../assets/big-hero.png";

const VerticalCards = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const distance = direction === "left" ? -300 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <div
      className="text-white ml-[5vw] mr-[5vw] mt-20"
      style={{ fontFamily: "Lato" }}
    >
      <div className="relative mb-5 text-[20px] md:text-[32px] w-full">
        <label htmlFor="">Top Rating Film dan Series Hari Ini</label>
        <div className="absolute z-30 flex justify-between -left-6 -right-6 -bottom-56">
          <span
            className="hidden bg-[#2F3334] outline outline-[#E7E3FC] outline-1 rounded-full cursor-pointer text-md md:inline-flex items-center justify-center w-12 h-12"
            onClick={() => scroll("left")}
          >
            &larr;
          </span>

          <span
            className="hidden bg-[#2F3334] outline outline-[#E7E3FC] outline-1 rounded-full cursor-pointer text-md md:inline-flex items-center justify-center w-12 h-12"
            onClick={() => scroll("right")}
          >
            &rarr;
          </span>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap w-full relative flex right-0 justify-between gap-[24px]"
      >
        <div className="flex-shrink-0 relative">
          <img
            src={suzume}
            alt="suzume"
            className="w-[95.6px] h-[143.39] md:w-[234px] md:h-[365px] inline-block rounded-lg"
          />
          <div className="text-[6px] md:text-[14px] flex absolute top-2 left-2 text-white z-20 bg-[#0F1E93] px-3 py-1 rounded-full">
            <p>Episode Baru</p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src={jurassicWorld}
            alt="jurassic-world"
            className="w-[95.6px] h-[143.39] md:w-[234px] md:h-[365px] inline-block rounded-lg"
          />
          <div className="text-[6px] md:text-[14px] flex absolute top-2 left-2 text-white z-20 bg-[#0F1E93] px-3 py-1 rounded-full">
            <p>Episode Baru</p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src={sonic}
            alt="sonic"
            className="w-[95.6px] h-[143.39] md:w-[234px] md:h-[365px] inline-block rounded-lg"
          />
          <div className="text-[6px] md:text-[14px] flex absolute top-2 left-2 text-white z-20 bg-[#0F1E93] px-3 py-1 rounded-full">
            <p>Episode Baru</p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src={allOfUs}
            alt="all-of-us"
            className="w-[95.6px] h-[143.39] md:w-[234px] md:h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src={bigHero}
            alt="big-hero"
            className="w-[95.6px] h-[143.39] md:w-[234px] md:h-[365px] inline-block rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalCards;
