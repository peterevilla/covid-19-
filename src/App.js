import React, { useState, useEffect } from "react";
import "./App.css";
import CountryPage from "./components/CountryPage";
import CountryList from "./components/CountryList";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import { Route, Link } from 'react-router-dom'
import Home from "./components/Home";

const App = () => {
  const [list, setList] = useState([]);

  

useEffect(() =>{

  axios
  .get(`https://corona.lmao.ninja/countries?sort=`)
  .then(response => {

      setList(response.data)
     

  })
  .catch(err => console.log(err.response));

},[]);
console.log(list)

  return (
    <body className='title'>
      <Link  to='/'><h1 >COVID-19 by Country</h1></Link>
    <div className="grid-container">
      
      <div className="search-">
        {/* <SearchForm /> */}
        <CountryList list={list} />
      </div>
      <Route exact path="/" render={routeProps => { return (<Home match={routeProps.match} list={list}/>);}}/>
      <Route path="/countries/:country" render={routeProps => { return (<CountryPage match={routeProps.match} list={list} />) }} />
    </div>
    </body>

   
  );
}


export default App;