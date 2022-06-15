import React from "react";
import Education from "./Components/education";
import GeneralInfo from "./Components/general";
import Practical from "./Components/practicalExp";

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <img id="imagePp" src="https://www.innovaxn.eu/wp-content/uploads/blank-profile-picture-973460_1280.png" alt="Profile Pic"></img>
        <GeneralInfo/>
        <Education/>
        <Practical/>
      </div>
    )
  }
}
