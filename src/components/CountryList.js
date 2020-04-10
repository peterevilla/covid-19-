import React from "react";

const CountryList = props => {

  
  return (
    <ul>
      {props.list.map(item => (
        <div className='countries'>
      <img src={item.countryInfo.flag}></img><p>{item.country}</p>
      </div>
    ))}
    </ul>
  );
};

export default CountryList;