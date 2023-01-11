import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyProjectDetails = () => {
  const navigate = useNavigate();
  const details = useSelector(
    (state) => state.myProjectReducer.viewProject.data
  );
  console.log(details);
  const dispatchDate = new Date(details.dispatch_date);

  return (
    <div className="projectDetailsPage">
      <div className="header">
        <h3><span onClick={() => navigate("/myprojects")} className="arrow left"></span> {details.customer_org_name}</h3>
      </div>
      <hr />
      <div className="allDivs">
        <div className="card m-4 p-2 div1">
          Project Name
          <input
            className="prjectDetailsInput"
            readOnly
            defaultValue={details.customer_org_name}
          />
          Project Id
          <input
            className="prjectDetailsInput projectId"
            readOnly
            defaultValue={details.project_id}
          />
          Plant Location
          <input
            className="prjectDetailsInput plantLocation"
            readOnly
            defaultValue={details.customer_org_location_name}
          />
        </div>
        <div className="card m-3 p-2 div2">
          OEM Name
          <input
            className="prjectDetailsInput"
            readOnly
            defaultValue={details.solution_organization}
          />
          Country of Origin
          <input
            className="prjectDetailsInput"
            readOnly
            defaultValue={details.country_of_origin_name}
          />
          Solution Name
          <input
            className="prjectDetailsInput"
            readOnly
            defaultValue={details.solution_name}
          />
        </div>
        <div className="card m-3 p-2 div3">
          Overall Status:
          <input
            className="prjectDetailsInput"
            readOnly
            defaultValue={details.project_status}
          />
          Purchase Order Number:
          <input
            className="prjectDetailsInput"
            readOnly
            defaultValue={details.po_number}
          />
          Projected dispatch date
          <input
            className="prjectDetailsInput"
            readOnly
            defaultValue={dispatchDate.toDateString()}
          />
        </div>
        <div className="card m-3">
          <table className="tableContent">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Planned End Date</th>
                <th>Progress</th>
                <th>Files & Notes</th>
              </tr>
            </thead>
            <tbody>
              {details.stage_project.map((data, index) => {
                const plannedEndDate = new Date(data.planned_end_date);
                const startDate = new Date(data.progress_start_date);
                const endDate = new Date(data.progress_end_date);
                return (
                  <tr key={index}>
                    <td id="tableData">
                      <input
                        className="prjectDetailsInput"
                        readOnly
                        defaultValue={data.stage_name}
                      />
                    </td>
                    <td id="tableData">
                      <input
                        className="prjectDetailsInput"
                        readOnly
                        defaultValue={plannedEndDate.toDateString()}
                      />
                    </td>
                    <td id="tableData">
                      Start Date
                      <input
                        className="prjectDetailsInput"
                        readOnly
                        defaultValue={startDate.toDateString()}
                      />{" "}
                      <br />
                      {data.progress_percentage}%
                      <input
                        id="rangeInput"
                        type={"range"}
                        defaultValue={data.progress_percentage}
                      />
                      End date &nbsp;
                      <input
                        className="prjectDetailsInput"
                        readOnly
                        defaultValue={endDate.toDateString()}
                      />
                    </td>
                    <td id="tableData">
                      <p>No Files</p>
                      {/* <input type={"file"} /> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MyProjectDetails;
