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
          <button className="button" onClick={addPatient}><svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8H12.75ZM11.25 16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16H11.25ZM8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75L8 11.25ZM16 12.75C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25L16 12.75ZM4 4V3.25C3.58579 3.25 3.25 3.58579 3.25 4H4ZM20 4H20.75C20.75 3.58579 20.4142 3.25 20 3.25V4ZM20 20V20.75C20.4142 20.75 20.75 20.4142 20.75 20H20ZM4 20H3.25C3.25 20.4142 3.58579 20.75 4 20.75V20ZM11.25 8V16H12.75V8H11.25ZM8 12.75L16 12.75L16 11.25L8 11.25L8 12.75ZM4 4.75H20V3.25H4V4.75ZM19.25 4V20H20.75V4H19.25ZM20 19.25H4V20.75H20V19.25ZM4.75 20V4H3.25V20H4.75Z" fill="#FFFFFF"></path> </g></svg>{state ? "Hasta Ekle" : "Hasta Sahibi Ekle"}</button>
          <div className="div--patientName">
            <label>Hasta Sahibi Adı</label>
            <Select options={options} placeholder="Seçiniz"/>
          </div>
        </div>
        {state ? <SideBar /> : <AddPatient />}
      </div>
    </div>
  );
}
