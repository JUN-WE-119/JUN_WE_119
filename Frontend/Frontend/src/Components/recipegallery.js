import React from 'react';

const RecipeGallery = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Our Recipe Gallery</h2>
        <p className="text-gray-700 mb-8">
          Explore meals prepared by our chefs, full of color, flavor, and nutrition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-green-100 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1165063882/photo/restaurant-healthy-food-delivery-in-take-away-boxes.jpg?s=2048x2048&w=is&k=20&c=Xf57X17shBsT9J1LHoWSl-1XKZif_hLKl1En7jxkRt0="
              alt="Recipe 1"
              className="w-full"
            />
          </div>
          <div className="bg-green-100 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1165063882/photo/restaurant-healthy-food-delivery-in-take-away-boxes.jpg?s=2048x2048&w=is&k=20&c=Xf57X17shBsT9J1LHoWSl-1XKZif_hLKl1En7jxkRt0="
              alt="Recipe 2"
              className="w-full"
            />
          </div>
          <div className="bg-green-100 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1165063882/photo/restaurant-healthy-food-delivery-in-take-away-boxes.jpg?s=2048x2048&w=is&k=20&c=Xf57X17shBsT9J1LHoWSl-1XKZif_hLKl1En7jxkRt0="
              alt="Recipe 3"
              className="w-full"
            />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default RecipeGallery;