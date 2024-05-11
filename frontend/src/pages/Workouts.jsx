// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// // const Workouts = () => {
// //   const [plans, setPlans] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:8081/plans")
// //       .then((res) => setPlans(res.data))
// //       .catch((err) => console.log(err));
// //   }, []);

// //   return (
// //     <div className="w-full h-full absolute px-20 bg-[#fefae0] ">
// //       <div className=" mt-24 md:text-right text-center ">
// //         <Link to="/createworkouts">
// //           <button className=" bg-[#ffb703] px-8 py-1 rounded-lg text-white">
// //             Add New
// //           </button>
// //         </Link>
// //       </div>
// //       <div className="my-10 flex flex-wrap justify-center gap-5 ">
// //         {plans.map((plans) => (
// //           <div
// //             className="w-[300px] h-auto flex flex-col justify-between rounded-lg ring-1 ring-[#000] shadow-lg p-5 text-center "
// //             key={plans.id}
// //           >
// //             <h1>Age : {plans.age}</h1>
// //             <h1>bodyType : {plans.bodyType}</h1>
// //             <h1>goal : {plans.goal}</h1>
// //             <h1>bodywant : {plans.bodywant}</h1>
// //             <h1>problemarea : {plans.problemarea}</h1>
// //             <h1>height : {plans.height}</h1>
// //             <h1>currentweight : {plans.currentweight}</h1>
// //             <h1>targetweight : {plans.targetweight}</h1>

// //             {/* <h1 className="text-2xl font-bold mb-5">{plan.exercise}</h1>
// //             <div className="flex justify-center gap-8 items-center mb-5">
// //               <h1>
// //                 <span className="text-lg font-semibold ">Sets: </span>
// //                 {plan.sets}
// //               </h1>
// //               <h1>
// //                 <span className="text-lg font-semibold ">Reps: </span>
// //                 {plan.reps}
// //               </h1>
// //             </div>
// //             <div className="mb-5">
// //               <h1 className="text-lg font-semibold ">Weight</h1>
// //               <h1>{plan.weight}</h1>
// //             </div>
// //             <h1 className=" underline font-semibold ">Note</h1>
// //             <p className="text-justify">{plan.notes}</p> */}
// //             <div className="flex gap-10 justify-center mt-5">
// //               <Link to={`/editworkout/${plans.id}`}>
// //                 <button className=" bg-[#ffb701] w-24 font-semibold px-4 py-1 rounded-lg text-white">
// //                   Edit
// //                 </button>
// //               </Link>
// //               <Link to={`/deleteworkout/${plans.id}`}>
// //                 <button className=" bg-red-400 w-24 font-semibold px-4 py-1 rounded-lg text-white">
// //                   Delete
// //                 </button>
// //               </Link>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Workouts;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Workouts = () => {
//   const [plans, setPlans] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8081/plans")
//       .then((res) => setPlans(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="flex flex-col items-center bg-yellow-50 min-h-screen py-10 px-4 md:px-10">
//       <div className="mt-24 md:text-right text-center">
//         <Link to="/createworkouts">
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
//             Add New
//           </button>
//         </Link>
//       </div>
//       <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {plans.map((plan) => (
//           <div
//             className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between text-center"
//             key={plan.id}
//           >
//             <div>
//               <h1 className="text-lg font-semibold mb-2">Age: {plan.age}</h1>
//               <p className="text-sm text-gray-600">
//                 Body Type: {plan.bodyType}
//               </p>
//               <p className="text-sm text-gray-600">Goal: {plan.goal}</p>
//               <p className="text-sm text-gray-600">
//                 Body Want: {plan.bodywant}
//               </p>
//               <p className="text-sm text-gray-600">
//                 Problem Area: {plan.problemarea}
//               </p>
//               <p className="text-sm text-gray-600">Height: {plan.height}</p>
//               <p className="text-sm text-gray-600">
//                 Current Weight: {plan.currentweight}
//               </p>
//               <p className="text-sm text-gray-600">
//                 Target Weight: {plan.targetweight}
//               </p>
//             </div>
//             <div className="mt-5 flex justify-center gap-4">
//               <Link to={`/editworkout/${plan.id}`}>
//                 <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
//                   Edit
//                 </button>
//               </Link>
//               <Link to={`/deleteworkout/${plan.id}`}>
//                 <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
//                   Delete
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Workouts;

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
