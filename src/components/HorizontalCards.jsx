const HorizontalCards = () => {
  return (
    <div className="text-white ml-[5vw]" style={{ fontFamily: "Lato" }}>
      <div className="relative mb-5 text-[32px] w-full">
        <label htmlFor="">Melanjutkan Tonton Film</label>
      </div>
      <div className="overflow-x-auto whitespace-nowrap w-full relative flex right-0 justify-between gap-[24px]">
        <div className="flex-shrink-0">
          <img
            src="./src/assets/dont-look-up.png"
            alt="dont-look-up"
            className="w-[302px] h-[162px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/the-batman.png"
            alt="the-batman"
            className="w-[302px] h-[162px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/blue-lock.png"
            alt="blue-lock"
            className="w-[302px] h-[162px] inline-block rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src="./src/assets/a-man-called-otto.png"
            alt="a-man-called-otto"
            className="w-[302px] h-[162px] inline-block rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
