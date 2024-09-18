const VerticalCards = () => {
  return (
    <div
      className="text-white ml-[5vw] mr-[5vw] mt-20"
      style={{ fontFamily: "Lato" }}
    >
      <div className="relative mb-5 text-[32px] w-full">
        <label htmlFor="">Film Trending</label>
      </div>
      <div className="overflow-x-auto whitespace-nowrap w-full relative flex right-0 justify-between gap-[24px]">
        <div className="flex-shrink-0">
          <img
            src="./src/assets/the-tomorrow-war.png"
            alt="the-tomorrow-war"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/quantumania.png"
            alt="quantumania"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/guardian-of-the-galaxy.png"
            alt="guardian-of-the-galaxy"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/a-man-called-otto-portrait.png"
            alt="a-man-called-otto-portrait"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/little-mermaid.png"
            alt="little-mermaid"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalCards;
