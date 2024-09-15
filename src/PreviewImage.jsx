const PreviewImage = () => {
  return (
    <div className="relative">
      <img
        src="https://via.placeholder.com/800x400"
        alt="Preview"
        className="w-full"
      />
      <button className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2">
        Learn More
      </button>
    </div>
  );
};

export default PreviewImage;
