import React, { use, useState } from "react";
import Country from "../Country/Country";
import './countries.css'
const Countries = ({ countriesPromises }) => {
    const countriesData=use(countriesPromises);
    console.log(countriesData);
    const countries=countriesData.countries;
    console.log(countries);

    const [visitedCountries,setVisitedCountries]=useState([]);
    const handleVisitedCountries =(country)=>{
       // console.log('handle visited country clicked',country);
        const newVisitedCountries=[...visitedCountries,country];

        setVisitedCountries(newVisitedCountries);

    }
  return (
    <div >
      <h1>Welcome the world tour...</h1>
      <h1>Length:{countries.length}</h1>
      <h1>Visited Country:{setVisitedCountries.length}</h1>
      <ol>
        {
            visitedCountries.map(country=><li>{country.name.common}</li>)
        }
      </ol>
      <li className="visitedFlag">
        {
            visitedCountries.map(country=><li> <img className="photo" src={country?.flags?.flags?.png} alt="`Flags of ${country.name.common}`" /></li>)
        }
      </li>
      <div className="country1">
     {
        countries.map((country,idx)=><Country key={idx} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
     }</div>
    </div>
  );
};

export default Countries;
