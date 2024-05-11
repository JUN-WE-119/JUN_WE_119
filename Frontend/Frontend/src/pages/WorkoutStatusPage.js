// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const WorkoutStatusPage = () => {
// //   const [workoutStatuses, setWorkoutStatuses] = useState([]);

// //   useEffect(() => {
// //     fetchWorkoutStatuses();
// //   }, []);

// //   const fetchWorkoutStatuses = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:8080/api/workout-status");
// //       setWorkoutStatuses(response.data);
// //     } catch (error) {
// //       console.error("Error fetching workout statuses:", error);
// //     }
// //   };


  


  

// // //   return (
// // //     <div className="container mx-auto py-8">
// // //       <h1 className="text-4xl font-bold text-green-600 mb-8">Workout Statuses</h1>
// // //       <div>
// // //         {workoutStatuses.map((workoutStatus) => (
// // //           <div key={workoutStatus.id}>
// // //             <h2>{workoutStatus.username}</h2>
// // //             <p>{workoutStatus.workoutType}</p>
// // //             {/* <p>{workoutStatus.metrics}</p> */}
// // //             <p>{workoutStatus.description}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // return (
// //     <div className="container mx-auto py-8">
// //       <h1 className="text-4xl font-bold text-green-600 mb-8">Workout Statuses</h1>
// //       <div>
       
        
// //         {/* Mapping Workout Statuses */}
// //         {workoutStatuses.map((workoutStatus) => (
// //              <div className="card card-side bg-base-100 shadow-xl">
// //              <div className="card-body"  >
// //           <div key={workoutStatus.id}>
// //           <h2><strong>ID : </strong>{workoutStatus.id}</h2>
// //             <h2><strong>Username : </strong>{workoutStatus.username}</h2>
// //             <p><strong>Workout Type : </strong>{workoutStatus.workoutType}</p>
// //             {/* <p><strong>metrics</strong>{workoutStatus.metrics}</p> */}

// //             <p>
// //             <strong>Distance:</strong> {workoutStatus.metrics.distance} meters
// //             <br />
// //             <strong>Weight:</strong> {workoutStatus.metrics.weight} kg
// //         </p>



// //             <p><strong>Workout Description : </strong>{workoutStatus.description}</p>
// //           </div>
// //           </div>
// //           </div>
// //         ))}
// //         {/* End of Mapping */}
        
// //       </div>
// //     </div>
// //   );
  

// // };

// // export default WorkoutStatusPage;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const WorkoutStatusPage = () => {
//   const [workoutStatuses, setWorkoutStatuses] = useState([]);

//   useEffect(() => {
//     fetchWorkoutStatuses();
//   }, []);

//   const fetchWorkoutStatuses = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/workout-status");
//       setWorkoutStatuses(response.data);
//     } catch (error) {
//       console.error("Error fetching workout statuses:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/workout-status/${id}`);
//       // Update workoutStatuses state after deletion
//       setWorkoutStatuses(workoutStatuses.filter(status => status.id !== id));
//     } catch (error) {
//       console.error("Error deleting workout status:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-4xl font-bold text-green-600 mb-8">Workout Statuses</h1>
//       <div>
//         {/* Mapping Workout Statuses */}
//         {workoutStatuses.map((workoutStatus) => (
//           <div key={workoutStatus.id} className="card card-side bg-base-100 shadow-xl">
//             <div className="card-body">
//               <h2><strong>ID : </strong>{workoutStatus.id}</h2>
//               <h2><strong>Username : </strong>{workoutStatus.username}</h2>
//               <p><strong>Workout Type : </strong>{workoutStatus.workoutType}</p>
//               <p>
//                 <strong>Distance:</strong> {workoutStatus.metrics.distance} meters
//                 <br />
//                 <strong>Weight:</strong> {workoutStatus.metrics.weight} kg
//               </p>
//               <p><strong>Workout Description : </strong>{workoutStatus.description}</p>
//               {/* Delete Button */}
//               <button onClick={() => handleDelete(workoutStatus.id)} className="btn btn-error mt-4">Delete</button>
//             </div>
//           </div>
//         ))}
//         {/* End of Mapping */}
//       </div>
//     </div>
//   );
// };

// export default WorkoutStatusPage;


import React, { useState, useEffect } from "react";
import axios from "axios";

const WorkoutStatusPage = () => {
  const [workoutStatuses, setWorkoutStatuses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    workoutType: "",
    metrics: {},
    description: "",
  });

  useEffect(() => {
    fetchWorkoutStatuses();
  }, []);

  const fetchWorkoutStatuses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/workout-status");
      setWorkoutStatuses(response.data);
    } catch (error) {
      console.error("Error fetching workout statuses:", error);
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const workoutStatus = workoutStatuses.find((status) => status.id === id);
    setFormData({
      username: workoutStatus.username,
      workoutType: workoutStatus.workoutType,
      metrics: workoutStatus.metrics,
      description: workoutStatus.description,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/workout-status/${id}`);
      if (response.status === 204) {
        console.log("Workout status deleted successfully");
        // Fetch updated workout statuses
        fetchWorkoutStatuses();
      } else {
        console.error("Failed to delete workout status");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      username: "",
      workoutType: "",
      metrics: {},
      description: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMetricsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      metrics: {
        ...formData.metrics,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/workout-status/${editingId}`, formData);
      if (response.status === 200) {
        console.log("Workout status updated successfully");
        // Reset the form
        handleCancelEdit();
        // Fetch updated workout statuses
        fetchWorkoutStatuses();
      } else {
        console.error("Failed to update workout status");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-green-600 mb-8">Workout Statuses</h1>
      <div>
  {/* Mapping Workout Statuses */}
  {workoutStatuses.map((workoutStatus) => (
    <div key={workoutStatus.id} className="bg-gray-800 rounded-lg shadow-xl p-6 mb-4">
      <div>
        <h2 className="text-xl font-bold mb-2">
          <strong>ID : </strong>
          {workoutStatus.id}
        </h2>
        <h2 className="text-xl font-bold mb-2">
          <strong>Username : </strong>
          {workoutStatus.username}
        </h2>
        <p className="mb-2">
          <strong>Workout Type : </strong>
          {workoutStatus.workoutType}
        </p>
        <p className="mb-2">
          <strong>Distance:</strong> {workoutStatus.metrics.distance} meters
          <br />
          <strong>Weight:</strong> {workoutStatus.metrics.weight} kg
        </p>
        <p className="mb-2">
          <strong>Workout Description : </strong>
          {workoutStatus.description}
        </p>
      </div>
      {/* Edit Button */}
      {/* <button onClick={() => handleEdit(workoutStatus.id)} className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-2">
        Edit
      </button> */}
      {/* Delete Button */}
      {/* <button onClick={() => handleDelete(workoutStatus.id)} className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Delete
      </button> */}

      {/* Edit Button */}
<button onClick={() => handleEdit(workoutStatus.id)} className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300 ease-in-out">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h10zm4 4a2 2 0 00-2-2M8 13H5.7a.7.7 0 00-.7.7v4.6a.7.7 0 00.7.7H8m4 0h2.3a.7.7 0 00.7-.7v-4.6a.7.7 0 00-.7-.7H12"></path>
  </svg>
  Edit
</button>

{/* Delete Button */}
<button onClick={() => handleDelete(workoutStatus.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  Delete
</button>



    </div>
  ))}
  {/* End of Mapping */}
</div>
{/* Edit Form */}
{editingId && (
  <div className="max-w-md mx-auto bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mt-8">
    <h2 className="text-2xl font-bold mb-4">Edit Workout Status</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2">
          Username:
        </label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="workoutType" className="block mb-2">
          Workout Type:
        </label>
        <input type="text" id="workoutType" name="workoutType" value={formData.workoutType} onChange={handleChange} className="w-full border rounded px-3 py-2" />
      </div>
      {/* Metrics */}
      <div className="mb-4">
        <label className="block mb-2">Metrics:</label>
        <input type="text" name="distance" placeholder="Distance" value={formData.metrics.distance || ""} onChange={handleMetricsChange} className="w-full border rounded px-3 py-2 mb-2" />
        <input type="text" name="weight" placeholder="Weight" value={formData.metrics.weight || ""} onChange={handleMetricsChange} className="w-full border rounded px-3 py-2 mb-2" />
        {/* Add more input fields for other metrics as needed */}
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">
          Description:
        </label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full border rounded px-3 py-2"></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Update
        </button>
        <button type="button" onClick={handleCancelEdit} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Cancel
        </button>
      </div>
    </form>
  </div>
)}

    </div>
  );
};

export default WorkoutStatusPage;

