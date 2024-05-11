import React from 'react';

const Hero = () => {
  return (
    <div className="bg-green-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Share the Health.</h1>
            <p className="text-gray-700 mb-8">Empowering your healthier lifestyle.</p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Your Diet, Our Plan.</h2>
              <form>
                <input
                  type="text"
                  placeholder="Find Address"
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Get started"
                  className="w-full px-4 py-2 bg-green-500 text-white rounded"
                />
              </form>
              <p className="text-sm text-gray-500 mt-4">
                To find out if we deliver to your address, select "Get started"
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://media.istockphoto.com/id/1165063882/photo/restaurant-healthy-food-delivery-in-take-away-boxes.jpg?s=2048x2048&w=is&k=20&c=Xf57X17shBsT9J1LHoWSl-1XKZif_hLKl1En7jxkRt0="
              alt="Hero"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;