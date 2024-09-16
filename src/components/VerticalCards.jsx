const VerticalCards = () => {
  return (
    <div className="text-white ml-[5vw] mt-20" style={{ fontFamily: "Lato" }}>
      <div className="relative mb-5 text-[32px] w-full">
        <label htmlFor="">Top Rating Film dan Series Hari Ini</label>
      </div>
      <div className="overflow-x-auto whitespace-nowrap w-full relative flex right-0 justify-between gap-[24px]">
        <div className="flex-shrink-0">
          <img
            src="./src/assets/suzume.png"
            alt="suzume"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/jurassic-world.png"
            alt="jurassic-world"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/sonic.png"
            alt="sonic"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/all-of-us.png"
            alt="all-of-us"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/big-hero.png"
            alt="big-hero"
            className="w-[234px] h-[365px] inline-block rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalCards;
