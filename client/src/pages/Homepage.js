import React, { Component } from 'react';
import API from '../utils/API';
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Photo from "../components/Photo";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import 'react-bootstrap';

class Homepage extends Component {
    
    state = {
        user: null
    };

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        // api call
        API.getUser()
            .then(res => {
                this.setState( res.data );
            })
            .catch(err => console.log(err));
    }

    logoutUser = event => {
        event.preventDefault();
        API.logoutUser().then(res => {
            console.log(res.data);
            if (res.data === true) {
                this.setState({ user: null });
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
        <div className="container">
            {/* <h1>Welcome</h1> */}
            { this.state.user ? (
                <div>
                <h1>Welcome { this.state.user.username } </h1>
                {/* <Navbar /> */}
                <SearchBar />
                <Photo />
                <Footer />
                    {/* <p>You are currently logged in as { this.state.user.username }</p> */}
                        <a className="btn btn-default" onClick={this.logoutUser}>Logout</a>
                </div>
            ) : (
                <div>
                <Navbar />
                <SearchBar />
                <Photo />
                <Footer />
                    {/* <p className="lead"> Login or register to continue.</p>
                    <a className="btn btn-default" href="/login">Login</a>&nbsp;
                    <a className="btn btn-default btn-primary" href="/register">Register</a> */}
                </div>
            )}
        </div>
        );
    }
}
export default Homepage;