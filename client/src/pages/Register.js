import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import API from '../utils/API';
import {Row,Col } from 'react-bootstrap';
// import './Register.css';



class Register extends Component {

    state = {
        username: '',
        password: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.registerUser({
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                this.props.history.push("/")
            })
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="pageContainer">
                <div className="overlay"> 
                <div className="loginContainer">

                    <div className="logTitle">
                         <h1 className= "text-center" > Register Page</h1>
                    </div>
              

                    <div>
                    <p className="lead" className= "text-center">Please enter your credentials below.</p>
                    <br />
                    <br />
                    
                    
                <form action="/register" method="post">
                    
                <div className="form-group">
                    {/* <label className="user" for="login-username"><span className="hidden">Username</span></label> */}
                    {/* <br /> */}
                    <input  type='text' name="username" placeholder='Username' value={this.state.username} onChange={this.handleInputChange} />
                    </div>


                <div className="form-group">
                    {/* <label className="lock" for="login-password"><span className="hidden">Password</span></label>
                    <br /> */}
                    <input  type='password' name="password" placeholder='Password' value={this.state.password} onChange={this.handleInputChange} />
                </div>


           <div className="show-grid text-center">
                
                <button className="btn btn-default button1" type='submit' onClick={this.handleFormSubmit}>Submit</button>&nbsp;
                
                
                    <a className="btn btn-default btn-primary button2" href='/'>Cancel</a> 
               
         </div>      
                    </form>
                    </div>
            </div>
            </div>
            </div>
        );
    }
}
export default withRouter(Register);