import React from "react";
import HeadcountHistoryRecord from "../HeadcountHistoryRecord";

export default props => {
  return (
    <div className="headcount__history">
      <h3 className="headcount__history__heading">Recent History</h3>

      <HeadcountHistoryRecord
        totalHeadcount={props.totalHeadcount}
        headcount="83"
        recordDate="July 30, 2018"
        recordTime="9:00PM"
      />
      <HeadcountHistoryRecord
        totalHeadcount={props.totalHeadcount}
        headcount="96"
        recordDate="July 31, 2018"
        recordTime="10:00PM"
      />
      <HeadcountHistoryRecord
        totalHeadcount={props.totalHeadcount}
        headcount="100"
        recordDate="August 1, 2018"
        recordTime="12:00PM"
      />
    </div>
  );
};
