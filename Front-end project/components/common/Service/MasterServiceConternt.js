import React from "react";

const MasterServiceContent = ({
  link,
  title,
  service,
  marijuana,
  lastChild,
}) => {
  return (
    <div
      className={`${!marijuana ? "media" : ""} ${
        lastChild ? "border-0 m-0" : ""
      }`}
    >
      <div dangerouslySetInnerHTML={{ __html: link }} />
      <div className="media-body">
        <h4>{title}</h4>
        <p>{service}</p>
      </div>
    </div>
  );
};

export default MasterServiceContent;
