import React, { useState, useEffect } from "react";
import axios from 'axios'

const Home = () => {
  const [total, setTotal] = useState([]);

  useEffect(() => {
    axios
      .get(`https://corona.lmao.ninja/all`)
      .then((response) => {
        setTotal(response.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

console.log(total)
  return(
  
  
   <div className='world'>
       <div className='total-world'>
           Total Cases: {total.cases}
       </div>
       <br/><br/><br/><br/>
       <div className='total-world' >
           Total Deaths: {total.deaths}
       </div>
   </div>
  
 ) 
};

export default Home;
