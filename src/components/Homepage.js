import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProjects, viewProccessLines } from "../redux/Action";
import myInstallations from "../assets/icon_installation_2x.png";
import myProjects from "../assets/icon_projects_2x.png";
import myWinLogo from "../assets/Vector.png";
import axios from "axios";
import NavSection from "./NavSection";

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.loginReducer.userData);
  console.log(data);
  const Token = data.access_token;
  console.log(Token);
  const getMyProjects = async () => {
    await axios
      .get(
        "http://52.139.224.15:9191/my_project_list/?search=&page=1&ordering=id&project_status=&solution_org=",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        console.log("MyProjects", res);
        if (res.status === 200) {
          dispatch(getProjects(res));
          navigate("/myprojects");
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };
  const getMyInstallations = async () => {
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
  return (
    <div className="homePage">
      <div>
        <NavSection />
      </div>
      <center>
        <div className="mywinlogo">
          <img id="logoimg" src={myWinLogo} alt="mywinlogo" /> &nbsp;
          <h1>Welcome to MyWin</h1>
        </div>
        <div className="cardsSection">
          <Card className="homeCard" onClick={getMyProjects}>
            <Card.Body className="cardbody">
              <img id="cardimg" src={myProjects} alt="myprojects" />
              <div className="carddata">
                <Card.Title id="myProjects">MyProjects</Card.Title>
                <p> Keep your customers engaged and informed on all projects</p>
              </div>
            </Card.Body>
          </Card>
          <Card className="homeCard" onClick={getMyInstallations}>
            <Card.Body className="cardbody">
              <img id="cardimg" src={myInstallations} alt="myinstallations" />
              <div className="carddata">
                <Card.Title id="myInstallations">MyInstallations</Card.Title>
                <p>
                  Delight your customers with an excellent digital experience
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </center>
    </div>
  );
};

export default Homepage;
