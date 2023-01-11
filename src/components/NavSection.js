import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProjects, logoutUser, viewProccessLines } from "../redux/Action";
import myInstallations from "../assets/icon_installation_2x.png";
import myProjects from "../assets/icon_projects_2x.png";
import myWinLogo from "../assets/Vector.png";
import axios from "axios";
import { toDataURL } from "qrcode";

const NavSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.loginReducer.userData);
  const Token = data.access_token;
  // console.log(Token);
  const handleLogout = () => {
    dispatch(logoutUser(null));
    navigate("/");
  };
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
  const [qr, setQR] = useState("");

  useEffect(() => {
    toDataURL(data.username).then((res) => {
      // console.log(res);
      setQR(res);
    });
  });
  return (
    <div>
      <Navbar className="homeNavbar">
        <button id="navButton" onClick={() => navigate("/home")}>
          <img id="logoimg" src={myWinLogo} alt="mywinlogo" />
          <br />
          MY.WIN
        </button>
        <hr />
        <button id="navButton" onClick={getMyProjects}>
          <img id="navimg" src={myProjects} alt="myprojects" />
          <br />
          MyProjects
        </button>
        <hr />
        <button id="navButton" onClick={getMyInstallations}>
          <img id="navimg" src={myInstallations} alt="myinstallations" />
          <br />
          MyInstalltions
        </button>
        <hr />
        <NavDropdown title={data.first_name}>
          <button onClick={handleLogout} id="profileBtn">
            Logout
          </button>
        </NavDropdown>
        <hr />
        <img id="qrCode" src={qr} alt="qrcode" />
        <br />
        <hr />
      </Navbar>
    </div>
  );
};

export default NavSection;
