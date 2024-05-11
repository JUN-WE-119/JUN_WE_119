import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between w-full h-16 bg-[#2b2d42] px-20 items-center fixed z-10 ">
        <div className="flex items-center gap-5">
          <img src={logo} alt="Logo" className="w-[40px] h-[40px] " />
          <h1 className="text-2xl uppercase font-bold text-white ">Fitness</h1>
        </div>

        <ul className="flex items-center gap-10 text-white text-md">
          <Link to="/">
            <li className=" cursor-pointer ">Posts</li>
          </Link>
          <Link to="/updates">
            <li className=" cursor-pointer ">Updates</li>
          </Link>
          <Link to="/workouts">
            {" "}
            <li className=" cursor-pointer ">Workouts</li>
          </Link>
          <li className=" cursor-pointer ">Meal Plans</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
