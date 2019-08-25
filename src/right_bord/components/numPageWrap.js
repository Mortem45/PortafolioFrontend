import React from "react";

const NumPageWrapCount = props => (
  <div className="numberPage_wrapCont">
    <div className="numberPage_wrap">
      <div className="numberPage_dotWrap">
        {props.children}
      </div>
    </div>
  </div>
);

export default NumPageWrapCount;
