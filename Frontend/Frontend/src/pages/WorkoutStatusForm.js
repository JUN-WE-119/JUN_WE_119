// import React, { useState } from 'react';


// const WorkoutStatusForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     workoutType: '',
//     metrics: {},
//     description: ''
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleMetricsChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       metrics: {
//         ...formData.metrics,
//         [name]: value
//       }
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await fetch('http://localhost:8080/api/workout-status', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//           });
//       if (response.ok) {
//         console.log('Workout status submitted successfully');
//         // Reset the form
//         setFormData({
//           username: '',
//           workoutType: '',
//           metrics: {},
//           description: ''
//         });
//       } else {
//         console.error('Failed to submit workout status');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
    
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       <div className="mb-4">
//         <label htmlFor="username" className="block mb-2">Username:</label>
//         <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="workoutType" className="block mb-2">Workout Type:</label>
//         <input type="text" id="workoutType" name="workoutType" value={formData.workoutType} onChange={handleChange} className="w-full border rounded px-3 py-2" />
//       </div>
//       {/* Metrics */}
//       <div className="mb-4">
//         <label className="block mb-2">Metrics:</label>
//         <input type="text" name="distance" placeholder="Distance" value={formData.metrics.distance || ''} onChange={handleMetricsChange} className="w-full border rounded px-3 py-2 mb-2" />
//         <input type="text" name="weight" placeholder="Weight" value={formData.metrics.weight || ''} onChange={handleMetricsChange} className="w-full border rounded px-3 py-2 mb-2" />
//         {/* Add more input fields for other metrics as needed */}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block mb-2">Description:</label>
//         <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full border rounded px-3 py-2"></textarea>
//       </div>
//       <button type="submit"   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
//       {/* <a href="/WorkoutStatusPage" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</a> */}

//     </form>
//   );
// };

// export default WorkoutStatusForm;
import React, { useState } from 'react';

const WorkoutStatusForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    workoutType: '',
    metrics: {},
    description: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleMetricsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      metrics: {
        ...formData.metrics,
        [name]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8080/api/workout-status', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
      if (response.ok) {
        console.log('Workout status submitted successfully');
        // Reset the form
        setFormData({
          username: '',
          workoutType: '',
          metrics: {},
          description: ''
        });
      } else {
        console.error('Failed to submit workout status');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="max-w-md mx-auto bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="workoutType" className="block mb-2">Workout Type:</label>
          <input type="text" id="workoutType" name="workoutType" value={formData.workoutType} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        {/* Metrics */}
        <div className="mb-4">
          <label className="block mb-2">Metrics:</label>
          <input type="text" name="distance" placeholder="Distance" value={formData.metrics.distance || ''} onChange={handleMetricsChange} className="w-full border rounded px-3 py-2 mb-2" />
          <input type="text" name="weight" placeholder="Weight" value={formData.metrics.weight || ''} onChange={handleMetricsChange} className="w-full border rounded px-3 py-2 mb-2" />
          {/* Add more input fields for other metrics as needed */}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full border rounded px-3 py-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default WorkoutStatusForm;
