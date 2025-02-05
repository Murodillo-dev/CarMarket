import React from "react";
import GenericButton from "../Generic/button";
import "./index.css";

const LoadingBtn = () => {

  return (
    <div>
      <button width={165} className='activeLoading'>
        <span className="load loading"></span>
      </button>
    </div>
  );
};

export default LoadingBtn;
