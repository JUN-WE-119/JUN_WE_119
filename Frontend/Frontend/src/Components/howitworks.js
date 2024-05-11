import React from 'react';
import { useNavigate } from 'react-router-dom';
const HowItWorks = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/display');
  };
  const handleClicks = () => {
    navigate('/WorkoutStatusPage');
  };
  const handleClicksqq = () => {
    navigate('/Melplanpage');
  };

  const handleClickwkPl = () => {
    navigate('/WorkoutPlanPage');
  };
  
  return (
    <div className="py-16 bg-green-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold">View Works</h2>
        <div className="flex flex-col items-center justify-between md:flex-row" >
          
          <div className="p-8 mb-8 bg-white rounded-lg shadow-md md:mb-0 md:mr-8 hover:shadow-lg"onClick={handleClick}>
            <h3 className="mb-4 text-xl font-bold">Work</h3>
            <p className="text-gray-700">
            showcasing their fitness activities, workouts, healthy meals, and progress.
            </p>
          </div>
          
          <div className="p-8 mb-8 bg-white rounded-lg shadow-md md:mb-0 md:mx-8 hover:shadow-lg" onClick={handleClicks}>
            <h3 className="mb-4 text-xl font-bold">Workout Status Page</h3>
            <p className="text-gray-700">
              Add recipes and a variety of recipes to your meal plan, complete with nutritional info.
            </p>
          </div>
          
          <div className="p-8 mb-8 bg-white rounded-lg shadow-md md:mb-0 md:mx-8 hover:shadow-lg" onClick={ handleClicksqq}>
            <h3 className="mb-4 text-xl font-bold">Meal plan sharing Page</h3>
            <p className="text-gray-700">
              Share your plan with friends or the MealShare community and get inspired.
            </p>
          </div>
          <div className="p-8 mb-8 bg-white rounded-lg shadow-md cursor-pointer md:mb-0 md:mx-8 hover:shadow-lg" onClick={handleClickwkPl}>
            <h3 className="mb-4 text-xl font-bold">Workout plan</h3>
            <p className="text-gray-700">
              Personalized workout plan: strength, cardio, flexibility exercises, tailored to you.
            </p>
          </div>


          
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;