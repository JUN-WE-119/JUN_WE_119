import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Workouts = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/plans")
      .then((res) => setPlans(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full px-4 md:px-10 py-8 bg-slate-200">
      <div className="flex justify-between items-center mb-8 mt-20">
        <h1 className="text-3xl font-bold">Workouts</h1>
        <Link to="/createworkouts">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Add New
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        {plans.map((plan) => (
          <div
            className="bg-white rounded-lg shadow-md p-6 mb-6 w-full max-w-md"
            key={plan.id}
          >
            <h1 className="text-xl font-semibold mb-2">Age: {plan.age}</h1>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Body Type:</span>{" "}
                  {plan.bodyType}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Goal:</span> {plan.goal}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Body Want:</span>{" "}
                  {plan.bodywant}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Problem Area:</span>{" "}
                  {plan.problemarea}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Height:</span> {plan.height}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Current Weight:</span>{" "}
                  {plan.currentweight}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Target Weight:</span>{" "}
                  {plan.targetweight}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <Link to={`/editworkout/${plan.id}`}>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Edit
                </button>
              </Link>
              <Link to={`/deleteworkout/${plan.id}`}>
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

export default Workouts;
