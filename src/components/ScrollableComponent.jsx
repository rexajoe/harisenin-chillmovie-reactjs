import { useRef } from "react";
const ScrollableComponent = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const distance = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };
  return (
    <div className="absolute z-30 flex justify-between -left-6 -right-6 -bottom-32">
      <p
        className="bg-[#2F3334] px-2 rounded-full"
        onClick={() => scroll("right")}
      >
        &larr;
      </p>
      <p
        className="bg-[#2F3334] px-2 rounded-full"
        onClick={() => scroll("left")}
      >
        &rarr;
      </p>
    </div>
  );
};
export default ScrollableComponent;
