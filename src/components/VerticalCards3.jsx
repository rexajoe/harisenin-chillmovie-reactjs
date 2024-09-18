const VerticalCards = () => {
  return (
    <div
      className="text-white ml-[5vw] mr-[5vw] mt-20"
      style={{ fontFamily: "Lato" }}
    >
      <div className="relative mb-5 text-[32px] w-full">
        <label htmlFor="">Rilis Baru</label>
      </div>
      <div className="overflow-x-auto whitespace-nowrap w-full relative flex right-0 justify-between gap-[24px]">
        <div className="flex-shrink-0">
          <img
            src="./src/assets/little-mermaid.png"
            alt="little-mermaid"
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
            src="./src/assets/missing.png"
            alt="missing"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/suzume.png"
            alt="suzume"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/the-tomorrow-war.png"
            alt="the-tomorrow-war"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalCards;
