"use client";
import SideBar from "./sideBar";
import AddPatient from "./addPatient";
import Select from "react-select";
import React, { useState } from "react"

export default function Home() {

  const [state, setState] = useState(true);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  function addPatient() {
    setState(prevState => !prevState);
  }
  return (
    <div>
      <h1 className="header-h1">Yeni Hasta Kayıt</h1>
      <div className="mainContainer">
        <div className="div--container">
          <button className="button" onClick={addPatient}>{state ? "Hasta Ekle" : "Hasta Sahibi Ekle"}</button>
          <div className="div--patientName">
            <span>Hasta Sahibi Adı</span>
            <Select options={options} />
          </div>
        </div>
        {state ? <SideBar /> : <AddPatient />}
      </div>
    </div>
  );
}
