import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavSection from "../NavSection";
import MyInstallations from "./MyInstallations";
import { equipmetDetails } from "../../redux/Action";

const Equipments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const equipments = useSelector(
    (state) => state.myInstallationsReducer.equipments.data
  );
  console.log("Equipments", equipments);
  const data = useSelector((state) => state.loginReducer.userData);
  const Token = data.access_token;
  const getEquipmentDetails = (id) => {
    axios
      .get(
        `http://52.139.224.15:9191/tagged_equipment_list/?installed_equipment_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate(`/equipment_id=${id}`);
          dispatch(equipmetDetails(res.data));
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <div className="equipmentsPage">
      <div>
        <MyInstallations />
      </div>
      <div>
        <NavSection />
      </div>
      <span className="e-Header2">EQUIPMENTS</span>
      <div className="equipmentsData">
        <table className="equipmentsTable">
          <thead className="E-tableHead">
            <tr>
              <th id="rowHead">Equipment</th>
              <th id="equipmentName">Name</th>
              <th id="oemName">OEM Name</th>
              <th id="loaction">Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {equipments.results.map((item, index) => {
              return (
                <tr
                  id="E-tableRow"
                  key={index}
                  onClick={() => getEquipmentDetails(item.id)}
                >
                  <td id="rowHead">
                    <img
                      id="equipmentImage"
                      src={item.equipment_image}
                      alt="ImageEquip"
                    />
                  </td>
                  <td>{item.equipment_name}</td>
                  <td>{item.fm_org_name}</td>
                  <td>{item.plant_location_name}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Equipments;
