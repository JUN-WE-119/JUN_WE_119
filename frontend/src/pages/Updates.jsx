import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Updates = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/workouts")
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full px-4 md:px-10 py-8 bg-slate-200">
      <div className="flex justify-between items-center mb-8 mt-20">
        <h1 className="text-3xl font-bold">Workout Updates</h1>
        <Link to="/Createupdates">
          <button className="bg-yellow-500 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Add New
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        {workouts.map((workout) => (
          <div
            className="bg-white rounded-lg shadow-md p-6 mb-6 w-full max-w-md"
            key={workout.id}
          >
            <h1 className="text-xl font-semibold mb-2">{workout.exercise}</h1>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Sets:</span> {workout.sets}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Reps:</span> {workout.reps}
                </p>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Weight:</span> {workout.weight}
              </p>
            </div>
            <p className="text-sm text-gray-700 mb-4">{workout.notes}</p>
            <div className="flex justify-between">
              <Link to={`/Editupdate/${workout.id}`}>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Edit
                </button>
              </Link>
              <Link to={`/Deleteupdate/${workout.id}`}>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Delete
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
