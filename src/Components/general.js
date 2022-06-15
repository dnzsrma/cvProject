import React from "react";

export default class GeneralInfo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            inputs: {
                Name: '',
                LastName:'',
                Title: '',
                Email: '',
                Phone: '',
            },
            sent : false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }
    handleNameChange = (e) => {
        this.setState({
            inputs : {
                Name: e.target.value,
                LastName:this.state.inputs.LastName,
                Title: this.state.inputs.Title,
                Email: this.state.inputs.Email,
                Phone: this.state.inputs.Phone,
            }
        });
      };
    handleLastNameChange = (e) => {
        this.setState({
            inputs : {
                Name: this.state.inputs.Name,
                LastName: e.target.value,
                Title: this.state.inputs.Title,
                Email: this.state.inputs.Email,
                Phone: this.state.inputs.Phone,
            }
        });
      };
    handleTitleChange = (e) => {
        this.setState({
            inputs : {
                Name: this.state.inputs.Name,
                LastName: this.state.inputs.LastName,
                Title: e.target.value,
                Email: this.state.inputs.Email,
                Phone: this.state.inputs.Phone,
            }
        });
    };
    handleEmailChange = (e) => {
        this.setState({
            inputs : {
                Name: this.state.inputs.Name,
                LastName: this.state.inputs.LastName,
                Title: this.state.inputs.Title,
                Email: e.target.value,
                Phone: this.state.inputs.Phone,
            }
        });
    };
    handlePhoneChange = (e) => {
        this.setState({
            inputs : {
                Name: this.state.inputs.Name,
                LastName: this.state.inputs.LastName,
                Title: this.state.inputs.Title,
                Email: this.state.inputs.Email,
                Phone: e.target.value,
            }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            sent: true
        });
      };
    onClick = (e) =>{
        this.setState({
            sent: false
        });
    }


    

    render(){
        const isSubmit = this.state.sent;
        let show;
        if(isSubmit){
            show = <div className="InfoTab">
                        <button className="editButton" onClick={this.onClick}>Edit</button>
                        <p> Name: {this.state.inputs.Name}</p>
                        <p> Last Name : {this.state.inputs.LastName}</p>
                        <p> Title: {this.state.inputs.Title}</p>
                        <p> E-mail: {this.state.inputs.Email}</p>
                        <p> Phone Number: {this.state.inputs.Phone}</p>
                    </div>
            }
        else{
            show = <form onSubmit={this.onSubmit}>
                        <input onChange={this.handleNameChange} value={this.state.inputs.Name} placeholder="Name"></input>
                        <input onChange={this.handleLastNameChange} value={this.state.inputs.LastName}placeholder="Last Name"></input>
                        <input onChange={this.handleTitleChange} value={this.state.inputs.Title}placeholder="Title"></input>
                        <input onChange={this.handleEmailChange} value={this.state.inputs.Email}placeholder="Email"></input>
                        <input onChange={this.handlePhoneChange} value={this.state.inputs.Phone}placeholder="Phone Number"></input>
                        <button type="submit">Submit</button>
                    </form>
        }


       return (
        <div>
            <h1>General Info</h1>
            {show}
        </div>
        )
    }



}