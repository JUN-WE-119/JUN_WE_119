// import React, { useState } from 'react';

// const WorkoutPlanForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
    
//     description: ''
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await fetch('http://localhost:8080/api/workout-plan', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//           });
//       if (response.ok) {
//         console.log('Workout plan submitted successfully');
//         // Reset the form
//         setFormData({
//           name: '',
          
//           description: ''
//         });
//       } else {
//         console.error('Failed to submit workout plan');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="max-w-md px-8 pt-6 pb-8 mx-auto mb-4 bg-gray-800 rounded shadow-md">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block mb-2">Name:</label>
//             <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
//           </div>
          
          

//           <div className="mb-4">
//             <label htmlFor="description" className="block mb-2">Description:</label>
//             <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded"></textarea>
//           </div>
//           <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WorkoutPlanForm;

import React, { useState } from 'react';

const WorkoutPlanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    workoutType: '',
    duration: '',
    date: '',
    status: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8080/api/workout-plan', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
      if (response.ok) {
        console.log('Workout plan submitted successfully');
        // Reset the form to initial state
        setFormData({
          name: '',
          description: '',
          workoutType: '',
          duration: '',
          date: '',
          status: ''
        });
      } else {
        console.error('Failed to submit workout plan');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-5 mx-auto mb-4 bg-gray-700 rounded shadow-md max-w-200 pt-6pb-8">

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded"></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="workoutType" className="block mb-2">Workout Type:</label>
            <input type="text" id="workoutType" name="workoutType" value={formData.workoutType} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="duration" className="block mb-2">Duration:</label>
            <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block mb-2">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="block mb-2">Status:</label>
            <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>

          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WorkoutPlanForm;