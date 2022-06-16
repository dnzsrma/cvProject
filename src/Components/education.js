import React from "react";
import EducationOverview from "./educationOverview";


export default class Education extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            EducationItem : {
                SchoolName : '',
                TitleOfStudy : '',
                DateOfStudy : '',
                Key : 1,
            },
            pressed : false,
            Educations: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
    }

    handleSchoolNameChange = (e) => {
        this.setState({
            EducationItem : {
                SchoolName: e.target.value,
                TitleOfStudy : this.state.EducationItem.TitleOfStudy,
                DateOfStudy : this.state.EducationItem.DateOfStudy,
                Key : this.state.EducationItem.Key
            }
        });
    };
    handleTitleChange = (e) => {
        this.setState({
            EducationItem : {
                SchoolName:this.state.EducationItem.SchoolName ,
                TitleOfStudy : e.target.value,
                DateOfStudy : this.state.EducationItem.DateOfStudy,
                Key : this.state.EducationItem.Key
            }
        });
    };
    handleDateChange = (e) => {
        this.setState({
            EducationItem : {
                SchoolName:this.state.EducationItem.SchoolName ,
                TitleOfStudy : this.state.EducationItem.TitleOfStudy,
                DateOfStudy : e.target.value,
                Key : this.state.EducationItem.Key
            }
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            Educations: this.state.Educations.concat(this.state.EducationItem),
            EducationItem : {
                SchoolName : '',
                TitleOfStudy : '',
                DateOfStudy : '',
                Key : this.state.EducationItem.Key + 1
            },
            pressed : false
        });
      };
    
    onClick = () =>
    {
        this.setState({
            pressed : true
        })
    }
    deleteAll = () =>
    {
        this.setState(
            {
                Educations : []
            }
        )
    }

    render(){
        const isPressed = this.state.pressed;
        let show;
        if(isPressed){
            show = 
            <div>
                <form id="eduForm" onSubmit={this.onSubmit}>
                    <input onChange={this.handleSchoolNameChange} placeholder="School Name" ></input>
                    <input onChange={this.handleTitleChange} placeholder="Title of study" ></input>
                    <input onChange={this.handleDateChange} placeholder="Date of Study" ></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        }
        else{
            show = <button onClick={this.onClick}>Add</button>
        }
        return (
            <div id="addEduContainer">
                <h1>Education</h1>
                <EducationOverview edit={this.state.Edit} array={this.state.Educations}/>
                {this.state.Educations.length > 0 &&
                    <button onClick={this.deleteAll} className="editButton">Clean</button>
                }               
                {show}
            </div>
        )
    }
}