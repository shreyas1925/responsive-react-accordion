import React, { useState } from "react";
import customapi from "../customapi";
import AddIcon from "@material-ui/icons/Add";
import "./accordion.css";
import MainAccordion from "./MainAccordion";
import "bootstrap/dist/css/bootstrap.min.css";

const Accordion = () => {
  const [data, setData] = useState(customapi);
  return (
    <>
      <div className="top-div ">
        <div className="main-div">
          <h1>React Accordion </h1>

          {data.map((curelem) => {
            return <MainAccordion key={curelem.id} {...curelem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
