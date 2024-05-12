import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DeleteWorkout = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteUpdate = () => {
    axios
      .delete(`http://localhost:8081/plan/${id}`)
      .then(() => {
        navigate("/workouts");
      })
      .catch((err) => {
        alert("Somethnig went wrong..");
        console.log(err);
      });
  };

  return (
    <div className="p-4 mx-10">
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] mt-20 p-8 mx-auto">
        <h3 className="text-2xl">
          Are you sure you want to delete this Workout
        </h3>

        <div className="flex justify-center mt-8 gap-10">
          <button
            onClick={handleDeleteUpdate}
            className=" bg-[#ffb703] w-32 font-semibold px-4 py-1 rounded-lg text-white"
          >
            Yes, Delete
          </button>
          <Link to="/workouts">
            <button className=" bg-red-400 w-32 font-semibold px-4 py-1 rounded-lg text-white">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteWorkout;
