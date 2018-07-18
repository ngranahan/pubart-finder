import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import API from '../utils/API';
import './Login.css';
import {Row,Col } from 'react-bootstrap';

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    // componentDidMount() {
    //     this.clearForm();
    //   }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // this.clearForm();
        event.preventDefault();
        if (this.state.username && this.state.password) {

            API.loginUser({
                username: this.state.username,
                password: this.state.password
            }).then(res => {
                console.log(res);
                this.props.history.push("/");
                // this.history.pushState(null, 'login');
            })
            .catch(err => console.log(err));
            
        
            /*
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
            */
        }   
    };

    // clearForm = () => {
    //     document.getElementById("myForm").reset(); 
    //     this.setState({
    //         username: '',
    //         password: ''
    //     });
    //   };





    render() {
        return (
            <div className="pageContainer" className="flex-grid" >  
                <div className="overlay">
                <div className="loginContainer" > 

                    <div className="logTitle">
                         <h1 className= "text-center" >Login</h1>
                         <p className="lead" className= "text-center"> <h4> Please enter your credentials below. </h4></p>
                         <br />
                         <br />
                    </div>
              

                    <div class="logBody">
                   
                    <div>
                    <p className="lead" className= "text-center">Please enter your credentials below.</p>
                    <br />
                   
                    
            
                    
                    
                <form  className= "myFrom" action="/login" method="post" className="center-align" >
                    
                <div className="form-group">
                    {/* <label class="user" for="login-username"><span class="hidden">Username</span></label> */}
              
                    <input type='text' name="username" placeholder='Username' value={this.state.username} onChange={this.handleInputChange} />
                    </div>


                <div className="form-group">
                    {/* <label class="lock" for="login-password"><span class="hidden">Password</span></label> */}
                    
                    <input type='password' name="password" placeholder='Password' value={this.state.password} onChange={this.handleInputChange} />
                </div>


           <div className="show-grid text-center">
                
                    <button className="btn button1" type='submit' onClick={this.handleFormSubmit}>Submit</button>&nbsp;
                    <a className="btn button2" href='/'>Cancel</a> 
               
         </div>      
                    </form>
                    </div>
            </div>
            </div>
            </div>
            </div>
            
        )}


    }


        export default withRouter(Login);

               


           
 