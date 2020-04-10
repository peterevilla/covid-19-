import React from "react";

const Stats = () => {
  return (
    <div className="stats-wrap">
      <div className="total-cases">Total</div>
      <div className="new-cases">New Cases</div>
      <div className="total-recovered">Total Recovered</div>
      <div className="Critical">Critical</div>
      <div className="new-deaths">New Deaths</div>
      <div className="total-deaths">Total Deaths</div>
      <div className="active-cases">Active Cases</div>
      <div className="cases-1m">Cases per 1M PP</div>
      <div className="deaths-1m">Deaths pero 1M PP</div>
    </div>
  );
};

export default Stats;