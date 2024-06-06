import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className="absolute w-screen aspect-video text-white bg-gradient-to-r from-black pt-[20%] px-12 -z-0">
      <h1 className="text-4xl font-bold py-2">{title}</h1>
      <p className="text-lg w-1/4 py-4">{overview}</p>
      <div>
        <button
          src="https://cdn-icons-png.freepik.com/256/27/27223.png?semt=ais_hybrid"
          className="bg-white text-black p-4 px-12 mx-1 text-xl rounded-lg hover:bg-opacity-80 font-bold"
        >
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 mx-1 text-xl bg-opacity-50 hover:bg-opacity-35 rounded-lg font-bold">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle