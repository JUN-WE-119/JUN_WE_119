// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Updates from "./pages/Updates";
import CreateUpdate from "./pages/CreateUpdate";
import EditUpdate from "./pages/EditUpdate";
import DeleteUpdate from "./pages/DeleteUpdate";
import Workouts from "./pages/Workouts";
import CreateWorkout from "./pages/CreateWorkout";
import EditWorkout from "./pages/EditWorkout";
import DeleteWorkout from "./pages/DeleteWorkout";
import Wall from "./pages/Wall";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Wall />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/Createupdates" element={<CreateUpdate />} />
        <Route path="/Editupdate/:id" element={<EditUpdate />} />
        <Route path="/Deleteupdate/:id" element={<DeleteUpdate />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/createworkouts" element={<CreateWorkout />} />
        <Route path="/editworkout/:id" element={<EditWorkout />} />
        <Route path="/deleteworkout/:id" element={<DeleteWorkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
