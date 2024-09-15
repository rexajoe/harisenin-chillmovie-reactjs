const ScrollableCards = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap p-4">
      <div className="inline-block p-2 bg-gray-200 rounded-lg mx-2">Card 1</div>
      <div className="inline-block p-2 bg-gray-200 rounded-lg mx-2">Card 2</div>
      <div className="inline-block p-2 bg-gray-200 rounded-lg mx-2">Card 3</div>
      <div className="inline-block p-2 bg-gray-200 rounded-lg mx-2">Card 4</div>
    </div>
  );
};

export default ScrollableCards;
