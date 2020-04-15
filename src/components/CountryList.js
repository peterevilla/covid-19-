import React from "react";
import { Link } from 'react-router-dom'

const CountryList = props => {

  
  return (
    <ul>
      {props.list.map(item => (
        <div>
      <Link div className='countries' to={`/countries/${item.country}`}> <img  src={item.countryInfo.flag}></img><p>{item.country}</p></Link>
      </div>
    ))}
    </ul>
  );
};

export default CountryList;