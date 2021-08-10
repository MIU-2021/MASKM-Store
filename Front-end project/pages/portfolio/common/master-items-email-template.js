import React from "react";
import { Media } from "reactstrap";

const MasterItems = ({ img, link, about, price, widthClass }) => {
  return (
    <td>
      <div className="product-box hover">
        <div className="product border-theme br-0">
          <Media src={img} alt="product" style={{ width: widthClass }} />
        </div>
        <div className="product-info">
          <a href={link} tabIndex="0" style={{ textAlign: "center" }}>
            <h6 style={{ textAlign: "center" }}>{about}</h6>
          </a>
          <h4>{price}</h4>
        </div>
      </div>
    </td>
  );
};

export default MasterItems;
