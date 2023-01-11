import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { proccessLineDetails } from "../../redux/Action";
import NavSection from "../NavSection";
import MyInstallations from "./MyInstallations";

const ProccessLines = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const proccessLines = useSelector(
    (state) => state.myInstallationsReducer.proccessLines
  );
  console.log("ProccessLines", proccessLines);
  const Token = useSelector(
    (state) => state.loginReducer.userData.access_token
  );
  const viewProccessLine = async (id) => {
    await axios
      .get(`http://52.139.224.15:9191/end_user/process_line/?line_id=${id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(proccessLineDetails(res));
          navigate(`/proccess-line-details/${id}`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div>
        <MyInstallations />
      </div>
      <div>
        <NavSection />
      </div>
      <span className="e-Header2">PROCCESS LINES</span>
      <table className="proccessLinesTable" style={{ color: "white" }}>
        <thead className="P-tableHead">
          <tr className="P-tableHead">
            <th id="P-rowHead">Primary Product</th>
            <th id="P-lineName">Line Name</th>
            <th id="P-capacity"> Capacity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {proccessLines.data.map((item, index) => {
            return (
              <tr
                className="P-trow"
                key={index}
                onClick={() => viewProccessLine(item.id)}
              >
                <td id="P-rowHead">{item.primary_product_details.name}</td>
                <td>{item.name}</td>
                <td>
                  {item.line_capacity} {item.capacity_uom_name}
                </td>
                <td>{item.org_location_name} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProccessLines;
