import React from "react";

export default class EducationOverview extends React.Component{

    render(){
        let show;
        if(this.props.edit){
            show = 
            this.props.array.map((edu) => {
                return (
                    <div className="educationDiv" key = {edu.Key}>
                        <p> School : {edu.SchoolName}</p>
                        <p> Title Of Study : {edu.TitleOfStudy}</p>
                        <p> Date Of Study: {edu.DateOfStudy}</p>
                    </div>
                )
            })
        }
        else{
            show = 
            this.props.array.map((edu) => {
                return (
                    <div className="educationDiv" key = {edu.Key}>
                        <p> School : {edu.SchoolName}</p>
                        <p> Title Of Study : {edu.TitleOfStudy}</p>
                        <p> Date Of Study: {edu.DateOfStudy}</p>
                    </div>
                )
            })
        }
        return(
            <div id="eduContainer">
                {show}
            </div>
        )
    }
}