import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUpdate = () => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const handleCreateWorkout = (e) => {
    const data = {
      exercise,
      sets,
      reps,
      weight,
      notes,
    };

    e.preventDefault();
    axios
      .post("http://localhost:8081/workout", data)
      .then(() => navigate("/updates"))
      .catch((err) => {
        alert("Something went wrong...");
        console.log(err);
      });
  };

  return (
    <div className="w-full absolute px-20 ">
      <div className="mt-24 w-[40%] mx-auto shadow-lg p-5 rounded-lg">
        <form>
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Excersice</label>
            <input
              type="text"
              name="excersice"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              placeholder="Excersice"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Sets</label>
            <input
              type="number"
              name="sets"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              placeholder="Sets"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Refs</label>
            <input
              type="number"
              name="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              placeholder="Reps"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Weight</label>
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>

          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Note</label>
            <textarea
              type="number"
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Note"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>
          <button
            onClick={handleCreateWorkout}
            className=" bg-[#ffb703] px-8 py-1 rounded-lg text-white"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUpdate;
