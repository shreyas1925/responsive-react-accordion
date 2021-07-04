import React, { useState } from "react";
import customapi from "../customapi";
import "./accordion.css";
import MainAccordion from "./MainAccordion";
import "bootstrap/dist/css/bootstrap.min.css";

const Accordion = () => {
  const [data, setData] = useState(customapi);
  return (
    <>
      <div className="main-div">
        <h1>React Accordion </h1>

        {data.map((curelem) => {
          return <MainAccordion key={curelem.id} {...curelem} />;
        })}
      </div>
    </>
  );
};

export default Accordion;
