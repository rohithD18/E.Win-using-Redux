import React from "react";
import "./CSS Files/Login.css";
import "./CSS Files/Homepage.css";
import "./CSS Files/MyProjects.css";
import "./CSS Files/MyProjectDetails.css";
import "./CSS Files/MyInstallations.css";
import "./CSS Files/EquipmentDetails.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import MyProjects from "./components/myProjects/MyProjects";
import MyProjectDetails from "./components/myProjects/MyProjectDetails";
import MyInstallations from "./components/myInstallations/MyInstallations";
import ProccessLines from "./components/myInstallations/ProccessLines";
import Equipments from './components/myInstallations/Equipments';
import ProccessLinesDetails from "./components/myInstallations/ProccessLinesDetails";
import EquipmentDetails from "./components/myInstallations/EquipmentDetails";
import SpareParts from "./components/myInstallations/SpareParts";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/project-details/:id" element={<MyProjectDetails />} />
          <Route path="/my-installations" element={<MyInstallations />} />
          <Route path="/proccess-lines" element={<ProccessLines />} />
          <Route path="/proccess-line-details/:id" element={<ProccessLinesDetails />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/equipment_id=:id" element={<EquipmentDetails />} />
          <Route path="/spare-part" element={<SpareParts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
