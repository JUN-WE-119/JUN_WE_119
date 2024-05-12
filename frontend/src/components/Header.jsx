// import gym_01 from "../assets/gym_01.jpg";

// const Header = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center h-screen absolute">
//       <div className="flex-1 justify-center md:p-20 p-10 mt-16 ">
//         <h1 className=" text-[50px] font-bold mb-4 ">
//           Good <span className=" text-[#ffb703]">Fitness</span>
//         </h1>
//         <p className=" text-justify ">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi,
//           esse facere dicta illum delectus obcaecati officia suscipit tempore
//           rerum totam ipsum magni! Sed laudantium debitis tenetur molestias
//           voluptates sit. Debitis, libero at? Rerum qui totam molestias ad
//           ratione. Esse eius est ab fuga eligendi accusamus eum aliquam sapiente
//           perferendis excepturi modi, ratione aliquid sunt unde magni minima ad
//           ipsa.
//         </p>
//         <button className=" bg-[#ffb703] px-8 py-1 rounded-lg text-white mt-4 ">
//           See More
//         </button>
//       </div>
//       <div className="flex-1 text-center justify-center md:mt-16 mt-10">
//         <img
//           src={gym_01}
//           alt="Gym Image"
//           className=" md:w-[500px] w-[300px] md:h-[500px] mx-auto rounded-xl "
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;

// import gym_01 from "../assets/gym_01.jpg";

// const Header = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center h-screen relative bg-gradient-to-br from-blue-500 to-purple-700">
//       <div className="flex-1 justify-center md:p-20 p-10 mt-16">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           Good <span className="text-yellow-300">Fitness</span>
//         </h1>
//         <p className="text-justify text-white">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi,
//           esse facere dicta illum delectus obcaecati officia suscipit tempore
//           rerum totam ipsum magni! Sed laudantium debitis tenetur molestias
//           voluptates sit. Debitis, libero at? Rerum qui totam molestias ad
//           ratione. Esse eius est ab fuga eligendi accusamus eum aliquam sapiente
//           perferendis excepturi modi, ratione aliquid sunt unde magni minima ad
//           ipsa.
//         </p>
//         <button className="bg-yellow-400 px-8 py-2 rounded-lg text-white mt-6 hover:bg-yellow-500 transition duration-300">
//           See More
//         </button>
//       </div>
//       <div className="flex-1 text-center justify-center md:mt-16 mt-10">
//         <img
//           src={gym_01}
//           alt="Gym Image"
//           className="md:w-[500px] w-[300px] md:h-[500px] mx-auto rounded-xl shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;

import gym_01 from "../assets/gym_01.jpg";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-screen relative bg-gradient-to-br from-blue-500 to-purple-700">
      <div className="flex-1 justify-center md:p-20 p-10 mt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Good <span className="text-yellow-300">Fitness</span>
        </h1>
        <p className="text-justify text-white mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi,
          esse facere dicta illum delectus obcaecati officia suscipit tempore
          rerum totam ipsum magni! Sed laudantium debitis tenetur molestias
          voluptates sit. Debitis, libero at? Rerum qui totam molestias ad
          ratione. Esse eius est ab fuga eligendi accusamus eum aliquam sapiente
          perferendis excepturi modi, ratione aliquid sunt unde magni minima ad
          ipsa.
        {/* </p>
        <button className="bg-yellow-400 px-8 py-2 rounded-lg text-white hover:bg-yellow-500 transition duration-300">
          See More
        </button> */}
      </div>
      <div className="flex-1 flex justify-center items-center md:mt-16 mt-10">
        <div className="md:w-[500px] w-[300px] h-[500px] bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={gym_01}
            alt="Gym Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
