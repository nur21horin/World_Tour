import React, { useState } from "react";
import './country.css';

const Country = ({country, handleVisitedCountries }) => {

    const [visited,setVisited]=useState(false);

    const handleVisited=()=>{
        console.log("Handle visited");
        // if(visited){
        //     setVisited(false);
        // }else{
        // setVisited(true);
        // }
        setVisited(!visited);
        handleVisitedCountries(country);
    }


  return (
    <div className={`country ${visited &&'country-visited'}`}>
      <img src={country?.flags?.flags?.png} alt="`Flags of ${country.name.common}`" />
      <h1>Name: {country.name.common}</h1>
      <h2>Capital: {country.capital.capital}</h2>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
      <p>Language: {Object.values(country.languages.languages).join(" , ")}</p>

      <p>Continents: {country.continents.continents}</p>
      <button onClick={handleVisited}>
        {
            visited?"Visited":"Not visited"
        }
      </button>
    </div>
  );
};

export default Country;
