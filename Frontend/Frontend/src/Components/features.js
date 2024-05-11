import React from 'react';
import { useNavigate } from 'react-router-dom';
const Features = () => {
  const navigate = useNavigate();

  const handleClickK = () => {
    navigate('/gg');
  };
  
  const handleClick = () => {
    navigate('/ddd');
  };
  
  const handleClickss = () => {
    navigate('/Melplan');
  };

  const handleClickWkPl = () => {
    navigate('/WorkoutPlanForm');
  };

  
  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold">Why Choose MealShare?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-8 bg-green-100 rounded-lg shadow-md" onClick={handleClickK}>
            <img
              src="https://previews.123rf.com/images/nazariykarkhut/nazariykarkhut1804/nazariykarkhut180400050/99851599-young-people-are-ready-to-start-their-workout-a-beautiful-girl-and-boy-are-in-a-gym.jpg"
              alt="Feature 1"
              className="w-full mb-4"
            />
            <h3 className="mb-2 text-xl font-bold">Users can post pictures and videos.</h3>
            <p className="text-gray-700">
              Allow users to upload up to 3 photos or videos (max length: 30 seconds) showcasing their 
              fitness activities, workouts, healthy meals, and progress
            </p>
          </div>
          <div className="p-8 bg-green-100 rounded-lg shadow-md" onClick={handleClick}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/a7af64177619239.64d9f7dd3539f.jpg"
              alt="Feature 2"
              className="w-full mb-4"
            />
            <h3 className="mb-2 text-xl font-bold">Workout Status Form</h3>
            <p className="text-gray-700">
              Join our vibrant community of health enthusiasts and connect with like-minded individuals.
            </p>
          </div>
          <div className="p-8 bg-green-100 rounded-lg shadow-md" onClick={handleClickss}>
            <img
              src="https://previews.123rf.com/images/suetot/suetot1904/suetot190400038/123543785-beautiful-plus-size-woman-making-fresh-salad-in-the-kitchen.jpg"
              alt="Feature 2"
              className="w-full mb-4"
            />
            <h3 className="mb-2 text-xl font-bold">Meal plan sharing From</h3>
            <p className="text-gray-700">
              Join our vibrant community of health enthusiasts and connect with like-minded individuals.
            </p>
          </div>

          <div className="p-8 bg-green-100 rounded-lg shadow-md" onClick={handleClickWkPl}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeKTQOS0TIc_REmRJRWFrm_7NftvVhpYPnSnTmD_aSw&s"
              alt="Feature 2"
              className="w-full mb-4"
            />
            <h3 className="mb-2 text-xl font-bold">Workout plan</h3>
            <p className="text-gray-700">
              Join our vibrant community of health enthusiasts and connect with like-minded individuals.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Features;