import { useRef } from "react";

const HorizontalCards = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const distance = direction === "left" ? -300 : 300; // Sesuaikan jarak scroll jika diperlukan
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <div
      className="text-white ml-[5vw] mr-[5vw]"
      style={{ fontFamily: "Lato" }}
    >
      <div className="relative mb-5 text-[32px] w-full">
        <label>Melanjutkan Tonton Film</label>
        <div className="absolute z-30 flex justify-between -left-6 -right-6 -bottom-32">
          <span
            className="bg-[#2F3334] rounded-full cursor-pointer text-md inline-flex items-center justify-center w-12 h-12"
            onClick={() => scroll("left")}
          >
            &larr;
          </span>

          <span
            className="bg-[#2F3334] rounded-full cursor-pointer text-md inline-flex items-center justify-center w-12 h-12"
            onClick={() => scroll("right")}
          >
            &rarr;
          </span>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap w-full relative justify-between flex gap-[24px]"
      >
        <div className="flex-shrink-0 relative">
          <img
            src="./src/assets/dont-look-up.png"
            alt="dont-look-up"
            className="w-[302px] h-[162px] inline-block rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent rounded-lg z-10"></div>
          <div className="flex content-center justify-between w-[286px] absolute bottom-2 left-2 text-white z-20">
            <p>{`Don't Look Up`}</p>
            <p>&#9733; 4/5</p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src="./src/assets/the-batman.png"
            alt="the-batman"
            className="w-[302px] h-[162px] inline-block rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent rounded-lg z-10"></div>
          <div className="flex content-center justify-between w-[286px] absolute bottom-2 left-2 text-white z-20">
            <p>The Batman</p>
            <p>&#9733; 4.5/5</p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src="./src/assets/blue-lock.png"
            alt="blue-lock"
            className="w-[302px] h-[162px] inline-block rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent rounded-lg z-10"></div>
          <div className="flex content-center justify-between w-[286px] absolute bottom-2 left-2 text-white z-20">
            <p>Blue Lock</p>
            <p>&#9733; 3/5</p>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src="./src/assets/a-man-called-otto.png"
            alt="a-man-called-otto"
            className="w-[302px] h-[162px] inline-block rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent rounded-lg z-10"></div>
          <div className="flex content-center justify-between w-[286px] absolute bottom-2 left-2 text-white z-20">
            <p>A Man Called Otto</p>
            <p>&#9733; 5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
