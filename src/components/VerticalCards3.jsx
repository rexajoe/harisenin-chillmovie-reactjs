import { useRef } from "react";

const VerticalCards3 = () => {
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
      <div className="relative mb-5 text-[32px] w-full">
        <label htmlFor="">Rilis Baru</label>
        <div className="absolute z-30 flex justify-between -left-6 -right-6 -bottom-56">
          <span
            className="bg-[#2F3334] outline outline-[#E7E3FC] outline-1 rounded-full cursor-pointer text-md inline-flex items-center justify-center w-12 h-12"
            onClick={() => scroll("left")}
          >
            &larr;
          </span>

          <span
            className="bg-[#2F3334] outline outline-[#E7E3FC] outline-1 rounded-full cursor-pointer text-md inline-flex items-center justify-center w-12 h-12"
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
            src="./src/assets/missing.png"
            alt="missing"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
          <div className="flex absolute top-4 left-4 text-white z-20 bg-[#0F1E93] px-3 py-1 rounded-full">
            <p>Episode Baru</p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src="./src/assets/a-man-called-otto-portrait.png"
            alt="a-man-called-otto-portrait"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
          <div className="flex absolute top-4 left-4 text-white z-20 bg-[#0F1E93] px-3 py-1 rounded-full">
            <p>Episode Baru</p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src="./src/assets/little-mermaid.png"
            alt="little-mermaid"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
          <div className="flex absolute top-4 left-4 text-white z-20 bg-[#0F1E93] px-3 py-1 rounded-full">
            <p>Episode Baru</p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src="./src/assets/big-hero.png"
            alt="big-hero"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
          <div className="flex absolute text-center right-4 top-0 text-white z-20 bg-red-600 px-1 py-2 rounded-sm">
            <p>
              Top
              <br />
              10
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src="./src/assets/guardian-of-the-galaxy.png"
            alt="guardian-of-the-galaxy"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
          <div className="flex absolute text-center right-4 top-0 text-white z-20 bg-red-600 px-1 py-2 rounded-sm">
            <p>
              Top
              <br />
              10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCards3;
