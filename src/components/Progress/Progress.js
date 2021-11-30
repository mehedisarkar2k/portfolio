import React from "react";

const Progress = ({ title, percentage }) => {
  return (
    <div
      className="text-white font-bold w-full my-2"
      style={{ background: "#d1d1d1" }}
    >
      <div className="text-center inline-block uppercase w-1/5 bg-primary-dark py-.5">
        {title}
      </div>
      <span className="inline-block w-4/5">
        <div
          style={{ width: `${percentage}%` }}
          className="inline-block text-center py-.5 bg-primary"
        >
          {percentage}%
        </div>
      </span>
    </div>
  );
};

export default Progress;
