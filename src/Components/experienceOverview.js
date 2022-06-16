import React from "react";

export default class ExperienceOverview extends React.Component{

    render(){
        return(
            <div id="expContainer">
                    {this.props.array.map((exp) => {
                        return (
                            <div className="experienceDiv" key = {exp.Key}>
                                <p className="bigp">{exp.Company}</p>
                                <p className="medp" >{exp.Position}</p>
                                <p className="littlep">{exp.DateFrom} - {exp.DateUntil}</p>
                            </div>
                        )
                    })}
            </div>
        )
    }
}