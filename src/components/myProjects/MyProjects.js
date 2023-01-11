import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { projectDetails } from "../../redux/Action";
import NavSection from "../NavSection";

const MyProjects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myProjectReducer.myProjects);
  // console.log(data);
  const projects = data.data.results;
  const Token = useSelector(
    (state) => state.loginReducer.userData.access_token
  );
  const viewProject = async (id) => {
    await axios
      .get(`http://52.139.224.15:9191/my_project_details/${id}/`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(projectDetails(res));
          navigate(`/project-details/${id}`);
        }
        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="myProjectsPage">
      <div className="navSection">
        <NavSection />
      </div>
      <div className="myWinProjects">
     
        {/* <button id="myWin" onClick={() => navigate("/home")}></button> */}
        <h2>  <span onClick={() => navigate("/home")} className="arrow left"></span> MyProjects</h2>
      </div>
      <table className="myprojectsTable">
        <thead className="projectsTableHead">
          <tr>
            <th>Name</th>
            <th>Project Id</th>
            <th>OEM</th>
            <th>Purchase Order</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((item, index) => {
            return (
              <tr
                className="trow"
                key={index}
                onClick={() => viewProject(item.id)}
              >
                <th>{item.customer_org_name}</th>
                <td>{item.project_id}</td>
                <td>{item.solution_organization}</td>
                <td>{item.po_number} </td>
                <td>{item.project_status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyProjects;
