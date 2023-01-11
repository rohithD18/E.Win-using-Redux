import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { viewEquipments, viewProccessLines } from "../../redux/Action";

const MyInstallations = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loginReducer.userData);
  const Token = data.access_token;
  //  console.log("Token",Token)
  const getProccessLines = async () => {
    await axios
      .get(
        `http://52.139.224.15:9191/end_user/process_line/?primary_product=All&org_location=&query=&page=1&sort_by=id&installed_by=`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          dispatch(viewProccessLines(res));
          navigate("/proccess-lines");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  const getEquipments = async () => {
    await axios
      .get(
        `http://52.139.224.15:9191/tagged_equipment_list/?search=&page=1&ordering=-status&process_line__org_location__name=&process_line__name=&system=&oem_org_id=&process_line__primary_product_ref__name=&equipment_select=&process_line__installed_by=`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        // console.log("Equipments",res);
        if (res.status === 200) {
          dispatch(viewEquipments(res));
          navigate("/equipments");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <div>
      <Navbar className="navBarInstallations">
        <h3 id="header3"> <span onClick={() => navigate("/home")} className="arrow left"></span> MyInstallations</h3>
        <button className="proccesLineBtn" onClick={getProccessLines}>
          Proccess Lines
        </button>
        <button className="equipmentBtn" onClick={getEquipments}>
          Equipments
        </button>
      </Navbar>
    </div>
  );
};

export default MyInstallations;
