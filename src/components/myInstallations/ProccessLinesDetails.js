import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProccessLinesDetails = () => {
  const navigate = useNavigate();
  const proccessLine = useSelector(
    (state) => state.myInstallationsReducer.proccessLineDetails.data[0]
  );
  console.log(proccessLine);
  const backButton = () => {
    navigate("/proccess-lines");
  };
  return (
    <div className="proccessLinesDetasilsSection">
    <div className="proccessLineDetailsPage">
      <div className="PLDHeader">
        <h2>
          <span onClick={backButton} className="arrow left"></span>{" "}
          {proccessLine.primary_product_details.name}
        </h2>
      </div>
      <div className="card pldCard1">
        Line Name
        <input
          className="proccessDetailsInput"
          readOnly
          defaultValue={proccessLine.line.name}
        />
        Location
        <input
          className="proccessDetailsInput "
          readOnly
          defaultValue={proccessLine.org_location_name}
        />
        Primary Product
        <input
          className="proccessDetailsInput"
          readOnly
          defaultValue={proccessLine.primary_product_details.name}
        />
        Capacity
        <input
          className="proccessDetailsInput"
          readOnly
          defaultValue={`${proccessLine.line_capacity} ${proccessLine.capacity_uom_name}`}
        />
        Year of Installation
        <input
          className="proccessDetailsInput"
          readOnly
          defaultValue={proccessLine.year_of_installation}
        />
        Installed Name
        <input
          className="proccessDetailsInput"
          readOnly
          defaultValue={proccessLine.installed_by_name}
        />
      </div>
      <div className="card pldCard2">
        Factory Name
        <input
          className="proccessDetailsInput"
          readOnly
          defaultValue={proccessLine.factory_name}
        />
        Name
        <input
          className="proccessDetailsInput"
          readOnly
          defaultValue={proccessLine.name}
        />
        Modified on
        <input
          className="proccessDetailsInput"
          readOnly
          defaultValue={proccessLine.modified_on}
        />
        Country
        <input
          className="proccessDetailsInput"
          readOnly
          defaultValue={proccessLine.country}
        />
      </div>
      
    </div>
    <Card className="cardPLD">
    <Card.Title id="cardTitle">Document Screen</Card.Title>
    <Card.Body>
      <div className="d-flex PLDCardDiv">
        {/* http://52.139.224.15/assets/svg-icon/ic_file_word.svg */}
        {proccessLine.documents.length === 0 ? (
          <center>There are no files uploaded</center>
        ) : (
          proccessLine.documents.map((item, index) => {
            const createdOn = new Date(item.created_on);
            return (
              <div key={index}>
                
                <h4>{item.document_label}</h4> 
                {/* <img src={xlsx} alt="svg" /> */}
                File: <a id="documentLink" href={item.document_url}>
                  {item.file_name}
                </a>
                <br />
                Created on: &nbsp;
                <input
                  className="EDInput"
                  type={"text"}
                  readOnly
                  defaultValue={createdOn.toDateString()}
                />
                <hr />
              </div>
            );
          })
        )}
      </div>{" "}
    </Card.Body>
  </Card>
  </div>
  );
};

export default ProccessLinesDetails;
