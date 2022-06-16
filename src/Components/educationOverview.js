import React from "react";

export default class EducationOverview extends React.Component{

    render(){
        let show;
        if(this.props.edit){
            show = 
            this.props.array.map((edu) => {
                return (
                    <div className="educationDiv" key = {edu.Key}>
                        <p>{edu.SchoolName}</p>
                        <p className="littlep"> {edu.TitleOfStudy}</p>
                        <p>{edu.DateOfStudy}</p>
                    </div>
                )
            })
        }
        else{
            show = 
            this.props.array.map((edu) => {
                return (
                    <div className="educationDiv" key = {edu.Key}>
                        <p className="bigp">{edu.SchoolName}</p>
                        <p className="medp"> {edu.TitleOfStudy}</p>
                        <p className="littlep">{edu.DateOfStudy}</p>
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