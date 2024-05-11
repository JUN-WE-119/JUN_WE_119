// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const WorkoutPlanPage = () => {
//   const [workoutPlans, setWorkoutPlans] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     workoutType: "",
//     duration: "",
//     date: "",
//     status: "",
//   });

//   useEffect(() => {
//     fetchWorkoutPlans();
//   }, []);

//   const fetchWorkoutPlans = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/workout-plan");
//       setWorkoutPlans(response.data);
//     } catch (error) {
//       console.error("Error fetching workout plans:", error);
//     }
//   };

//   const handleEdit = (id) => {
//     setEditingId(id);
//     const workoutPlan = workoutPlans.find((plan) => plan.id === id);
//     setFormData({
//       name: workoutPlan.name,
//       workoutType: workoutPlan.workoutType,
//       description: workoutPlan.description,
//     });
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8080/api/workout-plan/${id}`);
//       if (response.status === 204) {
//         console.log("Workout plan deleted successfully");
//         // Fetch updated workout plans
//         fetchWorkoutPlans();
//       } else {
//         console.error("Failed to delete workout plan");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditingId(null);
//     setFormData({
//       name: "",
//       workoutType: "",
//       description: "",
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8080/api/workout-plan/${editingId}`, formData);
//       if (response.status === 200) {
//         console.log("Workout plan updated successfully");
//         // Reset the form
//         handleCancelEdit();
//         // Fetch updated workout plans
//         fetchWorkoutPlans();
//       } else {
//         console.error("Failed to update workout plan");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="container py-8 mx-auto">
//       <h1 className="mb-8 text-4xl font-bold text-green-600">Workout Plans</h1>
//       <div>
//         {workoutPlans.map((workoutPlan) => (
//           <div key={workoutPlan.id} className="p-6 mb-4 bg-gray-800 rounded-lg shadow-xl">
//             <div>
//               <h2 className="mb-2 text-xl font-bold">
//                 <strong>ID : </strong>
//                 {workoutPlan.id}
//               </h2>
//               <h2 className="mb-2 text-xl font-bold">
//                 <strong>Name : </strong>
//                 {workoutPlan.name}
//               </h2>
//               <p className="mb-2">
//                 <strong>Workout Type : </strong>
//                 {workoutPlan.workoutType}
//               </p>
//               <p className="mb-2">
//                 <strong>Description : </strong>
//                 {workoutPlan.description}
//               </p>
//             </div>
//             <button onClick={() => handleEdit(workoutPlan.id)} className="px-4 py-2 mr-2 font-bold text-white transition duration-300 ease-in-out bg-green-600 rounded hover:bg-green-800">
//               Edit
//             </button>
//             <button onClick={() => handleDelete(workoutPlan.id)} className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-red-500 rounded hover:bg-red-700">
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//       {editingId && (
//         <div className="max-w-md px-8 pt-6 pb-8 mx-auto mt-8 bg-gray-800 rounded shadow-md">
//           <h2 className="mb-4 text-2xl font-bold">Edit Workout Plan</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="name" className="block mb-2">
//                 Name:
//               </label>
//               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="workoutType" className="block mb-2">
//                 Workout Type:
//               </label>
//               <input type="text" id="workoutType" name="workoutType" value={formData.workoutType} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="description" className="block mb-2">
//                 Description:
//               </label>
//               <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded"></textarea>
//             </div>
//             <div className="flex items-center justify-between">
//               <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
//                 Update
//               </button>
//               <button type="button" onClick={handleCancelEdit} className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600">
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WorkoutPlanPage;


import React, { useState, useEffect } from "react";
import axios from "axios";

const WorkoutPlanPage = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    workoutType: "",
    duration: "",
    date: "",
    status: "",
  });

  useEffect(() => {
    fetchWorkoutPlans();
  }, []);

  const fetchWorkoutPlans = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/workout-plan");
      setWorkoutPlans(response.data);
    } catch (error) {
      console.error("Error fetching workout plans:", error);
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const workoutPlan = workoutPlans.find((plan) => plan.id === id);
    setFormData({
      name: workoutPlan.name,
      description: workoutPlan.description,
      workoutType: workoutPlan.workoutType,
      duration: workoutPlan.duration,
      date: workoutPlan.date,
      status: workoutPlan.status,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/workout-plan/${id}`);
      if (response.status === 204) {
        console.log("Workout plan deleted successfully");
        fetchWorkoutPlans();
      } else {
        console.error("Failed to delete workout plan");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      name: "",
      description: "",
      workoutType: "",
      duration: "",
      date: "",
      status: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/workout-plan/${editingId}`, formData);
      if (response.status === 200) {
        console.log("Workout plan updated successfully");
        handleCancelEdit();
        fetchWorkoutPlans();
      } else {
        console.error("Failed to update workout plan");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-green-600">Workout Plans</h1>
      <div>
        {workoutPlans.map((workoutPlan) => (
          <div key={workoutPlan.id} className="p-6 mb-4 bg-gray-800 rounded-lg shadow-xl">
            <div>
              <h2 className="mb-2 text-xl font-bold">
                <strong>ID : </strong>
                {workoutPlan.id}
              </h2>
              <h2 className="mb-2 text-xl font-bold">
                <strong>Name : </strong>
                {workoutPlan.name}
              </h2>
              <p className="mb-2">
                <strong>Workout Type : </strong>
                {workoutPlan.workoutType}
              </p>
              <p className="mb-2">
                <strong>Description : </strong>
                {workoutPlan.description}
              </p>
              <p className="mb-2">
                <strong>Duration : </strong>
                {workoutPlan.duration}
              </p>
              <p className="mb-2">
                <strong>Date : </strong>
                {workoutPlan.date}
              </p>
              <p className="mb-2">
                <strong>Status : </strong>
                {workoutPlan.status}
              </p>
            </div>
            <button onClick={() => handleEdit(workoutPlan.id)} className="px-4 py-2 mr-2 font-bold text-white transition duration-300 ease-in-out bg-green-600 rounded hover:bg-green-800">
              Edit
            </button>
            <button onClick={() => handleDelete(workoutPlan.id)} className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-red-500 rounded hover:bg-red-700">
              Delete
            </button>
          </div>
        ))}
      </div>
      {editingId && (
        <div className="max-w-md px-8 pt-6 pb-8 mx-auto mt-8 bg-gray-800 rounded shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Edit Workout Plan</h2>
          <form onSubmit={handleSubmit}>
            {/* Form fields for editing */}
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name:
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block mb-2">
                Description:
              </label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded"></textarea>
            </div>
            {/* Workout Type */}
            <div className="mb-4">
              <label htmlFor="workoutType" className="block mb-2">
                Workout Type:
              </label>
              <input type="text" id="workoutType" name="workoutType" value={formData.workoutType} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            {/* Duration */}
            <div className="mb-4">
              <label htmlFor="duration" className="block mb-2">
                Duration:
              </label>
              <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            {/* Date */}
            <div className="mb-4">
              <label htmlFor="date" className="block mb-2">
                Date:
              </label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            {/* Status */}
            <div className="mb-4">
              <label htmlFor="status" className="block mb-2">
                Status:
              </label>
              <select id="status" name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border rounded">
                <option value="">Select Status</option>
                <option value="Planned">Planned</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                Update
              </button>
              <button type="button" onClick={handleCancelEdit} className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default WorkoutPlanPage;