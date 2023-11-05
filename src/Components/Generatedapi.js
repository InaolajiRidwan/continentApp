import React from "react";
import { useState, useEffect } from "react";
import { NavHeader } from "./NavHeader";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Generatedapi = () => {
  const [generateCountries, setGenerateCountries] = useState([]);
  const [originalCountries, setOriginalCountries] = useState([]);
  const [firstPage, setFirstPage] = useState(1);
  const [itemPage, setItempage] = useState(25);
//   const [searchBar, setSearchBar] = useState('');
//   const [filterOut, setFilterOut] = useState([])

  const firstBlockPage = firstPage * itemPage;
  const secondBlockPage = firstBlockPage - itemPage;

  let newpage = generateCountries.slice(secondBlockPage, firstBlockPage);

  const pageNumber = [];

  const newresults = (event) => {
    setFirstPage(event.target.innerHTML);
  };

//   const search = (event) => {
//     setSearchBar(event.target.value)
//   };

//   useEffect(() => {
//     const filterNew = generateCountries.filter (({region})=> {
//         return region.toLowerCase().includes(searchBar);
//     });
//     setFilterOut(filterNew)
//     }, [generateCountries, searchBar])
  


  const elect = (event) => {
    const newDisplay = generateCountries.filter(
      (generateCountries) =>
        generateCountries.region === event.target.innerText
    );
    setGenerateCountries(newDisplay);
       
  };

  for (let i = 1; i <= Math.ceil(generateCountries.length / itemPage); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((json) => setGenerateCountries(json));
  }, []);
  console.log(generateCountries);

  return (
    <div>
      {<NavHeader elect={elect} />}

      <div className="row">
        {newpage.map(({ id, name, capital, flags, population, timezones }) => {
          return (
            <div className="col-md-3">
              <Card className="nt-4" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={flags.png} />
                <Card.Body>
                  <Card.Title>{name.common}</Card.Title>
                  <Card.Text>{name.official}</Card.Text>
                  <Button variant="primary">{capital}</Button>
                  <Card.Title>**{population}</Card.Title>
                  <Button variant="primary">
                    {timezones.slice(0, 2) + "....."}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        {
          <div className="button-row">
            {pageNumber.map((btn) => {
              return (
                <button
                  className="ms-2"
                  style={{ width: "5%", height: "100%" }}
                  onClick={newresults}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};
