import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditWorkout = () => {
  const [age, setAge] = useState(0);
  const [bodyType, setBodyType] = useState("");
  const [goal, setGoal] = useState("");
  const [bodywant, setBodywant] = useState("");
  const [problemarea, setProblemarea] = useState("");
  const [height, setHeight] = useState(0);
  const [currentweight, setCurrentweight] = useState(0);
  const [targetweight, setTargetweight] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/plan/${id}`)
      .then((res) => {
        setAge(res.data.age);
        setBodyType(res.data.bodyType);
        setGoal(res.data.goal);
        setBodywant(res.data.bodywant);
        setProblemarea(res.data.problemarea);
        setHeight(res.data.height);
        setCurrentweight(res.data.currentweight);
        setTargetweight(res.data.targetweight);
      })
      .catch((err) => {
        alert("Something went wrong..");
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditPlan = (e) => {
    const data = {
      age,
      bodyType,
      goal,
      bodywant,
      problemarea,
      height,
      currentweight,
      targetweight,
    };

    e.preventDefault();
    axios
      .put(`http://localhost:8081/plan/${id}`, data)
      .then(() => navigate("/workouts"))
      .catch((err) => {
        alert("Something went wrong...");
        console.log(err);
      });
  };

  return (
    <div className="w-full absolute px-20 ">
      <div className="mt-24 w-[40%] mx-auto shadow-lg p-5 rounded-lg ">
        <form>
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Excersice"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>

          {/* dropdown bodytype */}
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Body Type</label>
            <select
              name="bodyType"
              id="bodyType"
              value={bodyType}
              onChange={(e) => setBodyType(e.target.value)}
            >
              <option value="Slim">Slim</option>
              <option value="Average">Average</option>
              <option value="Heavey">Heavey</option>
            </select>
          </div>

          {/* dropdown goal */}
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Goal</label>
            <select
              name="cars"
              id="cars"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="LoseWeight">LoseWeight</option>
              <option value="GainMuscleMass">GainMuscleMass</option>
              <option value="GetShredded">GetShredded</option>
            </select>
          </div>

          {/* dropdown bodywant */}
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Body Want</label>
            <select
              name="cars"
              id="cars"
              value={bodywant}
              onChange={(e) => setBodywant(e.target.value)}
            >
              <option value="Athlete">Athlete</option>
              <option value="Hero">Hero</option>
              <option value="Bodybuilder">Bodybuilder</option>
            </select>
          </div>

          {/* dropdown problemarea */}
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Problem Area</label>
            <select
              name="cars"
              id="cars"
              value={problemarea}
              onChange={(e) => setProblemarea(e.target.value)}
            >
              <option value="Weakchest">Weakchest</option>
              <option value="Slimarms">Slimarms</option>
              <option value="Beerbelly">Beerbelly</option>
              <option value="Slimlegs">Slimlegs</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Height</label>
            <input
              type="number"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Excersice"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Current Weight</label>
            <input
              type="number"
              name="currentweight"
              value={currentweight}
              onChange={(e) => setCurrentweight(e.target.value)}
              placeholder="Excersice"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Target Weight</label>
            <input
              type="number"
              name="targetweight"
              value={targetweight}
              onChange={(e) => setTargetweight(e.target.value)}
              placeholder="Excersice"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>
          <button
            onClick={handleEditPlan}
            className=" bg-[#ffb703] px-8 py-1 rounded-lg text-white"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditWorkout;
