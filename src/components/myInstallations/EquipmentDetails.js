import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import xlsx from "../../assets/excel.svg.svg";
import { spareParts } from "../../redux/Action";
import { toDataURL } from "qrcode";

const EquipmentDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const details = useSelector(
    (state) => state.myInstallationsReducer.equipmentDetails
  );
  console.log(details);
  const backButton = () => {
    navigate("/equipments");
  };
  const getSpareParts = (data) => {
    dispatch(spareParts(data));
    navigate(`/spare-part`);
  };

  const [qr, setQR] = useState("");
  useEffect(() => {
    toDataURL(details.qr_code_tag).then((res) => {
      // console.log(res);
      setQR(res);
    });
  });
  return (
    <div className="equipmetDetailsPage">
      <div className="Eq-header">
        <h2>
          {" "}
          <span onClick={backButton} className="arrow left"></span>{" "}
          {details.equipment_name}
        </h2>
      </div>

      <div className="card1card2">
        <div>
          <img src={qr} alt="qrcode" />
        </div>
        <Card className="card1">
          <img
            id="equipmentimage"
            src={details.equipment_image}
            alt="Equipment"
          />
          Name
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.equipment_name}
          />
          Serial no.
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.equipment_serial}
          />
          Model
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.sol_model_name}
          />
          Capacity
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={` ${details.capacity} ${details.capacity_uom_name}`}
          />
          Purchase Order Number
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.purchase_order_number}
          />
        </Card>
        <Card className="card2">
          OEM
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.oem_org_name}
          />
          Country of Origin
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.country_of_origin}
          />
          Location
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.factory_location}
          />
          Year of Installation
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.year_of_installation}
          />
          Installed Date
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.installation_date}
          />
          Line
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.line_name}
          />
          Description
          <input
            className="EDInput"
            type={"text"}
            readOnly
            defaultValue={details.description}
          />
        </Card>
      </div>
      <div className="card3card4card5">
        <Card className="card3">
          <Card.Title id="cardTitle">Document Screen</Card.Title>
          <Card.Body>
            <div>
              {/* http://52.139.224.15/assets/svg-icon/ic_file_word.svg */}
              {details.documents.length === 0 ? (
                <center>There are no files uploaded</center>
              ) : (
                details.documents.map((item, index) => {
                  const createdOn = new Date(item.created_on);
                  return (
                    <div key={index}>
                      <img src={xlsx} alt="svg" />
                      <a id="documentLink" href={item.document_url}>
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
        <Card className="card4">
          <Card.Title id="cardTitle">Spare Parts Screen</Card.Title>
          <Card.Body>
            {details.spare_parts.length === 0 ? (
              <center>There are no files uploaded</center>
            ) : (
              details.spare_parts.map((item, index) => {
                const createdOn = new Date(item.created_on);
                return (
                  <div
                    key={index}
                    className="screens"
                    onClick={() => getSpareParts(item)}
                  >
                    <img
                      id="sparePartImg"
                      src={item.spare_part_image}
                      alt="sparepart"
                    />{" "}
                    &nbsp; Created on: &nbsp;
                    <input
                      className="EDInput spareInput"
                      type={"text"}
                      readOnly
                      defaultValue={createdOn.toDateString()}
                    />
                    <p>
                      {" "}
                      &nbsp; Name:<strong> {item.part_name}</strong>
                    </p>
                    <p>
                      {" "}
                      &nbsp; Spare Part No. <strong>{item.part_number}</strong>
                    </p>
                    <hr />
                  </div>
                );
              })
            )}
          </Card.Body>
        </Card>
        <Card className="card5">
          <Card.Title id="cardTitle">Maintenance Checklist</Card.Title>
          <Card.Body>
            {details.equip_mnt_checklist.length === 0 ? (
              <center>There are no files uploaded</center>
            ) : (
              details.equip_mnt_checklist.map((item, index) => {
                return (
                  <div key={index} className="screens">
                    <h4> {item.name} </h4>
                    <p>
                      {" "}
                      &nbsp; Frequency: {item.checklist_type_name} -{" "}
                      {item.checklist_type} Tasks
                    </p>
                    <p></p>
                    <hr />
                  </div>
                );
              })
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default EquipmentDetails;
