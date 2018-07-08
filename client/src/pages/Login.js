import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import API from '../utils/API';
import './Login.css';
// import { Jumbotron, Grid, FormGroup,Row,Col } from 'react-bootstrap';

class Login extends Component {

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

    render() {
        return (
            <div className="pageContainer">
                <div className="loginContainer">
                     <div className="logTitle">
                     <h1 className= "text-center" >Login Page </h1>
                     </div>
                     <br />
                     <div class="logBody text-center">
                         <p className="lead" className= "text-center"> <h4> Please enter your credentials below. </h4></p>



              {/* <Row className="show-grid">
             <Col  xs={6} md={4} xsOffset={4}>  */}
             {/* <code>&lt;{'Col  xs={6} md={4} xsOffset={4}'} &gt;</code> */}
        {/* <br /> */}
            {/* <div class = "col"> */}

            {/* <div className ="panel panel-success"> */}



            {/* <div class="panel-body" className= "text-center">
                <p className="lead"> <h4> Please enter your credentials below. </h4></p> */}
            
                <div class="login-item">
                <form action="/login" method="post" style={ {'maxWidth': '300px'} }>
                    <div className="form-group">
                       {/*////  */}
                       <label class="user" for="login-username"> </label>
                        <input className="form-field" type='text' name="username" placeholder='Username' value={this.state.username} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group buttonGroup">
                        <input className="form-field" type='password' name="password" placeholder='Password' value={this.state.password} onChange={this.handleInputChange} />
                        <button className="btn btn-default button1" type='submit' onClick={this.handleFormSubmit}>Submit</button>&nbsp;
                        <a className="btn btn-default btn-primary button2" href='/'>Cancel</a>
                        </div>
                </form>
            </div>

                </div>  
             
                {/* </Col>
                </Row> */}
            </div>
            </div>
        );
    }
}



export default withRouter(Login);