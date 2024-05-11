import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from './pages/login';

import Home from './pages/home';
import React from 'react';
import UserForm from './Components/inser';
import ImageUpload from "./Components/fillinsert";
import Display from "./Components/Display"
import WorkoutStatusForm from './pages/WorkoutStatusForm';
import WorkoutStatusPage from './pages/WorkoutStatusPage';
import MealPlanPage from './pages/mealplan';
import Melpanefrom from './pages/mealplanform'
import Melpanepage from './pages/mealplan'

import WorkoutPlanForm from "./Components/WorkoutPlanForm";
import WorkoutPlanPage from "./Components/WorkoutPlanPage";

function MainApp() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
             
                  <Route path="/gg" element={
                      <>
                             <ImageUpload />
                         <UserForm />
                      </>
                  }/>
                  <Route path="/" element={  <LoginForm/>}/>
                  <Route path="/home" element={<Home/>}/>
                <Route path="/display" element={ <Display/>}/>
                <Route path="/ddd" element={<WorkoutStatusForm />} />
                <Route path="/WorkoutStatusPage" element={<WorkoutStatusPage />} />
                <Route path="/Melplan" element={< Melpanefrom />} />
                <Route path="/Melplanpage" element={< Melpanepage />} />
                <Route path="/WorkoutPlanForm" element={< WorkoutPlanForm />} />
                <Route path="/WorkoutPlanPage" element={< WorkoutPlanPage />} />
                
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default MainApp;