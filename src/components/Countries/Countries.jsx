import React, { use } from "react";
import Country from "../Country/Country";
import './countries.css'
const Countries = ({ countriesPromises }) => {
    const countriesData=use(countriesPromises);
    console.log(countriesData);
    const countries=countriesData.countries;
    console.log(countries);
  return (
    <div >
      <h1>Welcome the world tour...</h1>
      <h1>Length:{countries.length}</h1>
      <div className="country1">
     {
        countries.map((country,idx)=><Country key={idx}  country={country}></Country>)
     }</div>
    </div>
  );
};

export default Countries;
