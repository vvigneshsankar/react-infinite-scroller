
import React from "react";
import "./index.scss";

const Skeleton = () => {
  return (
    <li className="skeleton-item">
      <div>
        <div className="skeleton-img" />
      </div>
      <div className="skeleton-info">
        <p className="skeleton-name" />
        <p className="skeleton-designation" />
        <p className="skeleton-email" />
        <p className="skeleton-bio" />
        <p className="skeleton-feedback" />
      </div>
    </li>
  );
};

export default Skeleton;
