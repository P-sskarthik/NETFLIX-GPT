const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl mb-3 font-semibold hidden md:block text-white">
        {title}
      </h1>
      <p className="py-4 text-sm md:text-lg w-full md:w-1/3">{overview}</p>
      <div className="flex flex-wrap gap-2">
        <button className="bg-white text-black p-3 md:p-4 px-10 md:px-14 text-lg md:text-xl rounded-lg hover:bg-opacity-80">
          ► Play
        </button>
        <button className="bg-gray-500 text-white p-3 md:p-4 px-8 md:px-10 text-lg md:text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
