import React from "react";
import ExperienceOverview from './experienceOverview';

export default class Practical extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pressed : false,
            Experiences : [],
            Experience : {
                Company: '',
                Position: '',
                DateFrom: '',
                DateUntil: '',
                Key : 1
            }
            
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
        this.handlePositionNameChange = this.handlePositionNameChange.bind(this);
        this.handleDateFromChange = this.handleDateFromChange.bind(this);
        this.handleDateUntilChange = this.handleDateUntilChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
    }   
    onClick = () =>
    {
        this.setState({
            pressed : true
        })
    }
    handleCompanyNameChange = (e) => {
        this.setState({
            Experience : {
                Company: e.target.value,
                Position : this.state.Experience.Position,
                DateFrom : this.state.Experience.DateFrom,
                DateUntil : this.state.Experience.DateUntil,
                Key : this.state.Experience.Key
            }
        });
    };
    handlePositionNameChange = (e) => {
        this.setState({
            Experience : {
                Company: this.state.Experience.Company,
                Position : e.target.value,
                DateFrom : this.state.Experience.DateFrom,
                DateUntil : this.state.Experience.DateUntil,
                Key : this.state.Experience.Key
            }
        });
    };
    handleDateFromChange = (e) => {
        this.setState({
            Experience : {
                Company: this.state.Experience.Company,
                Position : this.state.Experience.Position,
                DateFrom : e.target.value,
                DateUntil : this.state.Experience.DateUntil,
                Key : this.state.Experience.Key
            }
        });
    };
    handleDateUntilChange = (e) => {
        this.setState({
            Experience : {
                Company: this.state.Experience.Company,
                Position : this.state.Experience.Position,
                DateFrom : this.state.Experience.DateFrom,
                DateUntil : e.target.value,
                Key : this.state.Experience.Key
            }
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            Experiences: this.state.Experiences.concat(this.state.Experience),
            Experience : {
                Company: '',
                Position: '',
                DateFrom: '',
                DateUntil: '',
                Key : this.state.Experience.Key + 1
            },
            pressed : false
        });
        console.log(this.state.Experiences)
      };

      deleteAll = () =>
      {
          this.setState(
              {
                  Experiences : []
              }
          )
      }

    render(){
        const isPressed = this.state.pressed;
        let show;
        if(isPressed){
            show = 
            <div>
                <form id="expForm" onSubmit={this.onSubmit}>
                    <input onChange={this.handleCompanyNameChange} placeholder="Company Name" ></input>
                    <input onChange={this.handlePositionNameChange} placeholder="Position" ></input>
                    <input onChange={this.handleDateFromChange} placeholder="Date From" ></input>
                    <input onChange={this.handleDateUntilChange} placeholder="Date Until" ></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        }
        else{
            show = <button onClick={this.onClick}>Add</button>
        }
        return (
            <div id="addExpContainer">
                <h1>Experience</h1>
                <ExperienceOverview array={this.state.Experiences}/>
                {this.state.Experiences.length > 0 &&
                    <button onClick={this.deleteAll} className="editButton">Clean</button>
                }
                {show}
            </div>
        )
    }
}