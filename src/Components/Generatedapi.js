
import React , { useState, useEffect } from "react";
import { NavHeader } from "./NavHeader";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Generatedapi = () => {
  const [generateCountries, setGenerateCountries] = useState([]);
  // const [originalCountries, setOriginalCountries] = useState([]);
  const [firstPage, setFirstPage] = useState(1);
  const [itemPage, setItempage] = useState(25);
  const [searchBar, setSearchBar] = useState("");
  const [filterOut, setFilterOut] = useState([])

  const firstBlockPage = firstPage * itemPage;
  const secondBlockPage = firstBlockPage - itemPage;

  let newpage = generateCountries.slice(secondBlockPage, firstBlockPage);

  const pageNumber = [];

  const displayArray = (e) => {
    return (
      <div>
        {
          setFirstPage(e.target.innerHTML)
        }
      </div>
    )
   
  };

  const search = (event) => {
    setSearchBar(event.target.value)
  };

  useEffect(() => {
    const filterNew = generateCountries.filter (({region})=> {
        return region.toLowerCase().includes(searchBar);
    });
    setFilterOut(filterNew)
    }, [generateCountries, searchBar])
  


  const elect = (event) => {
    const newDisplay = generateCountries.filter(
      (newset) => newset.region === event.target.innerText
    );
    setFilterOut(newDisplay);
       
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
      <div>{<NavHeader elect={elect} search={search} />}</div>

      <div className="row mt-5">
        {newpage.map(({ name, capital, flags, population, timezones }) => {
          return (
            <div key={name.common} className="col-md-3">
              <Card className="mt-4" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "150px" }}
                  src={flags.png}
                />
                <Card.Body>
                  <Card.Title>{name.common}</Card.Title>
                  <Card.Text>{name.official}</Card.Text>
                  <Button
                    style={{ backgroundColor: "orange" }}
                    variant="primary"
                  >
                    {capital}
                  </Button>
                  <Card.Title>**{population}</Card.Title>
                  <Button
                    style={{ backgroundColor: "orange" }}
                    variant="primary"
                  >
                    {timezones.slice(0, 2) + "....."}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
{/* 
        {filterOut.map(({ name, capital, flags, population, timezones }) => {
          return (
            <div key={name.common} className="col-md-3">
              <Card className="mt-4" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "150px" }}
                  src={flags.png}
                />
                <Card.Body>
                  <Card.Title>{name.common}</Card.Title>
                  <Card.Text>{name.official}</Card.Text>
                  <Button
                    style={{ backgroundColor: "orange" }}
                    variant="primary"
                  >
                    {capital}
                  </Button>
                  <Card.Title>**{population}</Card.Title>
                  <Button
                    style={{ backgroundColor: "orange" }}
                    variant="primary"
                  >
                    {timezones.slice(0, 2) + "....."}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })} */}

        {
          <div className="button-row mt-4">
            {pageNumber.map((btn) => {
              return (
                <button
                  className="ms-2"
                  style={{
                    width: "5%",
                    height: "100%",
                    backgroundColor: "orange",
                  }}
                  onClick={displayArray}
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
