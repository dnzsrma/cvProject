import React from "react";
import Education from "./Components/education";
import GeneralInfo from "./Components/general";
import Practical from "./Components/practicalExp";

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <GeneralInfo/>
        <Education/>
        <Practical/>
      </div>
    )
  }
}
