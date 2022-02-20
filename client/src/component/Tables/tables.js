import React from "react";
import "./style.css";
import tab1 from "./tab1.png";
import tab2 from "./tab2.png";
const Tables = () => {
  return (
    <div className="tables">
      <div className="container">
        <div className="tabs">
          <img className="table-pic" src={tab1} alt="" width="30%" />
          <img className="table-pic" src={tab1} alt="" width="30%" />
        </div>
        <div className="tabs">
          <img className="table-pic" src={tab2} alt="" width="20%" />
          <img className="table-pic" src={tab2} alt="" width="20%" />
          <img className="table-pic" src={tab2} alt="" width="20%" />
        </div>
        <div className="tabs">
          <img className="table-pic" src={tab1} alt="" width="30%" />
          <img className="table-pic" src={tab1} alt="" width="30%" />
        </div>
        <div className="tabs">
          <img className="table-pic" src={tab2} alt="" width="20%" />
          <img className="table-pic" src={tab2} alt="" width="20%" />
          <img className="table-pic" src={tab2} alt="" width="20%" />
        </div>
      </div>
    </div>
  );
};

export default Tables;
