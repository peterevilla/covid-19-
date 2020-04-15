import React from "react";

const CountryPage = props => {

  const paramItemId = props.match.params.country;


  const item = props.list.find(item => {
    return item.country === paramItemId;
});

console.log(item)
  return (
    <div className="stats-wrap">
      
      <div className="total-cases"><h1>Total</h1><p className='stats'>{item.cases}</p></div>
      <div className="new-cases"><h1>New Cases</h1><p className='stats'>{item.todayCases}</p></div>
      <div className="total-recovered"><h1>Total Recovered</h1><p className='stats'>{item.recovered}</p></div>
      <div className="Critical"><h1>Critical</h1><p className='stats'>{item.critical}</p></div>
      <div className="new-deaths"><h1>New Deaths</h1><p className='stats'>{item.todayDeaths}</p></div>
      <div className="total-deaths"><h1>Total Deaths</h1><p className='stats'>{item.deaths}</p></div>
      <div className="active-cases"><h1>Active Cases</h1><p className='stats'>{item.active}</p></div>
      <div className="cases-1m"><h1>Cases per 1M PP</h1><p className='stats'>{item.casesPerOneMillion}</p></div>
      <div className="deaths-1m"><h1>Deaths per 1M PP</h1><p className='stats'>{item.deathsPerOneMillion}</p></div>
      <h1>{item.country}</h1><img className='flag' src={item.countryInfo.flag}></img>
    </div>
  );
};

export default CountryPage;