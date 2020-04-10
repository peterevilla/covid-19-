import React, { useState, useEffect } from "react";
import "./App.css";
import Stats from "./components/Stats";
import CountryList from "./components/CountryList";
import SearchForm from "./components/SearchForm";
import axios from "axios";

const App = () => {
  const [list, setList] = useState([]);

useEffect(() =>{

  axios
  .get(`https://corona.lmao.ninja/countries?sort=country`)
  .then(response => {
    setList(response.data);

  })
  .catch(err => console.log(err.response));

},[]);

// const onSearch = (query) => {

//   axios
//   .get(`https://corona.lmao.ninja/countries/${query}`)
//   .then(response => {
//     setList(response.data);

//   })
//   .catch(err => console.log(err.response));

// } 

  
   
console.log(list)

  return (
    <div className="grid-container">
      <h1>COVID-19</h1>
      <div className="search-">
        <SearchForm />
        <CountryList list={list} />
      </div>
      <Stats />
    </div>

   
  );
}


export default App;