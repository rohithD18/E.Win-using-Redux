import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SpareParts = () => {
  const navigate = useNavigate();
  const spareParts = useSelector(
    (state) => state.myInstallationsReducer.sparePart
  );
  console.log(spareParts);
  return (
    <div className="sparePartPage">
      <div className="Eq-header">
        <h2>
          {" "}
          <span onClick={()=>navigate("/equipment_id=:id")} className="arrow left"></span>{" "}
          {spareParts.part_name}
        </h2>
      </div>
      <img id="spareImage" src={spareParts.spare_part_image} alt="sprePart" />
      <div className="spareSection2">
        <div>
          <h5>Name</h5>
          <input id="spares" readOnly defaultValue={spareParts.part_name} />
        </div>
        <div>
          <h5>Vendor</h5>
          <input id="spares" readOnly defaultValue={spareParts.vendor_name} />
        </div>

        <div>
          <h5>Available With OEM</h5>
          <input id="spares" readOnly defaultValue={spareParts.available_with_oem} />
        </div>
        <div>
          <h5>Description</h5>
          <input id="spares" readOnly defaultValue={spareParts.description} />
        </div>
      </div>
      <div className="spareSection3">
        <div className="sparePart">
          <h5> Spare Part Number</h5>
          <input id="spares" readOnly defaultValue={spareParts.part_number} />
        </div>
        <div>
          <h5>Criticality</h5>
          <input id="spares" readOnly defaultValue={spareParts.critical} />
        </div>
        <div>
          <h5>Active</h5>
          <input id="spares" readOnly defaultValue={spareParts.is_active} />
        </div>
      </div>
    </div>
  );
};

export default SpareParts;
