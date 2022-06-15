import React from "react";

export default class ExperienceOverview extends React.Component{

    render(){
        return(
            <div id="expContainer">
                    {this.props.array.map((exp) => {
                        return (
                            <div className="experienceDiv" key = {exp.Key}>
                                <p> Company : {exp.Company}</p>
                                <p> Position: {exp.Position}</p>
                                <p> Date From: {exp.DateFrom}</p>
                                <p> Date Until: {exp.DateUntil}</p>
                            </div>
                        )
                    })}
            </div>
        )
    }
}